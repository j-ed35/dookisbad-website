/* ============================================
   DOOKISBAD.COM - Main JS
   ============================================ */

// ---- COACH K'S WORST MOMENTS ----
const coachKMoments = [
  {
    year: "2018",
    title: "Tripped His Own Player",
    desc: "Coach K appeared to stick his leg out and trip his own player, Wendell Carter Jr., during a game. Classy leadership."
  },
  {
    year: "2017",
    title: "Told a Reporter to 'Shut Up'",
    desc: "After a loss to NC State, a reporter asked about free throw shooting. K told the female reporter to 'shut up' before storming out of the press conference."
  },
  {
    year: "2004",
    title: "Cursed Out a Student Section",
    desc: "During a game at Maryland, Coach K was caught on camera mouthing expletives directly at the student section. A true role model for young athletes."
  },
  {
    year: "2019",
    title: "Blamed the Refs (Again)",
    desc: "After losing to UNC, Coach K blamed officiating despite Duke shooting more free throws. A tale as old as time."
  },
  {
    year: "2006",
    title: "The Handshake Fake-Out",
    desc: "Coach K was known for giving the coldest, most dismissive handshakes after losses. Some opposing coaches reported he wouldn't even look them in the eye."
  },
  {
    year: "2011",
    title: "Screamed at a Freshman Until He Cried",
    desc: "Multiple reports surfaced of Coach K reducing freshmen to tears during practice with intense personal attacks disguised as 'motivation.'"
  },
  {
    year: "2022",
    title: "Made His Farewell Tour About Himself",
    desc: "Coach K's entire final season became a traveling circus of self-congratulation, complete with gifts, ceremonies, and standing ovations at every arena. Even Duke fans got tired of it."
  },
  {
    year: "2012",
    title: "Snitched to the ACC Office",
    desc: "Coach K reportedly called the ACC office to complain about other teams' student sections being too mean to his players. The man coached Army."
  },
  {
    year: "1995",
    title: "The Mysterious 'Back Injury'",
    desc: "Coach K took an entire season off due to a 'back injury' that conveniently coincided with one of Duke's worst teams. Returned when the talent pipeline refilled."
  },
  {
    year: "2015",
    title: "Recruited One-and-Dones While Criticizing the System",
    desc: "Publicly criticized the one-and-done rule while simultaneously building his entire program around one-and-done players. Peak hypocrisy."
  },
  {
    year: "2007",
    title: "Threw Players Under the Bus",
    desc: "After an early tournament exit, Coach K publicly called out individual players by name in the press conference, blaming them for the loss."
  },
  {
    year: "2016",
    title: "Floor Slap Culture",
    desc: "Coach K cultivated a culture where Duke players would aggressively slap the floor on defense, only to immediately get scored on. Every. Single. Time."
  },
  {
    year: "2001",
    title: "The Charge-Taking Factory",
    desc: "Perfected the art of teaching players to flop and take charges, turning Duke basketball into a glorified soccer match."
  },
  {
    year: "2014",
    title: "Lost to Mercer as a 3-Seed",
    desc: "Got bounced in the first round of the NCAA Tournament by 14-seed Mercer. The Bears. From Macon, Georgia. Beautiful."
  },
  {
    year: "2012",
    title: "Lost to 15-Seed Lehigh",
    desc: "Duke, a 2-seed, lost to 15-seed Lehigh in the first round. Lehigh. A school most people need to Google. Legendary upset."
  },
  {
    year: "2007",
    title: "Lost to VCU as a 6-Seed",
    desc: "First round exit to VCU. Coach K had no answers and no excuses (just kidding, he had plenty of excuses)."
  },
  {
    year: "2005",
    title: "Turned Down the Lakers, Then Bragged About It",
    desc: "Used the Lakers coaching offer as leverage, turned it down, then spent years making sure everyone knew he turned down the NBA. We get it, Coach."
  },
  {
    year: "2020",
    title: "Lost to Stephen F. Austin at Home",
    desc: "Lost to Stephen F. Austin on a buzzer-beater at Cameron Indoor. The Lumberjacks chopped down the Blue Devils in their own house."
  },
  {
    year: "2022",
    title: "Lost Final Home Game to UNC",
    desc: "In Coach K's final game at Cameron Indoor, UNC came in and won. The Tar Heels ruined his farewell party. Poetic justice."
  },
  {
    year: "2022",
    title: "Lost to UNC in the Final Four",
    desc: "In Coach K's absolute last game ever, UNC beat Duke in the Final Four. His career literally ended with a loss to his biggest rival. You can't script it better."
  }
];

