const text = "My name is Priti.";
const typedTextElement = document.getElementById("typed-text");
const cursor = document.createElement("span");
cursor.classList.add("cursor");
typedTextElement.appendChild(cursor);

let index = 0;

function type() {
    if (index < text.length) {
        typedTextElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100); // Adjust speed here (100ms)
    } else {
        // Optionally: keep the cursor blinking after typing
        cursor.style.display = 'inline'; // Keep cursor visible
    }
}

// Start typing and keep cursor blinking
type();
