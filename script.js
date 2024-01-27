

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    let choices = ['rock', 'paper', 'scissors'];

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    let p = choices.indexOf(playerSelection);
    let c = choices.indexOf(computerSelection);

    if (p === c) return `Tie! Re-play this round`;
    
    if ((p + 1) % 3 === c) return `You Lose! ${computerSelection} beats ${playerSelection}`;

    return `You Win! ${playerSelection} beats ${computerSelection}`;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    const choices = document.querySelectorAll('.choice button');
    choices.forEach((choice) => {
        choice.addEventListener('click', (event) => {
            console.clear();
    
            const computerSelection = getComputerChoice();
            const playerSelection = choice.id;
            const result = playRound(playerSelection, computerSelection);
    
            if (result.startsWith('You Win')) playerScore++;
            else if (result.startsWith('You Lose')) computerScore++;
            
            console.log(result);
            console.log(`Your score: ${playerScore}`);
            console.log(`Computer score: ${computerScore}`);
        });
    });
}

game()