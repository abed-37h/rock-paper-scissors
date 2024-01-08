

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function playRoundHelper(playerSelection, computerSelection) {
    let choices = ['rock', 'paper', 'scissors'];

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    let p = choices.indexOf(playerSelection);
    let c = choices.indexOf(computerSelection);

    if (p === -1) return `Error: "${playerSelection}" is not a valid choice!
    Available choices are ["rock", "paper", "scissors"]`;

    if (p === c) return `Tie! Re-play this round`;
    
    if ((p + 1) % 3 === c) return `You Lose! ${computerSelection} beats ${playerSelection}`;

    return `You Win! ${playerSelection} beats ${computerSelection}`;
}

function playRound() {
    let result;
    do {
        let playerSelection = prompt('Type your choice:\n["rock", "paper", "scissors"]');
        let computerSelection = getComputerChoice();
        console.clear();

        result = playRoundHelper(playerSelection, computerSelection);
        console.log(result);
    } while (result.startsWith('Tie') || result.startsWith('Error'));

    return result.startsWith('You Win');
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    while ((playerScore + computerScore) < 5) {
        playRound() ? playerScore++ : computerScore++;

        console.log('Your Score: ' + playerScore + '\t' + ' Computer\'s Score: ' + computerScore);
    }

    console.log((playerScore > computerScore) ? 'Hooray! You Win :D' : 'Good luck next time :(');
}

game()