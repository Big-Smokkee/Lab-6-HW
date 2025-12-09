const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// Function to create a todo item
function createTodoItem(text) {
    const li = document.createElement("li");
    li.className = "flex justify-between items-center bg-gray-200 px-4 py-2 rounded-lg";

    // Task text
    const span = document.createElement("span");
    span.textContent = text;
    span.className = "flex-1";

    // Complete button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✔";
    completeBtn.className = "bg-green-500 text-white px-3 py-1 rounded-lg mr-2 hover:bg-green-600";
    completeBtn.addEventListener("click", () => {
        span.classList.toggle("line-through");
        span.classList.toggle("text-gray-500");
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✖";
    deleteBtn.className = "bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600";
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    return li;
}

// Add button click
addBtn.addEventListener("click", () => {
    const text = input.value.trim();
    if (text !== "") {
        const todoItem = createTodoItem(text);
        todoList.appendChild(todoItem);
        input.value = "";
    }
});

// Enter key support
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addBtn.click();
    }
});