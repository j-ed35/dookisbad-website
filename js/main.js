/* ============================================
   DOOKISBAD.COM - Main JS
   ============================================ */

// ---- WHY DOOK IS BAD ----
const dookReasons = [
  {
    title: "darth k Gets Technical After Throwing Marker",
    url: "https://amp.foxsports.com/stories/college-basketball/im-so-mad-i-could-coach-k-gets-ted-up-after-throwing-his-marker",
    img: "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2020/03/1280/960/031614-2-CBK-Duke-Mike-Krzyzewski-OB-PI.jpg?ve=1&tl=1"
  },
  {
    title: "darth k's Long History of Sideline Tantrums",
    url: "https://www.newsobserver.com/sports/college/acc/duke/article259092433.html",
    img: ""
  },
  {
    title: "Krzyzewski Caught Lying — Again",
    url: "https://bleacherreport.com/articles/2627911-krzyzewskis-apology-after-caught-lying-another-sign-hes-changing-for-the-worse",
    img: ""
  },
  {
    title: "darth k Snubs Handshake After Loss",
    url: "https://www.latimes.com/sports/sportsnow/la-sp-sn-watch-duke-mike-krzyzewski-snub-handshake-20160119-htmlstory.html",
    img: ""
  },
  {
    title: "darth k vs. Dillon Brooks Handshake Incident",
    url: "https://www.espn.com/mens-college-basketball/story/_/id/15063575/duke-coach-mike-krzyzewski-oregon-star-dillon-brooks-disagree-handshake-exchange",
    img: "https://a.espncdn.com/photo/2016/0324/r66823_1296x729_16-9.jpg"
  },
  {
    title: "darth k Gives Stately Duke an Undignified Jolt",
    url: "https://www.nytimes.com/1990/01/24/sports/coach-k-gives-stately-duke-an-undignified-jolt.html",
    img: ""
  },
  {
    title: "darth k Loses It on the Sideline (Video)",
    url: "https://www.youtube.com/watch?v=atJFkZNlVJk",
    img: "https://img.youtube.com/vi/atJFkZNlVJk/hqdefault.jpg"
  },
  {
    title: "darth k Berates Student Reporter",
    url: "https://awfulannouncing.com/ncaa/mike-krzyzewski-student-reporter.html",
    img: "https://awfulannouncing.com/wp-content/uploads/sites/94/2021/01/15456606.jpg"
  },
  {
    title: "Duke's Culture of Entitlement",
    url: "https://apnews.com/article/cbc85c10fc3b4aa489374e8844692e0b",
    img: ""
  },
  {
    title: "Gerald Henderson Breaks Tyler Hansbrough's Nose",
    url: "https://www2.kusports.com/news/2007/mar/05/bloody_finale_unc_duke/",
    img: "https://ogden_images.s3.amazonaws.com/www.kusports.com/images/2007/03/10170409/Duke_N_Carolina_colo_2k-798x938.jpg"
  },
  {
    title: "Audio Reveals darth k Lied About Post-Game Exchange",
    url: "https://www.slate.com/blogs/the_slatest/2016/03/26/audio_reveals_duke_s_coach_k_lied_about_post_game_exchange_with_oregon_player.html",
    img: "https://www.slate.com/content/dam/slate/blogs/the_slatest/2016/03/26/audio_reveals_duke_s_coach_k_lied_about_post_game_exchange_with_oregon_player/517366292-head-coach-mike-krzyzewski-of-the-duke-blue-devils.jpg.CROP.promo-mediumlarge.jpg"
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
      ${m.img ? `<img src="${m.img}" alt="" class="moment-img">` : ''}
      <div class="moment-title">${m.title}</div>
    </a>
  `).join('');
}

// Initialize on page load
shuffleMoments();
