var PSCORE = 0;
var OSCORE = 0;
var ROUND = 1;

// works
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

/* buggy
function playRound(playerSelection, computerSelection) {

   alert("playRound() call");
        computerSelection = getComputerChoice();
        playerSelection = playerSelection.toLowerCase();

        if (playerSelection == 'rock') {
   
                if (computerSelection == "rock") {
                        ROUND++;
                        console.log("Both players chose rock, it's a draw!");
                
                } else if (computerSelection == "paper") {
                        ROUND++;
                        OSCORE++;
                        console.log("You lose this round, the computer chose paper!");
                } else if (computerSelection == "scissors") {
                        ROUND++;
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
        document.getElementById("opponentScore").innerHTML = `Opponent Score: ${OSCORE}`;
  
        if(ROUND == 5){
          if(PSCORE > OSCORE){
              alert("P1 wins");}//Player One Wins ${PSCORE} to ${OSCORE} sent to game log
          else if(OSCORE > PSCORE){
              alert("P2/PC wins");}
        }                       //Player Two / Computer Wins rewrite 
                                //this to differentiate between computer 
                                //and player 2 winning
          
          PSCORE = 0;
          OSCORE = 0;
          ROUND = 1;
        }  
*/

// was working, now buggy. see above?
function opponentButtonToggle() {
  
  alert("TEST")
  PSCORE = 0;
  OSCORE = 0;

  var oppType = document.getElementById("opponentButton");
  if(oppType.value == "Human"){
      oppType.value = "Computer";}
  else if(oppType.value == "Computer"){
      oppType.value = "Human";}
  else{
      oppType.value = "Computer";}
 

  if(oppType.value == "Human") {
    document.getElementById("opponentScore").innerHTML = `Player 2 Score: ${OSCORE}`;}
  else if(oppType.value == "Computer"){
    document.getElementById("opponentScore").innerHTML = `Computer Score: ${OSCORE}`;}

}
