import './style.css';
import { submitScore } from '../modules/api.js';
import { refreshScore } from '../modules/UI.js';

const refreshBtn = document.querySelector('#refresh-btn');
const submitBtn = document.querySelector('#submit-btn');
const username = document.querySelector('#username');
const userscore = document.querySelector('#userscore');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  submitScore(username.value, userscore.value);
  username.value = '';
  userscore.value = '';
});

refreshBtn.addEventListener('click', (e) => {
  e.preventDefault();
  refreshScore();
});
