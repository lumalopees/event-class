function randomNumber () {
  return Math.random() * 200;
}

const resetGame = () => {
  const player1 = document.getElementById('player1')
  const player2 = document.getElementById('player2')

  player1.style.marginLeft = 0;
  player2.style.marginLeft = 0;

  player1.style.backgroundImage = `url(./files/selectPlayer.png)`
  player2.style.backgroundImage = `url(./files/selectPlayer.png)`
}

const scorePlayer1 = () => {
  const upScore = document.getElementById('p1Score')
  upScore.innerText = upScore.innerText + 1;
}

const scorePlayer2 = () => {
  
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

    const player1Win = parseInt(player1.style.marginLeft) > window.innerWidth;
    const player2Win = parseInt(player2.style.marginLeft) > window.innerWidth;

    if (player1Win) {
      winnerSong.play();
      winnerSong.volume = 0.2;
      alert('PLAYER 1 VENCEU')
      resetGame();
      scorePlayer1();
    } else if (player2Win) {
      winnerSong.play();
      winnerSong.volume = 0.2;
      alert('PLAYER 2 VENCEU')
      resetGame();
      scorePlayer2();
    }
  })

  resetBtn.addEventListener('click', resetGame);

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