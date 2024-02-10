

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
        choice.addEventListener('click', () => {
            const computerSelection = getComputerChoice();
            const playerSelection = choice.id;
            const result = playRound(playerSelection, computerSelection);
    
            if (result.startsWith('You Win')) playerScore++;
            else if (result.startsWith('You Lose')) computerScore++;
            
            const resultText = document.querySelector('#result');
            const playerScoreRef = document.querySelector('#player-score');
            const computerScoreRef = document.querySelector('#computer-score');

            resultText.textContent = result;
            playerScoreRef.textContent = playerScore;
            computerScoreRef.textContent = computerScore;

            if (playerScore === 5 || computerScore === 5) {
                choices.forEach((c) => { c.disabled = true; });

                const display = document.querySelector('#display');
                const finalResult = document.createElement('p');

                finalResult.id = 'final-result';
                finalResult.textContent = (playerScore > computerScore) 
                    ? 'Hooray! You Win ' + String.fromCodePoint(0x1F604)
                    : 'Good luck next time ' + String.fromCodePoint(0x1F61E);

                display.appendChild(finalResult);
            }
        });
    });
    
    const reset = document.querySelector('#reset');
    reset.addEventListener('click', () => {
        result = 'Choose your weapon to start...';
        playerScore = 0;
        computerScore = 0;
        
        const resultText = document.querySelector('#result');
        const playerScoreRef = document.querySelector('#player-score');
        const computerScoreRef = document.querySelector('#computer-score');
        const finalResult = document.querySelector('#final-result');
        
        resultText.textContent = result;
        playerScoreRef.textContent = playerScore;
        computerScoreRef.textContent = computerScore;
        
        choices.forEach((c) => { c.disabled = false; });
        if (finalResult) finalResult.remove();
    });
}

game()