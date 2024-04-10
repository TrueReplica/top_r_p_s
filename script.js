// Random computer choice
function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  let random = Math.floor(Math.random() * choices.length);
  const compChoice = choices[random];
  return compChoice;
}

// Return a message based on the contition
function playRound(playerSelection, compChoice) {
  let player = playerSelection.toLowerCase();
  let computer = compChoice.toLowerCase();
  let message = '';

  if (player === computer) {
    message = `Tie!`;
  } else if (player === 'rock') {
    if (computer === 'scissors') {
      message = `You Won!`;
    } else {
      message = `You Lose!`;
    }
  } else if (player === 'paper') {
    if (computer === 'rock') {
      message = `You Won!`;
    } else {
      message = `You Lose!`;
    }
  } else if (player === 'scissors') {
    if (computer === 'paper') {
      message = `You Won!`;
    } else {
      message = `You Lose!`;
    }
  }
  return message;
}

// Creating a container
const container = document.querySelector('#container');

// Creating three buttons for player choice - rock, paper, scissors
const btn1 = document.createElement('button');
const btn2 = document.createElement('button');
const btn3 = document.createElement('button');

btn1.id = 'rockBtn';
btn2.id = 'paperBtn';
btn3.id = 'scissorsBtn';

btn1.textContent = 'Rock';
btn2.textContent = 'Paper';
btn3.textContent = 'Scissors';

container.appendChild(btn1);
container.appendChild(btn2);
container.appendChild(btn3);

// Iterate over the buttons; on click is a playerChoice; also, the compSelect func.is called; lastly, playRount to get the result of one round
let buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const playerSelection = button.textContent;
    const computerSelection = getComputerChoice();

    const result = playRound(playerSelection, computerSelection);

    resultString.textContent = result;

    scoreAdd(); // This function is adding score, determines the winner
  });
});

// Create resultString
const resultString = document.createElement('div');
resultString.id = 'result';
container.appendChild(resultString);

// Create runningScore
const runningScore = document.createElement('div');
runningScore.id = 'score';
container.appendChild(runningScore);

// Initializing the playerScore and computerScore with 0
let playerScore = 0;
let computerScore = 0;

// Creating paragraph for displaying playerScore
const playerCount = document.createElement('p');
playerCount.textContent = `Player Score: ${playerScore}`;
runningScore.appendChild(playerCount);

// Creating paragraph for displaying computerScore
const computerCount = document.createElement('p');
computerCount.textContent = `Computer Score: ${computerScore}`;
runningScore.appendChild(computerCount);

// Creating a reset button
const resetButton = document.createElement('button');
resetButton.id = 'resetButton';
resetButton.textContent = 'Replay';

// Creating resultShow and resultScore
const resultShow = document.createElement('p');
resultShow.id = 'resultShow';
const resultScore = document.createElement('p');
resultScore.id = 'resultScore';

// scoreAdd function to keep track of incrementing the score for both comp and player until one of them reaches 5.
function scoreAdd() {
  if (resultString.textContent.includes('Won')) {
    playerScore++;
  } else if (resultString.textContent.includes('Lose')) {
    computerScore++;
  }

  // Condition for checking who won the match
  if (computerScore == 5) {
    resultShow.textContent = 'Computer Won!';
    resultScore.textContent = `Your Score: ${playerScore} Computer Score: ${computerScore}`;

    playerScore = 0; // check the other initialization of these two variables
    computerScore = 0;

    container.appendChild(resultShow);
    container.appendChild(resultScore);
    container.appendChild(resetButton);
  } else if (playerScore == 5) {
    resultShow.textContent = 'You Won!';
    resultScore.textContent = `Computer Score: ${computerScore} Player Score: ${playerScore}`;

    playerScore = 0;
    computerScore = 0;

    container.appendChild(resultShow);
    container.appendChild(resultScore);
    container.appendChild(resetButton);
  }
  // Displaying final result
  playerCount.textContent = `Player Score: ${playerScore}`;
  computerCount.textContent = `Computer Score: ${computerScore}`;
}

// Reset function
function reset() {
  playerScore = 0;
  computerScore = 0;
  resultString.textContent = '';
  resultShow.textContent = '';
  resultScore.textContent = '';
  playerCount.textContent = 'Player Score: 0';
  computerCount.textContent = 'Computer Score: 0';
  container.removeChild(resetButton);
}

// Reset button to replay the game
resetButton.addEventListener('click', () => {
  reset();
});
