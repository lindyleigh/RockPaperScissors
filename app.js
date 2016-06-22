function play(playerChoice){
    var choices = ["rock", "paper", "scissors"]
    var randI=Math.floor(Math.random() * choices.length);
    var compChoice=choices[randI];
   
    if (playerChoice == compChoice) {
        alert("Computer chose " + compChoice + ". It's a tie!");
    }
    else {
            if (playerChoice == "rock" && compChoice == "scissors" ) {
            alert("Computer chose scissors. You win!");
            return;
            } 
            else if (playerChoice == "paper" && compChoice == "rock") {
            alert("Computer chose rock. You win!");
            return;
            } 
            else if (playerChoice == "scissors" && compChoice == "paper") {
            alert("Computer chose paper. You win!");
            return;
            }
                else {
                    alert("Computer chose " + compChoice + ". Sorry, you lose.");
                }
            } 
    }
