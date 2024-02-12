document.addEventListener("DOMContentLoaded", function () {
    const rollButton = document.getElementById("rollButton");
    rollButton.addEventListener("click", rollDice);
    rollButton.focus();
});

let rollCount = 0;

function rollDice() {
    if (rollCount < 5) {
         {
            const randomValue = Math.floor(Math.random() * 6) + 1;
            document.getElementById(`dice${i}`).textContent = randomValue;
        }
        rollCount++;
    }

    if (rollCount === 5) {
        displayResults();
        document.getElementById("rollButton").disabled = true;
    }
}

function displayResults() {
    const diceValues = Array.from({ length: 5 }, (_, i) =>
        parseInt(document.getElementById(`dice${i + 1}`).textContent, 10)
    );

    const resultContainer = document.createElement("div");
    resultContainer.innerHTML = `<p>Results: ${diceValues.join(", ")}</p>
                                  <button id="rollAgainButton">Roll Again?</button>`;
    document.body.appendChild(resultContainer);

    document.getElementById("rollAgainButton").addEventListener("click", rollAgain);
}

function rollAgain() {
    rollCount = 0;
    document.getElementById("rollButton").disabled = false;
    document.getElementById("rollButton").focus();
    const resultContainer = document.querySelector("div");
    if (resultContainer) {
        resultContainer.remove(); // Remove the result container
    }

    for (let i = 1; i <= 5; i++) {
        document.getElementById(`dice${i}`).textContent = "";
    }
}





