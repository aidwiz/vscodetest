let drawArray = ["rock", "paper", "scissor"];
let userScore = 0;
let computerScore = 0;
let drawScore = 0;

function game() {
  //loop for five rounds
  for (i = 0; i < 5; i++) {
    // let playerSelection = 'rock';
    let playerSelection = window.prompt("choose one: rock, paper or scissor ?");
    let computerSelection = computerPlay();

    playRound(playerSelection, computerSelection);

    console.log(
      "user plays : " +
        playerSelection +
        " VS computer plays : " +
        computerSelection
    );
    let winner = playRound(playerSelection, computerSelection);
    let roundNumber = i + 1;
    checkRoundWinner(winner, roundNumber);
  }

  console.log("userScore : " + userScore);
  console.log("computerScore : " + computerScore);
  console.log("drawScore : " + drawScore);

  checkOverallWinner();
}

function computerPlay() {
  let compDraw = drawArray[Math.floor(Math.random() * drawArray.length)];
  // console.log(compDraw);
  return compDraw;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    // let result = console.log("draw. deal again");
    return "draw";
  } else {
    if (playerSelection === "rock" && computerSelection === "paper") {
      return "computer";
    } else if (playerSelection === "rock" && computerSelection === "scissor") {
      return "user";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      return "user";
    } else if (playerSelection === "paper" && computerSelection === "scissor") {
      return "computer";
    } else if (playerSelection === "scissor" && computerSelection === "rock") {
      return "computer";
    } else {
      return "user";
    }
  }
}

function checkRoundWinner(roundWinner, roundNumber) {
  console.log("Round " + roundNumber + " Winner : " + roundWinner);
  if (roundWinner === "user") {
    userScore++;
  } else if (roundWinner === "computer") {
    computerScore++;
  } else {
    drawScore++;
  }
}

function checkOverallWinner() {
  if (userScore > computerScore) {
    console.log("Overall Winner : User");
  } else if (computerScore > userScore) {
    console.log("Overall Winner : Computer");
  } else {
    console.log("It's a draw");
  }
}
