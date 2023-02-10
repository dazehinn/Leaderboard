const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const gameUrl = `${api}games/Zl4d7IVkemOTTVg2fUdz/scores/`;

export const fetchScores = async () => {
  const request = await fetch(gameUrl);
  const response = await request.json();
  return response.result;
};

export const submitScore = async (name, score) => {
  const gameset = {
    user: name,
    score,
  };
  const request = await fetch(gameUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(gameset),
  });
  const response = await request.json();
  return response.result;
};