function randomNumber () {
  return Math.random() * 200;
}

window.onload = () => {
  // captura dos elementos necessários
  
  const startBtn = document.getElementById('start-race-btn')
  const resetBtn = document.getElementById('reset-race-btn')
  const player1 = document.getElementById('player1')
  const player2 = document.getElementById('player2')
  const winnerSong = document.getElementById('audioWinner')

  
  player1.style.marginLeft = 0;
  player2.style.marginLeft = 0;
  
  startBtn.addEventListener('click', () => {
    player1.style.marginLeft = (parseInt(player1.style.marginLeft)  + randomNumber()) + 'px';
    player2.style.marginLeft = (parseInt(player2.style.marginLeft)  + randomNumber()) + 'px';
  })

  const containerPlayers = document.getElementsByClassName('car-section')[0]
  containerPlayers.addEventListener('click', (event) => {
    const selected = document.querySelector('.selected');
    if (selected) {
      selected.classList.remove('selected');
    }
    event.target.classList.add('selected')
  });

  const players = document.querySelectorAll('.playersImages');
  for (let player of players) {
    player.addEventListener('click', (event) => {
      const selected = document.querySelector('.selected');
      if (selected) {
        selected.style.backgroundImage = `url(${event.target.src})`
        selected.classList.remove('selected');
      }
    })
  }
};