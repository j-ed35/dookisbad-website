/* ============================================
   DOOKISBAD.COM - Losses Table Logic
   ============================================ */

let currentSort = { col: 0, asc: false }; // Default: newest first
let filteredData = [...DUKE_LOSSES];

function init() {
  populateSeasonFilter();
  renderTable(DUKE_LOSSES);
  updateCount(DUKE_LOSSES.length);
}

function populateSeasonFilter() {
  const select = document.getElementById('seasonFilter');
  const seasons = [...new Set(DUKE_LOSSES.map(r => r[1]))].sort().reverse();
  seasons.forEach(s => {
    const opt = document.createElement('option');
    opt.value = s;
    opt.textContent = s;
    select.appendChild(opt);
  });
}

function renderTable(data) {
  const tbody = document.getElementById('lossesBody');
  tbody.innerHTML = data.map(row => {
    const isUpset = row[5] && (
      row[5].includes('LEGENDARY') ||
      row[5].includes('15-SEED') ||
      row[5].includes('14-SEED') ||
      row[5].includes('UPSET') ||
      row[5].includes('BUZZER') ||
      row[5].includes('LAST GAME EVER') ||
      row[5].includes('RUINED') ||
      row[5].includes('BEATDOWN') ||
      row[5].includes('42-POINT') ||
      row[5].includes('37-POINT') ||
      row[5].includes('35-POINT') ||
      row[5].includes('32-POINT') ||
      row[5].includes('CENTRAL MICHIGAN') ||
      row[5].includes('EASTERN MICHIGAN') ||
      row[5].includes('Championship game')
    );
    const upsetClass = isUpset ? ' class="upset"' : '';
    const typeLabel = row[4] === 'ncaa' ? 'NCAA' : row[4] === 'acc' ? 'ACC' : 'Non-Conf';
    return `<tr>
      <td>${formatDate(row[0])}</td>
      <td>${row[1]}</td>
      <td${upsetClass}>${row[2]}</td>
      <td>${row[3]}</td>
      <td>${typeLabel}</td>
      <td${upsetClass}>${row[5]}</td>
    </tr>`;
  }).join('');
}

function formatDate(dateStr) {
  const [y, m, d] = dateStr.split('-');
  return `${m}/${d}/${y}`;
}

function updateCount(count) {
  document.getElementById('lossCount').textContent = count;
}

function filterLosses() {
  const search = document.getElementById('searchInput').value.toLowerCase();
  const season = document.getElementById('seasonFilter').value;
  const type = document.getElementById('typeFilter').value;

  filteredData = DUKE_LOSSES.filter(row => {
    const matchSearch = !search ||
      row[2].toLowerCase().includes(search) ||
      row[0].includes(search) ||
      row[1].includes(search) ||
      row[5].toLowerCase().includes(search);
    const matchSeason = !season || row[1] === season;
    const matchType = !type || row[4] === type;
    return matchSearch && matchSeason && matchType;
  });

  renderTable(filteredData);
  updateCount(filteredData.length);
}

function sortTable(colIndex) {
  if (currentSort.col === colIndex) {
    currentSort.asc = !currentSort.asc;
  } else {
    currentSort.col = colIndex;
    currentSort.asc = true;
  }

  filteredData.sort((a, b) => {
    let valA = a[colIndex];
    let valB = b[colIndex];

    if (colIndex === 0) {
      // Date sort
      valA = new Date(valA);
      valB = new Date(valB);
    }

    if (valA < valB) return currentSort.asc ? -1 : 1;
    if (valA > valB) return currentSort.asc ? 1 : -1;
    return 0;
  });

  renderTable(filteredData);

  // Update sort arrows
  document.querySelectorAll('.sort-arrow').forEach(el => el.textContent = '');
  const arrows = document.querySelectorAll('.sort-arrow');
  if (arrows[colIndex]) {
    arrows[colIndex].textContent = currentSort.asc ? '\u25B2' : '\u25BC';
  }
}

init();
