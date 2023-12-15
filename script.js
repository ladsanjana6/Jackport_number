// Declare variables
let randomNum = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// Get HTML elements
const guess = document.getElementById("guess");
const submit = document.getElementById("submit");
const hint = document.getElementById("hint");
const attemptsText = document.getElementById("attempts");

// Event Listener for button click
submit.addEventListener("click", checkGuess);

// Function to check the guess
function checkGuess() {
  const userValue = Number(guess.value);
  attempts++;

  // Using Conditionals
  if (userValue === randomNum) {
    hint.textContent = "Congratulations, you guessed it!";
  } else if (userValue < randomNum) {
    hint.textContent = "Too low! Try again.";
  } else {
    hint.textContent = "Too high! Try again.";
  }

  // Display the number of attempts
  attemptsText.textContent = "Attempts: " + attempts;
}

function increaseCounter () {
    if ( count < 4 ) {
        count++;
        counter.innerText = count;
    } else {
        counter.innerText = "Guesses Finished";
        if ( !won ) {
            hint.innerText = `You lost, the ans was ${ randomValue }`
        }
    }
}

restart.onclick = function () {
    location.href = "/NumberGame/index.html";
}
