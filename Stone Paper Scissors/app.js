let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".picture");
let your_scor = document.querySelector("#your-scor");
let comp_scor = document.querySelector("#com-scor");

let message = document.querySelector("#mess");

const genCompChoice = ()=>{
    const options = ["rock" ,"paper", "scissors"];
    const ranIndex = Math.floor(Math.random() * 3);
    return options[ranIndex];
};

const drawGame = () => {
    message.innerText = "Game was Draw. Play again.";
    message.style.backgroundColor = "#081b31";
  };

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        your_scor.innerText = userScore;
        message.innerText = `You Win ! your ${userChoice} beats ${compChoice}`;
        message.style.backgroundColor = "green";
    }else{
        compScore++;
        comp_scor.innerText = compScore;
        message.innerText = `You lost. ${compChoice} beats yor ${userChoice}`;
        message.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
    const compChoice = genCompChoice();
    // console.log(`computer choice : ${compChoice}`);

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            // scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            // rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        }else{
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choices) => {
    choices.addEventListener("click", () => {
        const userChoice = choices.getAttribute("id");
        // console.log("your choice : " + userChoice);
        playGame(userChoice);
    })
})