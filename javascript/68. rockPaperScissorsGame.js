const choices = ["rock", "paper", "scissors"]; //the array index will be used for random choice of a computer
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const computerChoice = choices[Math.trunc(Math.random()*3)]; //computer randomly chooses the array value (indexes 0-2)
    console.log(computerChoice);
    let result="";

    if(playerChoice == computerChoice) {
        result = "IT'S A TIE!";
    }
    else {
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors" ? "YOU WIN!" : "YOU LOSE!");
                break;
            case "paper":
                result = (computerChoice === "rock" ? "YOU WIN!" : "YOU LOSE!");
                break;
            case "scissors":
                result = (computerChoice === "paper" ? "YOU WIN!" : "YOU LOSE!");
                break;
        }
    }
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;
    resultDisplay.classList.remove("greenText", "redText", "pinkText"); //removes any of the specified classes before the new game
    switch(result) {
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
        case "IT'S A TIE!":
            resultDisplay.classList.add("pinkText");
            break;
    }
}