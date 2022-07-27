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
          return "The computer blew up!";
}

function singleRound(playerSelection, computerSelection) {

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

let result = singleRound(choice);

//console.log("result = " + result);
alert("choice = " + choice + "\nresult = " + result);

