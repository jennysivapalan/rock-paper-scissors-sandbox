const getRandomMove = () => {
  const moves = ["rock", "paper", "scissors", "lizard", "spock"];
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
};

const getOutcome = (moveOne, moveTwo) => {
  if (moveOne === moveTwo) {
    return "It's a draw!";
  }

  if (
    (moveOne === "scissors" && moveTwo === "paper") ||
    (moveOne === "scissors" && moveTwo === "lizard") ||
    (moveOne === "rock" && moveTwo === "scissors") ||
    (moveOne === "rock" && moveTwo === "lizard") ||
    (moveOne === "paper" && moveTwo === "rock") ||
    (moveOne === "paper" && moveTwo === "spock") ||
    (moveOne === "lizard" && moveTwo === "paper") ||
    (moveOne === "lizard" && moveTwo === "spock") ||
    (moveOne === "spock" && moveTwo === "rock") ||
    (moveOne === "spock" && moveTwo === "scissors")
  ) {
    return "Player One wins!";
  }

  return "Player Two wins!";
};

// Removing elements (nodes) from the DOM
const resetGame = () => {
  if (document.getElementById("outcome")) {
    const outcome = document.body.lastChild;
    document.body.removeChild(outcome);
  }
};

const playGame = () => {
  resetGame();
  const playerOneMove = getRandomMove();
  const playerTwoMove = getRandomMove();
  const outcome = getOutcome(playerOneMove, playerTwoMove);
  updateDOM(playerOneMove, playerTwoMove, outcome);
};

const updateDOM = (moveOne, moveTwo, outcome) => {
  const playerOneImgElem = document.getElementById("player-one-move__img");
  playerOneImgElem.src = `/images/${moveOne}.png`;

  const playerTwoImgElem = document.getElementById("player-two-move__img");
  playerTwoImgElem.src = `/images/${moveTwo}.png`;

  const winner = document.getElementById("winner");
  winner.innerText = outcome;
};

const playButton = document.getElementById("play-btn");
playButton.addEventListener("click", playGame);
