var PSCORE = 0;
var OSCORE = 0;
var OPPONENT = "Computer";

// Generates the computers 'choice' of weapon for the round
// currently pseudorandom - fix
function getComputerChoice() {
        let computerChoice = (Math.ceil(Math.random() * 3));

        if (computerChoice == 1)
                return "rock";
        else if (computerChoice == 2)
                return "paper";
        else if (computerChoice == 3)
                return "scissors";
        else
          return "Selection Error";
}

// Begins a round against a human opponent
// ...code me


// Begins a round against a computer opponent
// this could be broken down into sub functions 
function playRound(playerSelection, computerSelection) {
	if (OSCORE == 3 || PSCORE == 3){
		resetGame();
	}

        if (playerSelection == 'rock') {
		if (computerSelection == "rock") {
			let list = document.getElementById("gameLog");
			let li = document.createElement('li');

			list.appendChild(li).innerHTML=
				"Both players chose rock, it's a draw.";
			
		} else if (computerSelection == "paper") {
			let list = document.getElementById("gameLog");
			let li = document.createElement('li');
			
			list.appendChild(li).innerHTML=
				"The Computer chose paper, you lose this round.";
			
			OSCORE++;
                
		} else if (computerSelection == "scissors") {
			let list = document.getElementById("gameLog");
			let li = document.createElement('li');
			
			list.appendChild(li).innerHTML=
				"The computer chose scissors, you win this round!";

			PSCORE++;
                }
	} else if (playerSelection == "paper") {
		if (computerSelection == "paper") {
			let list = document.getElementById("gameLog");
			let li = document.createElement("li");

			list.appendChild(li).innerHTML=
				"Both players chose paper, it's a draw.";
			
		} else if (computerSelection == "scissors") {
			let list = document.getElementById("gameLog");
			let li = document.createElement('li');
			
			list.appendChild(li).innerHTML=
				"The computer chose scissors, you lose this round.";
			
			OSCORE++;
                
		} else if (computerSelection == "rock") {
			let list = document.getElementById("gameLog");
			let li = document.createElement('li');
			
			list.appendChild(li).innerHTML=
				"The computer chose rock, you win this round!";

                        PSCORE++;
                }
	} else if (playerSelection == "scissors") {
                if (computerSelection == "scissors") {
			let list = document.getElementById("gameLog");
			let li = document.createElement('li');
			
			list.appendChild(li).innerHTML=
                		"Both players chose scissors, it's a draw.";

                } else if (computerSelection == "rock") {
			let list = document.getElementById("gameLog");
			let li = document.createElement('li');
			
			list.appendChild(li).innerHTML=
				"The computer chose rock, you lose this round.";
                        
	                OSCORE++;
        		
		} else if (computerSelection == "paper") {
			let list = document.getElementById("gameLog");
			let li = document.createElement('li');
			
			list.appendChild(li).innerHTML=
				"The computer chose paper, you win this round!";

                        PSCORE++;
                }
	} else {
                alert("Invalid entry, please choose rock, paper, or scissors.");
        }
      
        document.getElementById("playerScore").innerHTML = `Player Score: ${PSCORE}`;
        document.getElementById("opponentScore").innerHTML = `${OPPONENT} Score: ${OSCORE}`;
  
        if (PSCORE == 3 || OSCORE == 3){
		if (PSCORE == 3){
			alert("P1 wins");} // replace alert with announcement
        	else if (OSCORE == 3 && OPPONENT == "Computer"){
                	alert("Computer wins");} // replace alert with announcement
        	else if (OSCORE == 3 && OPPONENT == "Human"){
			alert("P2 wins");} // replace alert with announcement

	}
	
}

// Resets the game scores to zero and clears the game log
function resetGame(){
	let clearGameLog = document.getElementById("gameLog");

	while(clearGameLog.hasChildNodes()){
		clearGameLog.removeChild(clearGameLog.firstChild);
		}

	PSCORE = 0;
	OSCORE = 0;
	
	document.getElementById("playerScore").innerHTML = `Player Score: ${PSCORE}`;
	document.getElementById("opponentScore").innerHTML = `${OPPONENT} Score: ${OSCORE}`;
	
}
  

// Toggles between a human and computer opponent
// Currently functioning correctly
function opponentButtonToggle() {
	PSCORE = 0;
	OSCORE = 0;
	
	document.getElementById("playerScore").innerHTML = `Player Score: ${PSCORE}`;
	document.getElementById("opponentScore").innerHTML = `${OPPONENT} Score: ${OSCORE}`;

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
