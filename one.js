const inputEl = document.querySelector("input");
const guessEl = document.querySelector(".guess");
const checkBtnEl = document.querySelector("button");
const remainingChancesTextEl = document.querySelector(".chances");
const remainingChancesEl = document.querySelector(".chance");

let randomNumber;
let totalChances;

function startGame() {
    randomNumber = Math.floor(Math.random() * 100);
    console.log(randomNumber);
    
    totalChances = 10;
    inputEl.value = ""; // Clear input
    inputEl.disabled = false; // Enable input
    guessEl.textContent = ""; // Clear previous messages
    remainingChancesTextEl.textContent = `Remaining Chances: ${totalChances}`;
    remainingChancesEl.textContent = totalChances;
    checkBtnEl.textContent = "Check Guess"; // Reset button text
}

startGame(); // Start the game when the page loads

checkBtnEl.addEventListener("click", () => {
    if (checkBtnEl.textContent === "Play Again...😉") {
        startGame(); // Restart the game
        return;
    }

    totalChances--;
    let inputValue = Number(inputEl.value); // Convert input to a number

    if (totalChances === 0) {
        inputEl.value = ""; // Clear input value
        inputEl.disabled = true;
        guessEl.textContent = "Oops...! Bad luck😥, You lost the game.";
        guessEl.style.color = "red";
        checkBtnEl.textContent = "Play Again...😉";
        remainingChancesTextEl.textContent = "No chances left";
    } else if (inputValue > randomNumber && inputValue < 100) {
        guessEl.textContent = "Your Guess is High👍.";
        remainingChancesEl.textContent = totalChances;
        guessEl.style.color = "#1446a0";
    } else if (inputValue < randomNumber && inputValue > 0) {
        guessEl.textContent = "Your Guess is low👎.";
        remainingChancesEl.textContent = totalChances;
        guessEl.style.color = "#1446a0";
    } else if (inputValue === randomNumber) {
        guessEl.textContent = "You guessed the correct number! 🎉";
        remainingChancesEl.textContent = totalChances;
        inputEl.disabled = true;
        remainingChancesTextEl.textContent = `You Win! Remaining chances are ${totalChances}`;
        checkBtnEl.textContent = "Play Again...😉";
        guessEl.style.color = "#1446a0";
    } else {
        guessEl.textContent = "Your number is invalid.";
        remainingChancesEl.textContent = totalChances;
        guessEl.style.color = "red";
    }
});
