
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

    var resultText = '';


    if(player === computer) {

        setScore(0);

        
    }
    else if(player_rock && computer_paper) {
        console.log("YOU LOST! ::: PAPER BEATS ROCK!")
        setScore(-1);
    }
    else if(player_rock && computer_scissors) {
        console.log("YOU WON!! ::: ROCK BEATS SCISSORS!")
        setScore(1);
    }
    else if(player_paper && computer_scissors) {
        console.log("YOU LOST! ::: SCISSORS BEAT PAPER")
        setScore(-1);
    }
    else if(player_paper && computer_rock) {
        console.log("YOU WON!! ::: PAPER BEATS ROCK!")
        setScore(1);
    }
    else if(player_scissors && computer_rock) {
        console.log("YOU LOST! ::: ROCK BEAT SCISSORS")
        setScore(-1);
    }
    else if(player_scissors && computer_paper) {
        console.log("YOU WON!! ::: SCISSORS BEAT PAPER!")
        setScore(1);
    } else {
        console.log("INVALID INPUT ::: USE PAPER, SCISSORS OR ROCK")
        setScore(-1);
    }

}





function setResultText(string) {

    const result = document.querySelector("#result");
    result.textContent = string;

}




var player_score = 0;
var computer_score = 0;

const player = document.querySelector("#player");
const computer = document.querySelector("#computer");

function setScore(value){

    if(value === 0){

        setResultText("DRAW")

    } else if(value > 0){
        player_score++;
        setResultText("WIN!")
    } else if(value < 0){
        computer_score++;
        setResultText("LOST!")
    }
    computer.textContent = computer_score;
    player.textContent = player_score;

    if(player_score >= 5 || computer_score >= 5){

        if(player_score >= 5) {

            setResultText("----CONGRATS! YOU WON!----");

        } else {

            setResultText("----YOU LOST! THE COMPUTER WON!----")

        }
        player_score = 0;
        computer_score = 0;

    }

}



const button_rock = document.querySelector("#rock");
const button_paper = document.querySelector("#paper");
const button_scissors = document.querySelector("#scissors");

console.log(button_paper);

const container = document.querySelector(".container");
console.log(container);

container.addEventListener('click', function(event) {

    console.log("RUN");
    const target = event.target;

    switch(target.id){

    case('rock'):
        
        run('rock', getComputerChoice());
        
        break;
    case('paper'):

        run('paper', getComputerChoice());

        break;
    case('scissors'):

        run('scissors', getComputerChoice());
        break;

    }

});


