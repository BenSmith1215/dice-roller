document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("rollButton").focus();
});

function rollDice() {
    for (let i = 1; i <= 5; i++) {
        const randomValue = Math.floor(Math.random() * 6) + 1;
        document.getElementById(`dice${i}`).value = randomValue;
    }
}
