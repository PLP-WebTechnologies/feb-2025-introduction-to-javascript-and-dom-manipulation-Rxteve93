// Function to change text dynamically
function changeContent() {
    document.getElementById("title").textContent = "Welcome to the Future!";
    document.getElementById("subtitle").textContent = "Your journey to digital excellence starts here.";
}

// Function to add/remove an element
function toggleBox() {
    let box = document.getElementById("info-box");
    box.classList.toggle("hidden");
}
