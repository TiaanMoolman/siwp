// Scroll Animation - Fade In on Scroll
document.addEventListener("DOMContentLoaded", function () {
    let elements = document.querySelectorAll(".scroll-animation");

    function fadeInOnScroll() {
        elements.forEach((element) => {
            let rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Run on page load
});

// Dark Mode Toggle
const darkModeBtn = document.getElementById('darkModeBtn');
darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeBtn.textContent = document.body.classList.contains('dark-mode') ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// User Authentication System
function toggleAuthForms() {
    document.getElementById("login-form").classList.toggle("hidden");
    document.getElementById("signup-form").classList.toggle("hidden");
}

function loginUser() {
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    if (email === "test@example.com" && password === "password123") {
        alert("Login successful! 🎉");
        document.getElementById("auth-container").classList.add("hidden");
        document.getElementById("logout-btn").classList.remove("hidden");
    } else {
        alert("Invalid email or password. Please try again.");
    }
}

function registerUser() {
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;
    let confirmPassword = document.getElementById("signup-confirm-password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match! ❌");
        return;
    }

    alert("Account created successfully! ✅ Now you can login.");
    toggleAuthForms(); // Switch back to login form
}

function logoutUser() {
    alert("Logged out successfully! 🚪");
    document.getElementById("auth-container").classList.remove("hidden");
    document.getElementById("logout-btn").classList.add("hidden");
}

// Simple AI Chatbot Integration
document.addEventListener("DOMContentLoaded", function () {
    let chatbotContainer = document.createElement("div");
    chatbotContainer.id = "chatbot-container";
    chatbotContainer.innerHTML = `
        <div id="chatbot-header">AI Chatbot 💬</div>
        <div id="chatbot-body"></div>
        <input type="text" id="chatbot-input" placeholder="Ask me something...">
        <button id="chatbot-send">Send</button>
    `;
    document.body.appendChild(chatbotContainer);

    document.getElementById("chatbot-send").addEventListener("click", function () {
        let userInput = document.getElementById("chatbot-input").value;
        if (userInput.trim() === "") return;

        let chatbotBody = document.getElementById("chatbot-body");
        chatbotBody.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;

        // Simple AI Response Simulation
        let aiResponse = "I'm here to help! 😊 How can I assist you today?";
        if (userInput.toLowerCase().includes("job")) {
            aiResponse = "Looking for a job? I can match you with opportunities!";
        } else if (userInput.toLowerCase().includes("help")) {
            aiResponse = "I am here to assist you with anything related to the workplace!";
        }

        setTimeout(() => {
            chatbotBody.innerHTML += `<p><strong>AI:</strong> ${aiResponse}</p>`;
        }, 1000);

        document.getElementById("chatbot-input").value = ""; // Clear input
    });
});
