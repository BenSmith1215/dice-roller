"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const rollButton = document.getElementById("rollButton");
    if (rollButton) {
        rollButton.addEventListener("click", rollDice);
        rollButton.focus();
    }
});

let rollCount = 0;

function rollDice() {
    if (rollCount < 5) {
        for (let i = 1; i <= 5; i++) {
            const randomValue = Math.floor(Math.random() * 6) + 1;
            document.getElementById(`dice${i}`).textContent = randomValue;
        }
        rollCount++;
    }
}