// Display a random selection of moments
function shuffleMoments() {
  const container = document.getElementById('momentsContainer');
  if (!container) return;

  // Shuffle and pick 5
  const shuffled = [...coachKMoments].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, 5);

  container.innerHTML = selected.map(m => `
    <div class="moment-card">
      <div class="moment-year">${m.year}</div>
      <div class="moment-title">${m.title}</div>
      <div class="moment-desc">${m.desc}</div>
    </div>
  `).join('');
}

// Initialize moments on page load
shuffleMoments();


// ---- LIVE SCORE TRACKER ----
// Uses ESPN's public API to check for Duke men's basketball games

async function fetchDukeScore() {
  const scoreContent = document.getElementById('scoreContent');
  if (!scoreContent) return;

  try {
    // ESPN scoreboard API for men's college basketball
    const response = await fetch('https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/scoreboard');

    if (!response.ok) throw new Error('ESPN API unavailable');

    const data = await response.json();

    // Find Duke's game (team ID 150)
    const dukeGame = data.events?.find(event =>
      event.competitions?.[0]?.competitors?.some(team =>
        team.team?.id === '150' || team.team?.abbreviation === 'DUKE'
      )
    );

    if (!dukeGame) {
      scoreContent.innerHTML = '<p class="no-game">No Duke game today. Check back later (or don\'t, we won\'t judge).</p>';
      return;
    }

    const competition = dukeGame.competitions[0];
    const homeTeam = competition.competitors.find(c => c.homeAway === 'home');
    const awayTeam = competition.competitors.find(c => c.homeAway === 'away');

    const isDukeHome = homeTeam.team.id === '150' || homeTeam.team.abbreviation === 'DUKE';
    const dukeTeam = isDukeHome ? homeTeam : awayTeam;
    const opponent = isDukeHome ? awayTeam : homeTeam;

    const dukeScore = dukeTeam.score || '0';
    const oppScore = opponent.score || '0';
    const status = competition.status;
    const statusText = status?.type?.shortDetail || '';
    const isLive = status?.type?.state === 'in';
    const isFinal = status?.type?.state === 'post';

    const dukeLosing = parseInt(dukeScore) < parseInt(oppScore);

    let statusClass = '';
    let statusDisplay = statusText;
    if (isLive) {
      statusClass = 'live';
      statusDisplay = '🔴 LIVE - ' + statusText;
    }
    if (isFinal && dukeLosing) {
      statusDisplay += ' - DUKE LOSES! 🎉';
    }

    scoreContent.innerHTML = `
      <div class="matchup">
        <div class="team">
          <span class="team-name">${awayTeam.team.abbreviation || awayTeam.team.shortDisplayName}</span>
          <span class="team-score">${awayTeam.score || '0'}</span>
        </div>
        <span class="vs">${isLive ? 'vs' : (isFinal ? 'FINAL' : 'vs')}</span>
        <div class="team">
          <span class="team-name duke">${homeTeam.team.abbreviation || homeTeam.team.shortDisplayName}</span>
          <span class="team-score">${homeTeam.score || '0'}</span>
        </div>
      </div>
      <div class="game-status ${statusClass}">${statusDisplay}</div>
    `;

    // If game is live, refresh every 30 seconds
    if (isLive) {
      setTimeout(fetchDukeScore, 30000);
    }

  } catch (err) {
    scoreContent.innerHTML = '<p class="no-game">Could not load scores. ESPN might be protecting Duke from embarrassment.</p>';
  }
}

fetchDukeScore();
