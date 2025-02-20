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
    let botResponse = "I'm still learning. Please contact support for detailed queries.";
    setTimeout(() => {
        displayMessage(botResponse, "bot-message");
    }, 1000);
}

// Toggle Authentication Forms
function toggleAuthForms() {
    document.getElementById("login-form").classList.toggle("hidden");
    document.getElementById("signup-form").classList.toggle("hidden");
}
