window.onload = () => {
  // captura dos elementos necessários
  const startBtn = document.getElementById('start-race-button')
  const resetBtn = document.getElementById('reset-race-button')
  const player1 = document.getElementById('player1')
  const player2 = document.getElementById('player2')
  const winnerSong = document.getElementById('audioWinner')

  const containerPlayers = document.getElementsByClassName('car-section')[0]

  containerPlayers.addEventListener('click', (event) => {
    const selected = document.querySelector('.selected');
    if (selected) {
      selected.classList.remove('selected');
    }
    event.target.classList.add('selected')
  });

  const players = document.querySelectorAll('.playerImages');
  for (let player of players) {
    
  }
};