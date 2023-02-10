import { fetchScores } from './api.js';

export const displayScore = (game) => {
  const scoreboard = document.querySelector('.scoreboard');
  const score1 = document.createElement('p');
  score1.textContent = `${game.user}: ${game.score}`;
  scoreboard.appendChild(score1);
};

export const refreshScore = async () => {
  const games = await fetchScores();
  const scoreboard = document.querySelector('.scoreboard');
  scoreboard.innerHTML = '';
  games.forEach((game) => {
    displayScore(game);
  });
};
