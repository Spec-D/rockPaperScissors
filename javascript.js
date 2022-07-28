function game() {

        let score = 0;
        let compScore = 0;

        for(let i=0; i<4; i++) {
                playRound();
                if (playerSelection == "rock" && computerSelection == "rock") {
                        i--;
                } else if (playerSelection == "rock" && computerSelection == "paper") {
                        compScore++;
                } else if (playerSelection == "rock" && computerSelection == "scissors") {
                        score++;
                } else if (playerSelection == "paper" && computerSelection == "rock") {
                        i--;
                } else if (playerSelection == "paper" && computerSelection == "paper") {
                        compScore++;
                } else if (playerSelection == "paper" && computerSelection == "scissors") {
                        score++;
                } else if (playerSelection == "scissors" && computerSelection == "rock") {
                        i--;
                } else if (playerSelection == "scissors" && computerSelection == "paper") {
                        compScore++;
                } else if (playerSelection == "scissors" && computerSelection == "scissors") {
                        score++;
                } else
                        return "DOES NOT COMPUTE";
        }
        if (score > compScore) {
                return "Score: " + score +
                       "\ncompScore: " + compSCore +
                       "\n\nYOU WIN!";
        } else {
                return "Score: " + score +
                       "\ncompScore: " + compSCore +
                       "\n\nYou lose."
        }
}


function getComputerChoice() {
        let computerChoice = (Math.round(Math.random() * 3));

        console.log("computerChoice = " + computerChoice);

        if (computerChoice == 0)
                return "rock";
        else if (computerChoice == 1)
                return "paper";
        else if (computerChoice == 2)
                return "scissors";
        else
          return "DOES NOT COMPUTE";
}

function playRound(playerSelection, computerSelection) {

        computerSelection = getComputerChoice();
        playerSelection = playerSelection.toLowerCase();

        if (playerSelection == "rock") {
                if (computerSelection == "rock") {
                        return "Both players chose rock, it's a draw!";
                } else if (computerSelection == "paper") {
                        return "You lose, the computer chose paper!";
                } else if (computerSelection == "scissors") {
                        return "You win, the computer chose scissors!";
                }
        } else if (playerSelection == "paper") {
                if (computerSelection == "paper") {
                        return "Both players chose paper, it's a draw!";
                } else if (computerSelection == "scissors") {
                        return "You lose, the computer chose scissors!";
                } else if (computerSelection == "rock") {
                        return "You win, the computer chose rock!";
                }
        } else if (playerSelection == "scissors") {
                if (computerSelection == "scissors") {
                        return "Both players chose scissors, it's a draw!";
                } else if (computerSelection == "rock") {
                        return "You lose, the computer chose rock!";
                } else if (computerSelection == "scissors") {
                        return "You win, the computer chose paper!";
                }
        } else {
                return "Invalid entry, please choose rock, paper, or scissors.";
        }
}

choice = prompt(choice);

let result = playRound(choice);

//console.log("result = " + result);
alert(game());

