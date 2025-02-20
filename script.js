// Scroll Animation
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
    fadeInOnScroll();
});

// Dark Mode Toggle
const darkModeBtn = document.getElementById('darkModeBtn');
darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeBtn.textContent = document.body.classList.contains('dark-mode') ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// Toggle Authentication Forms
function toggleAuthContainer() {
    const authContainer = document.getElementById("auth-container");
    authContainer.classList.toggle("active");
}

// Chatbot Toggle
function toggleChatbot() {
    const chatbotContainer = document.getElementById("chatbot-container");
    chatbotContainer.style.display = chatbotContainer.style.display === "none" || chatbotContainer.style.display === "" ? "block" : "none";
}

// Chatbot Input Handler
function handleChatbotInput(event) {
    if (event.key === "Enter") {
        const input = event.target.value;
        const chatBody = document.getElementById("chatbot-body");
        const userMessage = `<div class="chatbot-message user-message">${input}</div>`;
        chatBody.innerHTML += userMessage;
        event.target.value = "";
    }
}
