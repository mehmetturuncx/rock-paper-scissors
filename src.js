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

function getHumanChoice(){
    let chioce = prompt("Rock-Paper-Scissors\nChoose your item: ").toLowerCase()

    if(chioce === "rock"){
        return "Rock"
    }
    else if(chioce === "paper"){
        return "Paper"
    }
    else if(chioce === "scissors"){
        return "Scissors"
    }
}

let humanScore = 0, computerScore = 0

function playRound(humanChoice,computerChoice){
    if(humanChoice === computerChoice){
        console.log("Tie!")
        humanScore++
        computerScore++
    }
    else if(humanChoice === "Rock" && computerChoice === "Paper"){
        console.log("Computer wins!")
        computerScore++
    }
    else if(humanChoice === "Rock" && computerChoice === "Scissors"){
        console.log("Human wins!")
        humanScore++
    }
    else if(humanChoice === "Paper" && computerChoice === "Rock"){
        console.log("Human wins!")
        humanScore++   
    }
    else if(humanChoice === "Paper" && computerChoice === "Scissors"){
        console.log("Computer wins!")
        computerScore++
    }
    else if(humanChoice === "Scissors" && computerChoice === "Paper"){
        console.log("Human wins!")
        humanScore++
    }
    else if(humanChoice === "Scissors" && computerChoice === "Rock"){
        console.log("Computer wins!")
        computerScore++
    }
}

while(true){

    const humanSelection = getHumanChoice()
    const computerSelection = getComputerChoice()

    playRound(humanSelection, computerSelection)

    if(humanScore === 5){
        console.log("Game over, human wins!")
        break
    }
    else if(computerScore === 5){
        console.log("Game over, computer wins!")
        break
    }
    else if(humanScore === 5 && computerScore === 5){
        console.log("Game over, tie!")
        break
    }
}


