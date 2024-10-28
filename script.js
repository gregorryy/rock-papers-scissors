function playGame() {
  const humanScore = 0;
  const computerScore = 0;

  function getHumanChoice() {
    let choice = window.prompt(
      "What's your choice ? (rock, paper or scissors)"
    );
    console.log("Your choice is :", choice);
    return choice;
  }

  function getComputerChoice() {
    const word = ["rock", "paper", "scissors"];
    const randomWord = Math.floor(Math.random() * word.length);
    console.log("The computer choice is :", word[randomWord]);
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
    let hscore = 0;
    let cscore = 0;
    humanChoice = humanChoice.toLowerCase();
    computerChoiceChoice = computerChoice.toLowerCase();
    if (humanChoice === "rock" && computerChoice === "rock") {
      console.log(rock_rock);
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log(rock_scissors);
      hscore = humanScore + 1;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      console.log(rock_paper);
      cscore = computerScore + 1;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log(paper_rock);
      hscore = humanScore + 1;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      console.log(paper_scissors);
      cscore = computerScore + 1;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      console.log(scissors_rock);
      cscore = computerScore + 1;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log(scissors_paper);
      hscore = humanScore + 1;
    } else if (humanChoice === "paper" && computerChoice === "paper") {
      console.log(paper_paper);
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
      console.log(scissors_scissors);
    } else {
      console.log(
        `There is an error, you submit ${humanChoise} (the computer submit ${computerChoice} by the way).`
      );
    }
    function scoreHuman() {
      let humScore = 0;
      humScore = humScore + hscore;
      return humScore;
    }

    function scoreComputer() {
      let comScore = 0;
      comScore = comScore + cscore;
      return comScore;
    }

    const PersonalScore = scoreHuman();
    const ComputerScor = scoreComputer();

    return {
      PersonalScore,
      ComputerScor,
    };
  }

  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  const scores = playRound(humanSelection, computerSelection);
  return scores;
}
let score = playGame();
let scoreh = score.PersonalScore;
let scorec = score.ComputerScor;
console.log(
  `The score is actually : ${scoreh} for you and ${scorec} for computer !`
);

score = playGame();
scoreh = scoreh + score.PersonalScore;
scorec = scorec + score.ComputerScor;
console.log(
  `The score is actually : ${scoreh} for you and ${scorec} for computer !`
);

score = playGame();
scoreh = scoreh + score.PersonalScore;
scorec = scorec + score.ComputerScor;
console.log(
  `The score is actually : ${scoreh} for you and ${scorec} for computer !`
);

score = playGame();
scoreh = scoreh + score.PersonalScore;
scorec = scorec + score.ComputerScor;
console.log(
  `The score is actually : ${scoreh} for you and ${scorec} for computer !`
);

score = playGame();
scoreh = scoreh + score.PersonalScore;
scorec = scorec + score.ComputerScor;
console.log(
  `The score is actually : ${scoreh} for you and ${scorec} for computer !`
);

if (scoreh > scorec) {
  console.log("You win ! GG man !");
} else {
  console.log("Computer wins ! Nice try !");
}
