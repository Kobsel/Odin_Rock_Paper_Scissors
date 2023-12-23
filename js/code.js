
console.log("Game Start!")

function random(min, max){

    return Math.floor(Math.random() * (max - min)) + min

}

function getComputerChoice() {

    var rand = random(0, 3);
    console.log(rand)
    var choice;
    
    if(rand === 0) {
        choice = "Rock"
    }
    else if(rand === 1) {
        choice = "Paper"
    }else  {
        choice = "Scissors"
    }
    
    return choice
}



function run(playerSelection, computerSelection){

    const player = playerSelection.toUpperCase()
    const computer = computerSelection.toUpperCase()

    console.log(player + " "+ computer)

    

    const player_rock = player === "ROCK"
    const player_paper = player === "PAPER"
    const player_scissors = player === "SCISSORS"

    const computer_rock = computer === "ROCK"
    const computer_paper = computer === "PAPER"
    const computer_scissors = computer === "SCISSORS"

    //Console outputs for testing

    console.log(player_rock)
    console.log(player_paper)
    console.log(player_scissors)

    console.log(computer_rock)
    console.log(computer_paper)
    console.log(computer_scissors)

    console.log("---------_")

    console.log(player_rock && computer_paper)
    console.log(player_rock && computer_scissors)



    if(player === computer) {
        console.log("DRAW!!")
    }
    else if(player_rock && computer_paper) {
        console.log("YOU LOST! ::: PAPER BEATS ROCK!")
    }
    else if(player_rock && computer_scissors) {
        console.log("YOU WON!! ::: ROCK BEATS SCISSORS!")
    }
    else if(player_paper && computer_scissors) {
        console.log("YOU LOST! ::: SCISSORS BEAT PAPER")
    }
    else if(player_paper && computer_rock) {
        console.log("YOU WON!! ::: PAPER BEATS ROCK!")
    }
    else if(player_scissors && computer_rock) {
        console.log("YOU LOST! ::: ROCK BEAT SCISSORS")
    }
    else if(player_scissors && computer_paper) {
        console.log("YOU WON!! ::: SCISSORS BEAT PAPER!")
    } else {
        console.log("INVALID INPUT ::: USE PAPER, SCISSORS OR ROCK")
    }

}

run("PaPr", getComputerChoice())
