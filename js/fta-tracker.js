/* ============================================
   DOOKISBAD.COM - 2026 NCAA Tournament FTA Tracker
   ============================================ */

// ---- EASY-TO-EDIT CONSTANTS ----
// Seed totals — add each game's FTA here after it concludes
const DUKE_SEED_FTA = 68;
const OPP_SEED_FTA  = 24;

// Live polling window — set to the specific game date and hour range (ET, 24-hour clock)
// Update POLL_DATE to 'YYYY-MM-DD' for the next game day, or '' to poll any day
const POLL_DATE          = '2026-03-29'; // e.g. '2026-03-29'; set '' to match any date
const POLL_START_HOUR_ET = 17;           // 5:00 PM ET
const POLL_END_HOUR_ET   = 24;           // midnight ET (covers late games)

const POLL_INTERVAL_MS = 60000; // 60 seconds

// ESPN public API — no key required, works from browser
const ESPN_BASE = 'https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball';
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

function getTodayET() {
  // Returns today's date string as 'YYYY-MM-DD' in Eastern Time
  return new Date().toLocaleDateString('en-CA', { timeZone: 'America/New_York' });
}

function isInPollingWindow() {
  const h = getEtHour();
  const dateMatch = !POLL_DATE || getTodayET() === POLL_DATE;
  return dateMatch && h >= POLL_START_HOUR_ET && h < POLL_END_HOUR_ET;
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

// ---- ESPN API HELPERS ----

async function fetchScoreboard() {
  const res = await fetch(`${ESPN_BASE}/scoreboard`);
  if (!res.ok) throw new Error(`Scoreboard HTTP ${res.status}`);
  return res.json();
}

async function fetchSummary(eventId) {
  const res = await fetch(`${ESPN_BASE}/summary?event=${eventId}`);
  if (!res.ok) throw new Error(`Summary HTTP ${res.status}`);
  return res.json();
}

function isDukeTeam(team) {
  const name = (team?.displayName || team?.abbreviation || team?.name || '').toLowerCase();
  return name.includes('duke');
}

function extractFTAFromESPN(teamStats) {
  // teamStats.statistics is an array of { name, displayValue, label } objects
  const stats = teamStats.statistics || [];

  // Case 1: separate freeThrowsAttempted stat or FTA label
  const ftaStat = stats.find(s =>
    s.name === 'freeThrowsAttempted' || s.label === 'FTA'
  );
  if (ftaStat) return parseInt(ftaStat.displayValue || '0', 10) || 0;

  // Case 2: ESPN college basketball often combines FT as "made-attempted" string
  // e.g. { name: "freeThrowsMade-freeThrowsAttempted", displayValue: "10-12", label: "FT" }
  const ftCombined = stats.find(s =>
    s.label === 'FT' || (s.name || '').toLowerCase().includes('freethrow')
  );
  if (ftCombined) {
    const parts = (ftCombined.displayValue || '').split('-');
    if (parts.length === 2) return parseInt(parts[1], 10) || 0;
    return parseInt(parts[0], 10) || 0;
  }

  console.warn('[FTA Tracker] Could not find FT stat in:', stats);
  return 0;
}

// ---- MAIN FETCH ----

async function fetchLiveFTA() {
  setStatus('Checking for live games\u2026');
  try {
    const board = await fetchScoreboard();
    const events = board.events || [];

    // Find a Duke game
    let dukeEvent = null;

    for (const event of events) {
      const competitors = event.competitions?.[0]?.competitors || [];
      const hasDuke = competitors.some(c => isDukeTeam(c.team));
      if (hasDuke) {
        dukeEvent = event;
        break;
      }
    }

    if (!dukeEvent) {
      setStatus('No Duke game found today.');
      return;
    }

    const statusName = dukeEvent.status?.type?.name || '';
    const isLive  = statusName === 'STATUS_IN_PROGRESS' || statusName === 'STATUS_HALFTIME';
    const isFinal = statusName === 'STATUS_FINAL' || statusName === 'STATUS_FINAL_OT';

    if (!isLive && !isFinal) {
      const clock = dukeEvent.status?.displayClock || '';
      const period = dukeEvent.status?.period || '';
      setStatus(`Duke game not yet started${clock ? ` — ${clock}` : ''}.`);
      return;
    }

    // Fetch the box score summary for FTA
    const summary = await fetchSummary(dukeEvent.id);
    const boxTeams = summary.boxscore?.teams || [];

    let dukeFTA = 0;
    let oppFTA  = 0;

    for (const teamStats of boxTeams) {
      if (isDukeTeam(teamStats.team)) {
        dukeFTA = extractFTAFromESPN(teamStats);
      } else {
        oppFTA = extractFTAFromESPN(teamStats);
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
      setStatus(`${label} \u2014 FTA not yet available.`);
    }

  } catch (err) {
    console.error('[FTA Tracker]', err);
    setStatus(`Error: ${err.message}`);
  }
}

// ---- POLLING ----

function startPolling() {
  if (pollTimer) return;
  fetchLiveFTA();
  pollTimer = setInterval(() => {
    if (!isInPollingWindow()) {
      stopPolling();
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

  if (isInPollingWindow()) {
    startPolling();
  }
}

document.addEventListener('DOMContentLoaded', initFTA);
