const API_KEY = 'YOUR_CRICBUZZ_API_KEY';
const matchesListEl = document.getElementById('matchesList');
const seriesListEl = document.getElementById('seriesList');
const matchDetailsEl = document.getElementById('matchDetails');
const matchesSection = document.getElementById('matchesSection');
const seriesSection = document.getElementById('seriesSection');
const matchDetailsSection = document.getElementById('matchDetailsSection');

// Fetch ongoing and upcoming matches
const fetchMatches = async () => {
  try {
    const response = await fetch(`https://api.cricbuzz.com/api/matches/list?apikey=${API_KEY}`);
    const data = await response.json();
    displayMatches(data.matches);
  } catch (error) {
    console.error("Error fetching matches: ", error);
  }
};

// Fetch cricket series
const fetchSeries = async () => {
  try {
    const response = await fetch(`https://api.cricbuzz.com/api/series/list?apikey=${API_KEY}`);
    const data = await response.json();
    displaySeries(data.series);
  } catch (error) {
    console.error("Error fetching series: ", error);
  }
};

// Display matches in cards
const displayMatches = (matches) => {
  matchesListEl.innerHTML = '';
  matches.forEach(match => {
    const matchCard = document.createElement('div');
    matchCard.classList.add('card');
    matchCard.innerHTML = `
      <h3>${match.team1.name} vs ${match.team2.name}</h3>
      <p>Scheduled: ${new Date(match.startDate).toLocaleString()}</p>
      <button onclick="fetchMatchDetails(${match.id})">View Details</button>
    `;
    matchesListEl.appendChild(matchCard);
  });
};

// Display series in cards
const displaySeries = (series) => {
  seriesListEl.innerHTML = '';
  series.forEach(serie => {
    const seriesCard = document.createElement('div');
    seriesCard.classList.add('card');
    seriesCard.innerHTML = `
      <h3>${serie.name}</h3>
      <p>Start Date: ${new Date(serie.startDate).toLocaleString()}</p>
      <button onclick="fetchSeriesMatches(${serie.id})">View Matches</button>
    `;
    seriesListEl.appendChild(seriesCard);
  });
};

// Fetch match details
const fetchMatchDetails = async (matchId) => {
  try {
    const response = await fetch(`https://api.cricbuzz.com/api/matches/get-info?matchId=${matchId}&apikey=${API_KEY}`);
    const data = await response.json();
    displayMatchDetails(data);
  } catch (error) {
    console.error("Error fetching match details: ", error);
  }
};

// Display match details
const displayMatchDetails = (match) => {
  matchDetailsEl.innerHTML = `
    <h3>${match.team1.name} vs ${match.team2.name}</h3>
    <p>Status: ${match.status}</p>
    <p>Venue: ${match.venue.name}</p>
    <p>Match Date: ${new Date(match.startDate).toLocaleString()}</p>
  `;
  matchesSection.style.display = 'none';
  seriesSection.style.display = 'none';
  matchDetailsSection.style.display = 'block';
};

// Fetch series matches
const fetchSeriesMatches = async (seriesId) => {
  // Implement fetching and displaying matches for a series
  alert("Series match fetching functionality not implemented yet!");
};

// Event Listeners
document.getElementById('matchesBtn').addEventListener('click', () => {
  matchesSection.style.display = 'block';
  seriesSection.style.display = 'none';
  matchDetailsSection.style.display = 'none';
  fetchMatches();
});

document.getElementById('seriesBtn').addEventListener('click', () => {
  seriesSection.style.display = 'block';
  matchesSection.style.display = 'none';
  matchDetailsSection.style.display = 'none';
  fetchSeries();
});

// Initial load
fetchMatches();

