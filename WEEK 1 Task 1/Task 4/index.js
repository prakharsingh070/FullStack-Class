const box = document.getElementById("box");
const startBtn = document.getElementById("start-btn");
const resultDisplay = document.getElementById("result");
const bestTimeDisplay = document.getElementById("best-time");

let timerId = null; // Stored to prevent multiple timers running at once
let startTime = 0;
let isReady = false; // True when screen turns green

// Load best time from localStorage on page load
let savedBestTime = localStorage.getItem("bestReactionTime");
if (savedBestTime) {
  bestTimeDisplay.textContent = savedBestTime + " ms";
}

// 1. Function to start the reaction test
function startTest() {
  // Fix the bug of two timers running: clear existing timer before starting
  if (timerId !== null) {
    clearTimeout(timerId);
    timerId = null;
  }

  // Reset state
  isReady = false;
  box.style.backgroundColor = "lightcoral";
  box.textContent = "Wait for green...";
  resultDisplay.textContent = "-";

  // Random delay between 2000 ms (2s) and 5000 ms (5s)
  const randomDelay = Math.floor(Math.random() * 3000) + 2000;

  // Schedule green screen
  timerId = setTimeout(function () {
    box.style.backgroundColor = "lightgreen";
    box.textContent = "CLICK NOW!";
    isReady = true;
    startTime = Date.now(); // Record exact timestamp when it turns green
    timerId = null;
  }, randomDelay);
}

// 2. Click handler on the box
box.addEventListener("click", function () {
  // Case A: Clicked while still red (Too early!)
  if (!isReady && timerId !== null) {
    clearTimeout(timerId); // Cancel the pending green timer
    timerId = null;
    box.style.backgroundColor = "lightcoral";
    box.textContent = "Too early! Click Start Test to try again.";
    resultDisplay.textContent = "Too early!";
    return;
  }

  // Case B: Clicked when green
  if (isReady) {
    const reactionTime = Date.now() - startTime; // Calculate time in ms
    isReady = false;
    box.style.backgroundColor = "lightcoral";
    box.textContent = "Good job! Click Start Test to try again.";
    resultDisplay.textContent = reactionTime + " ms";

    // Update and store best time in localStorage
    const currentBest = localStorage.getItem("bestReactionTime");
    if (!currentBest || reactionTime < Number(currentBest)) {
      localStorage.setItem("bestReactionTime", reactionTime);
      bestTimeDisplay.textContent = reactionTime + " ms";
    }
  }
});

startBtn.addEventListener("click", startTest);