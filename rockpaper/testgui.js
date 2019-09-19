const drawArray = ["rock", "paper", "scissor"];
let userScore = 0;
let computerScore = 0;
let drawScore = 0;
let roundNumber = 0;
let playerSelection;

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
  button.addEventListener("click", function() {
    //console.log(button.id); //selection made here e.g. rock

    let computerSelection = computerPlay(); // gets computer selection
    const result1 = document.querySelector(".results");

    //create a para for user selection
    // const pSelect = document.createElement("p");
    // pSelect.textContent = "You pick : " + button.id;

    //create a para for computer selection
    // const cSelect = document.createElement("p");
    // cSelect.textContent = "Computer pick : " + computerSelection;

    // call function playRound to determine round winner
    let winner = playRound(button.id, computerSelection);

    // call function to determine roundWinner
    checkRoundWinner(winner);

    // display roundwinner
    const roundResult = document.querySelector(".current");
    roundResult.textContent = "Winner of this round is : " + winner;

    // display running score by appending to div=results
    const totalScore = document.querySelector(".running");
    totalScore.textContent =
      "Running Score - User : " +
      userScore +
      " vs " +
      "Computer : " +
      computerScore;
    result1.appendChild(totalScore);

    if (userScore === 5 || computerScore === 5) {
      showWinner();
    }
  });
});

// NOTE: FAILED TO DELETE CLICK EVENT AFTER ALL IS DONE
function showWinner() {
  let overallWinner = checkOverallWinner();
  const overall = document.querySelector(".overall");
  document.querySelector(".current").textContent = "";
  overall.textContent = "Overall winner is : " + overallWinner;
}

function playRound (playerSelection, computerSelection) {

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

function computerPlay() {
  let compDraw = drawArray[Math.floor(Math.random() * drawArray.length)];
  // console.log(compDraw);
  return compDraw;
}

function checkRoundWinner(roundWinner) {
  console.log(" Winner : " + roundWinner);

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
    // console.log("Overall Winner : User");
    return "You";
  } else 
    // console.log("Overall Winner : Computer");
    return "Computer";
}
