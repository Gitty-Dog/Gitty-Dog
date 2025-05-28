const gameArea = document.getElementById('game-area');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');

let score = 0;
let timeLeft = 30;
let gameInterval;

function spawnCircle() {
  // Remove old circle
  const oldCircle = document.querySelector('.circle');
  if (oldCircle) oldCircle.remove();

  const circle = document.createElement('div');
  circle.classList.add('circle');

  // Random position
  const x = Math.random() * (gameArea.clientWidth - 50);
  const y = Math.random() * (gameArea.clientHeight - 50);
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;

  // Click handler
  circle.onclick = () => {
    score++;
    scoreDisplay.textContent = score;
    circle.remove();
  };

  gameArea.appendChild(circle);
}

function startGame() {
  score = 0;
  timeLeft = 30;
  scoreDisplay.textContent = score;
  timeDisplay.textContent = timeLeft;

  spawnCircle();
  gameInterval = setInterval(() => {
    timeLeft--;
    timeDisplay.textContent = timeLeft;

    spawnCircle();

    if (timeLeft <= 0) {
      clearInterval(gameInterval);
      alert(`Game Over! Your score: ${score}`);
      document.querySelector('.circle')?.remove();
    }
  }, 1000);
}

startGame(); // Auto-start the game
