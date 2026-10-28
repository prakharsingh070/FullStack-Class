const grid = document.getElementById("grid");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const startBtn = document.getElementById("start-btn");

let score = 0;
let timeLeft = 30;
let moleTimer = null;
let countdownTimer = null;
let currentCell = null;

// 1. Build the 3x3 grid dynamically using a for loop
for (let i = 0; i < 9; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.dataset.index = i;
  grid.appendChild(cell);
}

const cells = document.querySelectorAll(".cell");

// 2. Function to move the mole randomly every 800 ms
function popMole() {
  // Clear previous active cell using classList.toggle
  if (currentCell) {
    currentCell.classList.toggle("active", false);
    currentCell.textContent = "";
  }

  // Pick a random cell
  const randomIndex = Math.floor(Math.random() * cells.length);
  currentCell = cells[randomIndex];

  // Show mole using classList.toggle
  currentCell.classList.toggle("active", true);
  currentCell.textContent = "🏏";
}

// 3. Event delegation on the grid container
grid.addEventListener("click", function (event) {
  // Check if clicked element is a cell and currently has the mole
  if (event.target.classList.contains("active")) {
    score++;
    scoreDisplay.textContent = score;

    // Remove mole once hit
    event.target.classList.toggle("active", false);
    event.target.textContent = "";
    currentCell = null;
  }
});

// 4. Start game function using setInterval and clearInterval
function startGame() {
  // Reset values
  score = 0;
  timeLeft = 30;
  scoreDisplay.textContent = score;
  timeDisplay.textContent = timeLeft;
  startBtn.disabled = true;

  // Clear any existing timers just in case
  clearInterval(moleTimer);
  clearInterval(countdownTimer);

  // Mole pops up every 800 ms
  moleTimer = setInterval(popMole, 800);

  // 30-second countdown timer
  countdownTimer = setInterval(function () {
    timeLeft--;
    timeDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(moleTimer);
      clearInterval(countdownTimer);

      if (currentCell) {
        currentCell.classList.toggle("active", false);
        currentCell.textContent = "";
      }

      startBtn.disabled = false;
      alert("Game over! Your final score is: " + score);
    }
  }, 1000);
}

startBtn.addEventListener("click", startGame);