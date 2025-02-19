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
