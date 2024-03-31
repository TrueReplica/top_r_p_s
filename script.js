let playerCounter = 0;
let computerCounter = 0;
let gameCounter = 0;

function getComputerChoice() {
  let ComputerChoice = Math.floor(Math.random() * 3) + 1;

  if (ComputerChoice === 1) {
    return `Rock`;
  }
  if (ComputerChoice === 2) {
    return `Paper`;
  } else {
    return `Scissors`;
  }
}

function playRound(playerSelection, computerSelection) {
  let upperLetter = playerSelection.charAt(0).toUpperCase();
  playerSelection = upperLetter + playerSelection.toLowerCase().substring(1);

  if (
    !playerSelection.includes(`Rock`) &&
    !playerSelection.includes(`Paper`) &&
    !playerSelection.includes('Scissors')
  ) {
    return `Please Write a Valid Option`;
  }

  if (playerSelection === computerSelection) {
    return `It's a tie!`;
  } else {
    if (playerSelection === `Rock`) {
      if (computerSelection === `Paper`) {
        return `You Lose!`;
      } else {
        return `You Won!`;
      }
    } else if (playerSelection === `Paper`) {
      if (computerSelection === `Scissors`) {
        return `You Lose!`;
      } else {
        return `You Won!`;
      }
    } else if (playerSelection === `Scissors`) {
      if (computerSelection === `Rock`) {
        return `You Lose!`;
      } else {
        return `You Won!`;
      }
    } else {
      return `Please Write a Valid Option!`;
    }
  }
}

function playGame() {
  let result;

  do {
    let playerChoice;

    playerChoice = prompt(
      `Please select one of the three options: Rock, Paper or Scissors.`
    );

    let ComputerChoice = getComputerChoice();

    result = playRound(playerChoice, computerSelection);

    if (result.includes(`Won`)) {
      playerCounter++;
    } else if (result.includes(`Lose`)) {
      computerCounter++;
    } else if (result.includes(`Tie`)) {
    } else {
      alert(result);
    }
  } while (result.includes(`Please Write a Valid Option!`));

  gameCounter++;

  console.log(`${gameCounter}: ${result}`);

  if (gameCounter === 5) {
    console.log(`Player: ${playerCounter}, Computer: ${computerCounter}`);
    if (playerCounter === computerCounter) {
      console.log(`Tie in the match!`);
    }
    if (playerCounter > computerCounter) {
      console.log(`You WON the match!`);
    }
    if (playerCounter < computerCounter) {
      console.log(`You LOSE the mathc!`);
    }
  }
}

playGame();
playGame();
playGame();
playGame();
playGame();
