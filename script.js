let currentRound = 0;
const totalRounds = 5;
let humanScore = 0;
let computerScore = 0;

function endGame() {
  //document.getElementById("gameStatus").textContent = `Game over, your score is ${humanScore}, and the computer’s score is ${computerScore} !`;
  disableButtons();

  const gameStatus = document.getElementById("gameStatus");

  const viewScoreButton = document.createElement("button");
  viewScoreButton.textContent = "Show result";
  viewScoreButton.onclick = showAlert;
  viewScoreButton.classList = "resultBtn";
  gameStatus.appendChild(viewScoreButton);
}

function updateRoundDisplay() {
  document.getElementById("roundDisplay").textContent = `Round ${currentRound}`;
}

function getComputerChoice() {
  const word = ["rock", "paper", "scissors"];
  const randomWord = Math.floor(Math.random() * word.length);
  return word[randomWord];
}

rock_paper = "You <strong>lose</strong> ! Paper beats Rock.";
rock_scissors = "You <strong>win</strong> ! Rock beats Paper.";
paper_scissors = "You <strong>lose</strong> ! Scissors beats Paper.";
paper_rock = "You <strong>win</strong> ! Papers beat Rock.";
scissors_rock = "You <strong>lose</strong> ! Rock beats Scissors.";
scissors_paper = "You <strong>win</strong> ! Scissors beats Paper.";
rock_rock = "<strong>Nobody win</strong>, equality !";
paper_paper = "<strong>Nobody win</strong>, equality !";
scissors_scissors = "<strong>Nobody win</strong>, equality !";

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
            <div class="humanChoice">Your choice is <strong>${humanChoice}</strong></div>
            <div class="computerChoice">Computer choice is <strong>${computerChoice}</strong></div>  
            <div class="result">${result}</div>`;

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

// Fonction pour afficher l'alerte avec le message de score
function showAlert() {
  alert(
    `Your score is ${humanScore}, and the computer’s score is ${computerScore}.`
  );
}

updateRoundDisplay();
