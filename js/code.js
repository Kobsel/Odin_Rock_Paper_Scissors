
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
    else if(rand ===1) {
        choice = "Paper"
    }else  {
        choice = "Scissors"
    }
    
    return choice
}

console.log(getComputerChoice())
