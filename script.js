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
document.addEventListener("DOMContentLoaded", function () {
    const darkModeBtn = document.getElementById('darkModeBtn');

    if (darkModeBtn) {  // Prevents error if button is missing
        darkModeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            darkModeBtn.textContent = document.body.classList.contains('dark-mode') 
                ? "☀️ Light Mode" 
                : "🌙 Dark Mode";
        });
    }
});

/* ========== STEP 1: USER AUTHENTICATION SYSTEM ========== */

// Toggle Between Login & Signup Forms
function toggleAuthForms() {
    document.getElementById("login-form").classList.toggle("hidden");
    document.getElementById("signup-form").classList.toggle("hidden");
}

// Register User
function registerUser() {
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;
    let confirmPassword = document.getElementById("signup-confirm-password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    if (localStorage.getItem(email)) {
        alert("User already exists!");
        return;
    }

    localStorage.setItem(email, password);
    alert("Registration successful! You can now log in.");
    toggleAuthForms();
}

// Login User
function loginUser() {
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    let storedPassword = localStorage.getItem(email);
    
    if (storedPassword && storedPassword === password) {
        alert("Login successful!");
        document.getElementById("auth-container").innerHTML = `<h2>Welcome, ${email}!</h2>`;
        document.getElementById("logout-btn").classList.remove("hidden");
    } else {
        alert("Invalid email or password!");
    }
}

// Logout User
function logoutUser() {
    location.reload(); // Reload the page to reset everything
}
