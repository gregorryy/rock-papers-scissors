let currentRound = 0;
const totalRounds = 5;
let humanScore = 0;
let computerScore = 0;

function endGame() {
  document.getElementById(
    "gameStatus"
  ).textContent = `The game is over ! Your score is ${humanScore}, and the computer’s score is ${computerScore}!`;
  disableButtons();
}

function updateRoundDisplay() {
  document.getElementById("roundDisplay").textContent = `Round ${currentRound}`;
}

function getComputerChoice() {
  const word = ["rock", "paper", "scissors"];
  const randomWord = Math.floor(Math.random() * word.length);
  return word[randomWord];
}

rock_paper = "You lose ! Paper beats Rock.";
rock_scissors = "You win ! Rock beats Paper.";
paper_scissors = "You lose ! Scissors beats Paper.";
paper_rock = "You win ! Papers beat Rock.";
scissors_rock = "You lose ! Rock beats Scissors.";
scissors_paper = "You win ! Scissors beats Paper.";
rock_rock = "Nobody win, equality !";
paper_paper = "Nobody win, equality !";
scissors_scissors = "Nobody win, equality !";

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "rock") {
    return rock_rock;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    return rock_scissors;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    return rock_paper;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    return paper_rock;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    return paper_scissors;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    return scissors_rock;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    return scissors_paper;
  } else if (humanChoice === "paper" && computerChoice === "paper") {
    return paper_paper;
  } else if (humanChoice === "scissors" && computerChoice === "scissors") {
    return scissors_scissors;
  }
}

function startRound(humanChoice) {
  if (currentRound < totalRounds) {
    currentRound++;
    updateRoundDisplay();
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);

    const container = document.getElementById("container");
    container.innerHTML = `
            <div>-> Your choice is ${humanChoice}</div>
            <div>Computer choice is ${computerChoice}</div>  
            <div>${result}</div>
            <div>The score is actually : ${humanScore} for you and ${computerScore} for computer !</div>
        `;

    if (currentRound === totalRounds) {
      endGame();
    } else {
      enableButtons();
    }
  }
}

function disableButtons() {
  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;
}

function enableButtons() {
  document.getElementById("rock").disabled = false;
  document.getElementById("paper").disabled = false;
  document.getElementById("scissors").disabled = false;
}

document.getElementById("rock").addEventListener("click", () => {
  disableButtons();
  startRound("rock");
});

document.getElementById("paper").addEventListener("click", () => {
  disableButtons();
  startRound("paper");
});

document.getElementById("scissors").addEventListener("click", () => {
  disableButtons();
  startRound("scissors");
});

updateRoundDisplay();
