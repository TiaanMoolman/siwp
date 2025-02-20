// Toggle Between Login and Signup Forms
function toggleAuthForms() {
    document.getElementById("login-form").classList.toggle("hidden");
    document.getElementById("signup-form").classList.toggle("hidden");
}

// Login User
function loginUser() {
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    // Example Hardcoded Login (Replace with your logic)
    if (email === "test@example.com" && password === "password123") {
        alert("Login successful! 🎉");
        document.getElementById("auth-container").classList.add("hidden");
        document.getElementById("logout-btn").classList.remove("hidden");
    } else {
        alert("Invalid email or password. Please try again.");
    }
}

// Register User
function registerUser() {
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;
    let confirmPassword = document.getElementById("signup-confirm-password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match! ❌");
        return;
    }

    alert("Account created successfully! ✅ Now you can login.");
    toggleAuthForms();
}

// Logout User
function logoutUser() {
    alert("Logged out successfully! 🚪");
    document.getElementById("auth-container").classList.remove("hidden");
    document.getElementById("logout-btn").classList.add("hidden");
}
