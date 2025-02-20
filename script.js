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
// Toggle Chatbot Visibility
function toggleChatbot() {
    const chatbotContainer = document.getElementById("chatbot-container");
    chatbotContainer.style.display = chatbotContainer.style.display === "block" ? "none" : "block";
}

// Handle Chatbot Input
function handleChatbotInput(event) {
    if (event.key === "Enter") {
        const inputField = event.target;
        const userMessage = inputField.value;
        if (userMessage.trim() !== "") {
            displayMessage(userMessage, "user-message");
            inputField.value = "";
            getChatbotResponse(userMessage);
        }
    }
}

// Display Message in Chatbot
function displayMessage(message, className) {
    const chatbotBody = document.getElementById("chatbot-body");
    const messageElement = document.createElement("div");
    messageElement.className = `chatbot-message ${className}`;
    messageElement.textContent = message;
    chatbotBody.appendChild(messageElement);
    chatbotBody.scrollTop = chatbotBody.scrollHeight;
}

// Get Chatbot Response
function getChatbotResponse(userMessage) {
    let botResponse;

    // Basic Chatbot Logic (Replace with AI Integration Later)
    if (userMessage.toLowerCase().includes("hello")) {
        botResponse = "Hi there! How can I help you today?";
    } else if (userMessage.toLowerCase().includes("help")) {
        botResponse = "Sure! I can help you with information about our platform.";
    } else if (userMessage.toLowerCase().includes("features")) {
        botResponse = "Our platform offers AI-driven job matching, accessibility support, employer training, and more.";
    } else {
        botResponse = "I'm still learning. Please contact support for detailed queries.";
    }

    setTimeout(() => {
        displayMessage(botResponse, "bot-message");
    }, 1000);
}
