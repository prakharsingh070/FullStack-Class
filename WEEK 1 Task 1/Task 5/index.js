const board = document.getElementById("board");
const restartBtn = document.getElementById("restart-btn");
const matchesDisplay = document.getElementById("matches");

// 8 pairs of symbols (16 cards total)
const symbols = ["🍎", "🍌", "🍇", "🍓", "🍒", "🍍", "🥝", "🍉"];

// Fisher-Yates array shuffle function
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

// Main game function demonstrating closure for tracking state
function createGame() {
  // Nested state with let
  let firstCard = null;
  let lockBoard = false;
  let matchedPairs = 0;

  // Duplicate symbols to create 8 pairs and shuffle them
  let cardValues = shuffle([...symbols, ...symbols]);

  // Clear previous board
  board.innerHTML = "";
  matchesDisplay.textContent = matchedPairs;

  // Build the 4x4 grid
  cardValues.forEach(function (symbol) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.symbol = symbol;
    card.textContent = "?";

    // Click handler utilizing closure to access firstCard and lockBoard
    card.addEventListener("click", function () {
      // 1. Ignore click if board is locked or clicking already flipped card
      if (lockBoard || card.classList.contains("flipped")) {
        return;
      }

      // Flip the clicked card
      card.classList.add("flipped");
      card.textContent = card.dataset.symbol;

      // 2. If this is the first card clicked
      if (!firstCard) {
        firstCard = card;
        return;
      }

      // 3. If this is the second card clicked, compare them
      let secondCard = card;

      if (firstCard.dataset.symbol === secondCard.dataset.symbol) {
        // MATCH: Keep cards open
        matchedPairs++;
        matchesDisplay.textContent = matchedPairs;
        firstCard = null;

        if (matchedPairs === 8) {
          setTimeout(function () {
            alert("Congratulations! You found all matches!");
          }, 200);
        }
      } else {
        // MISMATCH: Lock clicks and flip back after 1 second
        lockBoard = true;

        setTimeout(function () {
          firstCard.classList.remove("flipped");
          firstCard.textContent = "?";

          secondCard.classList.remove("flipped");
          secondCard.textContent = "?";

          // Reset closure variables
          firstCard = null;
          lockBoard = false;
        }, 1000);
      }
    });

    board.appendChild(card);
  });
}

// Start game on load and hook restart button
createGame();
restartBtn.addEventListener("click", createGame);