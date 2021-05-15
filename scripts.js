let options = ['rock', 'paper', 'scissors'];

function computerPlay() {
    let computerPick = options[Math.floor(Math.random() * (options.length))]
    return computerPick;
}

function playRound() {
    let playerSel = prompt("Please enter 'Rock' 'Paper' or 'Scissors'", '');
    let computerSel = computerPlay();
    if (playerSel.toLowerCase() == computerSel) {
        return 'tie';
    } else if (playerSel.toLowerCase() == 'scissors' && computerSel == 'paper' ||
               playerSel.toLowerCase() == 'rock' && computerSel == 'scissors' ||
               playerSel.toLowerCase() == 'paper' && computerSel == 'rock'){
        return 'win';
    } else if (playerSel.toLowerCase() == 'paper' && computerSel == 'scissors' ||
            playerSel.toLowerCase() == 'scissors' && computerSel == 'rock' ||
            playerSel.toLowerCase() == 'rock' && computerSel == 'paper'){
        return 'lose';
    } else console.log('Something went wrong');
}

function game() {
    let pScore = 0;
    let cScore = 0;
    while ((pScore < 5) && (cScore < 5)) {
        let roundResult = playRound();
        if (roundResult == 'win'){
            pScore++;
            console.log('win','Player Score:',pScore);
        } else if (roundResult == 'lose') {
            cScore++;
            console.log('lose','Computer Score:',cScore);
        } else if (roundResult == 'tie') {
            console.log('tie');
        } else {
            console.log('Something went wrong');
        }
    }

    if (pScore == 5) {
        console.log("You Win!");
    } else if(cScore == 5) {
        console.log("Computer Wins... :(")
    } else {
        console.log("Something went wrong")
    }
}



