var PSCORE = 0;
var OSCORE = 0;
var ROUND = 0;
var OPPONENT = "Computer";

// works
function getComputerChoice() {
        let computerChoice = (Math.ceil(Math.random() * 3));

        console.log("computerChoice = " + computerChoice);

        if (computerChoice == 1)
                return "rock";
        else if (computerChoice == 2)
                return "paper";
        else if (computerChoice == 3)
                return "scissors";
        else
          return "DOES NOT COMPUTE";
}

function playRound(playerSelection, computerSelection) {

	ROUND++;

	console.log("ROUND = " + ROUND);

        if (playerSelection == 'rock') {
		console.log("selected rock");   

		if (computerSelection == "rock") {
                        document.getElementById("gameLog").append("Both players chose rock, it's a draw. \n");
			console.log("Both players chose rock, it's a draw.");
                } else if (computerSelection == "paper") {
                        OSCORE++;
                        console.log("You lose this round, the computer chose paper.");
                } else if (computerSelection == "scissors") {
			PSCORE++;
                        console.log("You win, the computer chose scissors!");
                }
        } else if (playerSelection == "paper") {
                if (computerSelection == "paper") {
                        ROUND++;
                        console.log("Both players chose paper, it's a draw!");
                } else if (computerSelection == "scissors") {
                        ROUND++;
                        OSCORE++;
                        console.log("You lose, the computer chose scissors!");
                } else if (computerSelection == "rock") {
                        ROUND++;
                        PSCORE++;
                        console.log("You win, the computer chose rock!");
                }
        } else if (playerSelection == "scissors") {
                if (computerSelection == "scissors") {
                        ROUND++;
                        console.log("Both players chose scissors, it's a draw!");
                } else if (computerSelection == "rock") {
                        ROUND++;
                        OSCORE++;
                        console.log("You lose, the computer chose rock!");
                } else if (computerSelection == "scissors") {
                        ROUND++;
                        PSCORE++;
                        console.log("You win, the computer chose paper!");
                }
        } else {
                alert("Invalid entry, please choose rock, paper, or scissors.");
        }
      
        document.getElementById("playerScore").innerHTML = `Player Score: ${PSCORE}`;
        document.getElementById("opponentScore").innerHTML = `${OPPONENT} Score: ${OSCORE}`;
  
        if(ROUND == 5){
          if(PSCORE > OSCORE){
              alert("P1 wins");}//Player One Wins ${PSCORE} to ${OSCORE} sent to game log
          else if(OSCORE > PSCORE){
              alert("P2/PC wins");}
                               //Player Two / Computer Wins rewrite 
                                //this to differentiate between computer 
                                //and player 2 winning
          
          PSCORE = 0;
          OSCORE = 0;
          ROUND = 0;
	}
}  


// working
  
  function opponentButtonToggle() {
  
  PSCORE = 0;
  OSCORE = 0;

  if(OPPONENT == "Computer") {

    OPPONENT = "Human";
    document.getElementById("opponentButton").value = `${OPPONENT}`;
    document.getElementById("opponentScore").innerHTML = `Player 2 Score: ${OSCORE}`;
  
  } else if (OPPONENT == "Human"){
    
    OPPONENT = "Computer";
    document.getElementById("opponentButton").value = "Computer";
	  document.getElementById("opponentScore").innerHTML = `${OPPONENT} Score: ${OSCORE}`;
  }
}
