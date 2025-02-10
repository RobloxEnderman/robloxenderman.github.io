let sessionWins = 0;
let sessionLosses = 0;
let allTimeWins = 0;
let allTimeLosses = 0;

const showStatsButton = document.getElementById('stats-btn');
const statsElement = document.getElementById('game-over-menu');

showStatsButton.addEventListener('click', () => {
    statsElement.classList.toggle('hidden');
    alert(`Wins: ${sessionWins}, Losses: ${sessionLosses}`);
});
