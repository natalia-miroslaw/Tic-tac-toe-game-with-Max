function startNewGame() {
  if (!players[0].name || !players[1].name) {
    alert('Please set custom player names for both players!');
  } else {
    gameAreaElement.style.display = 'block';
  }
}