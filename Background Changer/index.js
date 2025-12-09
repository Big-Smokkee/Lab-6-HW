// Get the body element
const body = document.getElementById("body-tag");

// Map button IDs to background colors
const colors = {
    "btn-1": "orange",
    "btn-2": "pink",
    "btn-3": "yellow",
    "btn-4": "lightgreen",
    "btn-5": "purple"
};

// Attach event listeners to each button
Object.keys(colors).forEach(btnId => {
    const button = document.getElementById(btnId);
    button.addEventListener("click", () => {
        body.style.backgroundColor = colors[btnId];
    });
});
