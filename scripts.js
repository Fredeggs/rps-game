let options = ['rock', 'paper', 'scissors'];
let playerSelection = prompt("Please enter 'Rock' 'Paper' or 'Scissors'", '');
let computerSelection = computerPlay();

function computerPlay() {
    let computerPick = options[Math.floor(Math.random() * (options.length))]

    console.log(computerPick);
}

function playRound(playerSel, computerSel) {
    if (playerSel.toLowerCase() == computerSel) {
        alert('tie');
    } else if (playerSel.toLowerCase() == 'scissors' && computerSel == 'paper' ||
               playerSel.toLowerCase() == 'rock' && computerSel == 'scissors' ||
               playerSel.toLowerCase() == 'paper' && computerSel == 'rock'){
        alert('you win')
    } else (playerSel.toLowerCase() == 'paper' && computerSel == 'scissors' ||
            playerSel.toLowerCase() == 'scissors' && computerSel == 'rock' ||
            playerSel.toLowerCase() == 'rock' && computerSel == 'paper'){
        alert('you lose')
    }
}



