function getComputerChoice () {
    const computerChoice = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random()*3);
    // console.log(computerChoice[random]);
    let randomComputerChoice = computerChoice[random];
    return randomComputerChoice;
}
let answer = "";
let playerGameWon = 0;
let computerGameWon = 0;
let draw = 0;
let response = {};

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection[0].toUpperCase() + playerSelection.slice(1,);
    console.log(playerChoice)
    console.log(computerSelection)
    if (playerChoice == computerSelection) {
        // console.log("Match Draw")
        answer = "Match Draw";
        draw++;
    } else if (playerChoice == "Rock" && computerSelection == "Scissors" || playerChoice == "Scissors" && computerSelection == "Paper" || playerChoice == "Paper" && computerSelection == "Rock") {
        // console.log(`You Win! ${playerChoice} beats ${computerSelection}`);
        answer = `You Win! ${playerChoice} beats ${computerSelection}`;
        playerGameWon++;
    } else if (playerChoice == "Rock" && computerSelection == "Paper" || playerChoice == "Scissors" && computerSelection == "Rock" || playerChoice == "Paper" && computerSelection == "Scissors") {
        // console.log(`You Lose! ${computerSelection} beats ${playerChoice}`);
        answer = `You Lose! ${computerSelection} beats ${playerChoice}`;
        computerGameWon++;
    }
    return response = {answer: answer, computerGameWon: computerGameWon, playerGameWon: playerGameWon, draw: draw};
}

let playerSelection = prompt("Enter Rock, Paper or Scissors").toLowerCase();
let computerSelection = getComputerChoice();

// console.log(playRound(playerSelection,computerSelection));

function game (playerSelection, computerSelection) {
    let message = "";
    playRound(playerSelection, computerSelection)
    console.log(response.answer);
    let player2 = prompt("Enter Rock, Paper or Scissors").toLowerCase();
    let computer2 = getComputerChoice();
    playRound(player2, computer2);
    console.log(response.answer);
    let player3 = prompt("Enter Rock, Paper or Scissors").toLowerCase();
    let computer3 = getComputerChoice();
    playRound(player3, computer3);
    console.log(response.answer);
    let player4 = prompt("Enter Rock, Paper or Scissors").toLowerCase();
    let computer4 = getComputerChoice();
    playRound(player4, computer4);
    console.log(response.answer);
    let player5 = prompt("Enter Rock, Paper or Scissors").toLowerCase();
    let computer5 = getComputerChoice();
    playRound(player5, computer5);
    console.log(response.answer);
    if (response.computerGameWon == response.playerGameWon) {
        message = "Match Draw!";
    } else if (response.computerGameWon > response.playerGameWon) {
        message = "You Lose!";
    } else if (response.computerGameWon < response.playerGameWon) {
        message = "You Win!";
    }
    return message;
}
console.log(game(playerSelection, computerSelection));