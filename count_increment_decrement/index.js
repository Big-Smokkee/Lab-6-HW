let count = 0;

const countDisplay = document.getElementById("number-h2");
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");

function updateDisplay() {
    countDisplay.textContent = count;
    if (count > 0) {
        countDisplay.classList.remove("text-red-500");
        countDisplay.classList.add("text-green-500");
    } else {
        countDisplay.classList.remove("text-green-500");
        countDisplay.classList.add("text-red-500");
    }
}

incrementBtn.addEventListener("click", () => {
    count++;
    updateDisplay();
});

decrementBtn.addEventListener("click", () => {
    if (count > 0) {
        count--;
        updateDisplay();
    }
});
