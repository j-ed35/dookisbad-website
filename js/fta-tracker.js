/* ============================================
   DOOKISBAD.COM - 2026 NCAA Tournament FTA Tracker
   ============================================ */

// ---- EASY-TO-EDIT CONSTANTS ----
// Seed totals — add each game's FTA here after it concludes
const DUKE_SEED_FTA = 68;
const OPP_SEED_FTA  = 24;

// Live polling window (Eastern Time, 24-hour clock)
// Update these for each game day as needed
const POLL_START_HOUR_ET = 17;  // 5:00 PM ET
const POLL_END_HOUR_ET   = 20;  // 8:00 PM ET

const POLL_INTERVAL_MS = 60000; // 60 seconds

// NCAA API base — uses the henrygd/ncaa-api public proxy
const NCAA_API_BASE = 'https://ncaa-api.henrygd.me';
// ----------------------------------------

let pollTimer = null;

// ---- UTILITIES ----

function getEtHour() {
  // Returns the current hour (0-23) in America/New_York timezone
  const etStr = new Date().toLocaleString('en-US', {
    timeZone: 'America/New_York',
    hour: 'numeric',
    hour12: false
  });
  return parseInt(etStr, 10);
}

function isInPollingWindow() {
  const h = getEtHour();
  return h >= POLL_START_HOUR_ET && h < POLL_END_HOUR_ET;
}

function setStatus(text) {
  const el = document.getElementById('ftaStatus');
  if (el) el.textContent = text;
}

function setNumbers(dook, opp) {
  const dEl = document.getElementById('ftaDook');
  const oEl = document.getElementById('ftaOpponents');
  if (dEl) dEl.textContent = dook;
  if (oEl) oEl.textContent = opp;
}

// ---- NCAA API HELPERS ----

async function fetchScoreboard() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  const url = `${NCAA_API_BASE}/scoreboard/basketball-men/d1/${y}/${m}/${d}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Scoreboard HTTP ${res.status}`);
  return res.json();
}

async function fetchBoxscore(gameUrl) {
  // gameUrl is typically a relative path like /game/6277577/boxscore
  // The ncaa-api may surface it as a URL string on the game object
  const full = gameUrl.startsWith('http')
    ? gameUrl
    : `${NCAA_API_BASE}${gameUrl.startsWith('/') ? '' : '/'}${gameUrl}`;
  const res = await fetch(full);
  if (!res.ok) throw new Error(`Boxscore HTTP ${res.status}`);
  return res.json();
}

function extractFTAFromTeam(team) {
  // Try common stat shapes returned by ncaa-api / NCAA JSON
  const stats = team.stats || team.totals || team.statistics || {};

  // Direct key lookup
  for (const key of ['fta', 'FTA', 'ftAttempts', 'freeThrowAttempts']) {
    if (stats[key] !== undefined) return parseInt(stats[key], 10) || 0;
  }

  // Iterate a statList array (some ncaa-api shapes)
  const list = stats.statList || team.statList || [];
  for (const s of list) {
    const label = (s.label || s.name || s.stat || '').toLowerCase();
    if (label.includes('free throw') && label.includes('attempt')) {
      return parseInt(s.value || s.total || 0, 10) || 0;
    }
  }

  return 0;
}

// ---- MAIN FETCH ----

async function fetchLiveFTA() {
  setStatus('Checking for live games\u2026');
  try {
    const board = await fetchScoreboard();
    const games = board.games || [];

    // Find a Duke game
    let dukeGame = null;
    let dukeIsHome = false;

    for (const entry of games) {
      const g = entry.game || entry;
      const home = (g.home?.names?.full || g.home?.name || '').toLowerCase();
      const away = (g.away?.names?.full || g.away?.name || '').toLowerCase();
      if (home.includes('duke') || away.includes('duke')) {
        dukeGame = g;
        dukeIsHome = home.includes('duke');
        break;
      }
    }

    if (!dukeGame) {
      setStatus('No Duke game found today.');
      return;
    }

    const state = (dukeGame.gameState || dukeGame.status || '').toLowerCase();
    const isLive  = state === 'live' || state === 'in progress' || state === 'inprogress';
    const isFinal = state === 'final' || state === 'final/ot';

    if (!isLive && !isFinal) {
      setStatus(`Duke game status: ${state || 'not started yet'}.`);
      return;
    }

    // Grab a URL we can use to request the boxscore
    const gameRef = dukeGame.url || dukeGame.gameID || dukeGame.id;
    if (!gameRef) {
      setStatus(isLive ? 'Live game found \u2014 FTA unavailable.' : 'Final \u2014 FTA unavailable.');
      return;
    }

    // Try to build the boxscore URL
    // ncaa-api often exposes /game/{id}/boxscore
    const boxUrl = typeof gameRef === 'string' && gameRef.includes('boxscore')
      ? gameRef
      : `/game/${gameRef}/boxscore`;

    const box = await fetchBoxscore(boxUrl);

    // Extract team stats — shape varies
    const teams = box.teams
      || (box.game && box.game.teams)
      || (box.gameState && box.gameState.teams)
      || [];

    let dukeFTA = 0;
    let oppFTA  = 0;

    for (const team of teams) {
      const name = (team.name || team.fullName || team.nameShort || '').toLowerCase();
      const isDuke = name.includes('duke');
      const fta = extractFTAFromTeam(team);
      if (isDuke) {
        dukeFTA = fta;
      } else {
        oppFTA = fta;
      }
    }

    if (dukeFTA > 0 || oppFTA > 0) {
      setNumbers(DUKE_SEED_FTA + dukeFTA, OPP_SEED_FTA + oppFTA);
      const label = isLive ? 'LIVE' : 'Final';
      const timeStr = new Date().toLocaleTimeString('en-US', {
        timeZone: 'America/New_York',
        hour: 'numeric',
        minute: '2-digit'
      });
      setStatus(`${label} \u2014 updated ${timeStr} ET`);
    } else {
      const label = isLive ? 'Live game found' : 'Game final';
      setStatus(`${label} \u2014 FTA not available from API.`);
    }

  } catch (err) {
    console.error('[FTA Tracker]', err);
    setStatus('Could not load live data.');
  }
}

// ---- POLLING ----

function startPolling() {
  if (pollTimer) return;
  fetchLiveFTA();
  pollTimer = setInterval(() => {
    if (!isInPollingWindow()) {
      stopPolling();
      setStatus('Outside polling window. Showing seed totals.');
      return;
    }
    fetchLiveFTA();
  }, POLL_INTERVAL_MS);
}

function stopPolling() {
  if (pollTimer) {
    clearInterval(pollTimer);
    pollTimer = null;
  }
}

// Exposed for the manual refresh button
function refreshFTA() {
  fetchLiveFTA();
}

// ---- INIT ----

function initFTA() {
  // Always show seed totals as the baseline
  setNumbers(DUKE_SEED_FTA, OPP_SEED_FTA);

  const hour = getEtHour();
  if (isInPollingWindow()) {
    startPolling();
  } else if (hour < POLL_START_HOUR_ET) {
    const startLabel = POLL_START_HOUR_ET > 12
      ? `${POLL_START_HOUR_ET - 12}pm`
      : `${POLL_START_HOUR_ET}am`;
    setStatus(`Live updates start at ${startLabel} ET.`);
  } else {
    setStatus('Showing seed totals.');
  }
}

document.addEventListener('DOMContentLoaded', initFTA);
