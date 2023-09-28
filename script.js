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
  const upScore1 = document.getElementById('p1Score')
  upScore1.innerText = +upScore1.innerText + 1;
}

const scorePlayer2 = () => {
  const upScore2 = document.getElementById('p2Score')
  upScore2.innerText = +upScore2.innerText + 1;
}

const keepStorage = () => {
  const upScore1 = document.getElementById('p1Score')
  const upScore2 = document.getElementById('p2Score')

const arrayScores = [];
arrayScores.push(upScore1.innerText);
arrayScores.push(upScore2.innerText);

  localStorage.setItem('scores', JSON.stringify(arrayScores));
}

const showStorage = () => {
  const upScore1 = document.getElementById('p1Score')
  const upScore2 = document.getElementById('p2Score')

  if (localStorage.getItem('scorep1')) {
    upScore1.innerText = localStorage.getItem('scorep1');
  } 

  if (localStorage.getItem('scorep2')) {
    upScore2.innerText = localStorage.getItem('scorep2')
  }
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

  // showStorage();
  
  startBtn.addEventListener('click', () => {
    player1.style.marginLeft = (parseInt(player1.style.marginLeft)  + randomNumber()) + 'px';
    player2.style.marginLeft = (parseInt(player2.style.marginLeft)  + randomNumber()) + 'px';

    const player1Win = parseInt(player1.style.marginLeft) > window.innerWidth;
    const player2Win = parseInt(player2.style.marginLeft) > window.innerWidth;

    if (player1Win) {
      alert('PLAYER 1 VENCEU')
      winnerSong.play();
      winnerSong.volume = 0.2;

      scorePlayer1();
      keepStorage();
      resetGame();
    } else if (player2Win) {
      alert('PLAYER 2 VENCEU')
      winnerSong.play();
      winnerSong.volume = 0.2;

      scorePlayer2();
      keepStorage();
      resetGame();
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
  }}