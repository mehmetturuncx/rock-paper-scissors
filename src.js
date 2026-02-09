function getComputerChoice(){
    let num = Math.floor(Math.random() * 3)

    if(num === 0){
        return "Rock"
    }
    else if(num === 1){
        return "Paper"
    }
    else if(num === 2){
        return "Scissors"
    }
}
const resultDiv = document.getElementById("results")
const scoreDiv = document.getElementById("score")
const winnerDiv = document.getElementById("winner")


let humanScore = 0, computerScore = 0


function playRound(humanChoice,computerChoice){
    if(humanChoice === computerChoice){
        resultDiv.textContent = "It's a tie!"
        return
    }
    if((humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")){

            resultDiv.textContent = "You win! "+humanChoice + " beats " +computerChoice
            humanScore++
        }
    else{
        resultDiv.textContent = "Computer wins! "+computerChoice+" beats "+humanChoice
        computerScore++
    }

    scoreDiv.textContent = "You: "+humanScore +" | "+ "Computer: "+computerScore
}
function playGame(humanChoice){
    const computerChoice = getComputerChoice()
    playRound(humanChoice,computerChoice)

    if(humanScore === 5){
        winnerDiv.textContent = "You won the game!"
        disableButtons()
    }
    else if(computerScore === 5){
        winnerDiv.textContent = "Computer won the game!"
        disableButtons()
    }
}

const rockButton = document.getElementById("rock-button")
const paperButton = document.getElementById("paper-button")
const scissorsButton = document.getElementById("scissors-button")

rockButton.addEventListener("click", () => playGame("Rock"))
paperButton.addEventListener("click", () => playGame("Paper"))
scissorsButton.addEventListener("click", () => playGame("Scissors"))

function disableButtons(){
    rockButton.disabled =  true
    paperButton.disabled =  true
    scissorsButton.disabled =  true
}

