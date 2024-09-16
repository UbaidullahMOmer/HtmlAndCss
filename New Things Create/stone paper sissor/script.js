let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");
let msg1 = document.querySelector(".msg1");
let userScorepara = document.querySelector(".user-score");
let compScorepara = document.querySelector(".comp-score");
let stopGame = false
let playGame = (userChoice) => {
    if(stopGame){
        alert("Game is end")
        return
    }
    console.log("user choice = ", userChoice);
    let compChoice = genCompScore();
    console.log("comp choice = ", compChoice);
    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true; 
        }else if(compChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};
choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        let userChoice = choice.getAttribute("id"); 
        playGame(userChoice);
    });
});
let genCompScore = () => {
    let option = ["rock", "paper", "scissors",];
    let randIdx = Math.floor(Math.random() *3);
    return option[randIdx]; 
};
let drawGame = () => {
    console.log("game was Draw")
    msg.innerHTML = "Game Was Draw. Play Again.";
    msg.style.background = "#081b31";
};
let showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        console.log("You Win");
        userScore++;
        userScorepara.innerHTML = userScore;
        msg.innerHTML = `You Win.`;
        msg.style.background = "green";
    }else {
        compScore++;
        compScorepara.innerHTML = compScore;
        console.log("you lose");
        msg.innerHTML = `You Lost.`;
        msg.style.background = "red";
    }
};
document.querySelector("#whoWinner").addEventListener("click", function(){
    if(userScore === compScore) {
        console.log("The Game Is Tie");
        msg1.innerHTML = "The Game Is Tie";
    }else if(userScore > compScore){
        console.log("The Winner is User");
        msg1.innerHTML = "The Winner is User";
    }else if(userScore < compScore){
        console.log("The Winner is Computer");
        msg1.innerHTML = "The Winner is Computer";
    };
    stopGame = true
});
