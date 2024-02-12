document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("rollButton").focus();
});

let rollCount = 0;

function rollDice() {
    if (rollCount < 5) {
        for (let i = 1; i <= 5; i++) {
            const randomValue = Math.floor(Math.random() * 6) + 1;
            document.getElementById(`dice${i}`).value = randomValue;
        }
        rollCount++;
    }

    if (rollCount === 5) {
        displayResults();
        document.getElementById("rollButton").disabled = true;
    }
}

function displayResults() {
    const diceValues = [];
    for (let i = 1; i <= 5; i++) {
        diceValues.push(parseInt(document.getElementById(`dice${i}`).value, 10));
    }

    const resultContainer = document.createElement("div");
    resultContainer.innerHTML = `<p>Results: ${diceValues.join(', ')}</p>
                                  <button onclick="restart()">Roll Again</button>`;
    document.body.appendChild(resultContainer);
}

function restart() {
    rollCount = 0;
    document.getElementById("rollButton").disabled = false;
    document.getElementById("rollButton").focus();
    document.querySelector("div").remove(); // Remove the result container
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`dice${i}`).value = "";
    }
}


