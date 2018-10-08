let min = 1,
  max = 10,
  winningNum,
  guessesLeft;

//UI elements

const game = document.getElementById("game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector(".guess-btn"),
  guessInput = document.querySelector(".guess-input"),
  message = document.querySelector(".message");

minNum.textContent = min;
maxNum.textContent = max;

winningNum = Math.floor(Math.random() * max - min + 1) + min;
guessesLeft = 3;
console.log(winningNum);
console.log("hello");
guessBtn.addEventListener("click", function() {
  //validation
  let guess = guessInput.value;
  if (this.value === "Play Again") {
    window.location.reload();
  }
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  } else {
    makeGuess(guess);
  }
});

function makeGuess(guess) {
  if (guessesLeft > 0) {
    if (parseFloat(guess) == winningNum) {
      guessInput.disabled = true;
      guessInput.style.borderColor = "green";
      guessBtn.value = "Play Again";
      setMessage("You win", "green");
    } else {
      guessesLeft--;
      setMessage(`Guesses left ${guessesLeft}`, "orange");
    }
  } else {
    guessInput.style.borderColor = "red";
    guessInput.disabled = true;
    setMessage(`Game over the correct number was ${winningNum}`, "red");
    guessBtn.value = "Play Again";
  }
}
function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}
