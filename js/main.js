/* ============================================
   DOOKISBAD.COM - Main JS
   ============================================ */

// ---- WHY DOOK IS BAD ----
const dookReasons = [
  {
    title: "Coach K Gets Technical After Throwing Marker",
    url: "https://amp.foxsports.com/stories/college-basketball/im-so-mad-i-could-coach-k-gets-ted-up-after-throwing-his-marker"
  },
  {
    title: "Coach K's Long History of Sideline Tantrums",
    url: "https://www.newsobserver.com/sports/college/acc/duke/article259092433.html"
  },
  {
    title: "Krzyzewski Caught Lying — Again",
    url: "https://bleacherreport.com/articles/2627911-krzyzewskis-apology-after-caught-lying-another-sign-hes-changing-for-the-worse"
  },
  {
    title: "Coach K Snubs Handshake After Loss",
    url: "https://www.latimes.com/sports/sportsnow/la-sp-sn-watch-duke-mike-krzyzewski-snub-handshake-20160119-htmlstory.html"
  },
  {
    title: "Coach K vs. Dillon Brooks Handshake Incident",
    url: "https://www.espn.com/mens-college-basketball/story/_/id/15063575/duke-coach-mike-krzyzewski-oregon-star-dillon-brooks-disagree-handshake-exchange"
  },
  {
    title: "Coach K Gives Stately Duke an Undignified Jolt",
    url: "https://www.nytimes.com/1990/01/24/sports/coach-k-gives-stately-duke-an-undignified-jolt.html"
  },
  {
    title: "Coach K Loses It on the Sideline (Video)",
    url: "https://www.youtube.com/watch?v=atJFkZNlVJk"
  },
  {
    title: "Coach K Berates Student Reporter",
    url: "https://awfulannouncing.com/ncaa/mike-krzyzewski-student-reporter.html"
  },
  {
    title: "Duke's Culture of Entitlement",
    url: "https://apnews.com/article/cbc85c10fc3b4aa489374e8844692e0b"
  },
  {
    title: "Gerald Henderson Breaks Tyler Hansbrough's Nose",
    url: "https://www2.kusports.com/news/2007/mar/05/bloody_finale_unc_duke/"
  },
  {
    title: "Audio Reveals Coach K Lied About Post-Game Exchange",
    url: "https://www.slate.com/blogs/the_slatest/2016/03/26/audio_reveals_duke_s_coach_k_lied_about_post_game_exchange_with_oregon_player.html"
  }
];

// Display a random selection of reasons
function shuffleMoments() {
  const container = document.getElementById('momentsContainer');
  if (!container) return;

  const shuffled = [...dookReasons].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, 5);

  container.innerHTML = selected.map(m => `
    <a href="${m.url}" target="_blank" rel="noopener noreferrer" class="moment-card">
      <div class="moment-title">${m.title}</div>
    </a>
  `).join('');
}

// Initialize on page load
shuffleMoments();
