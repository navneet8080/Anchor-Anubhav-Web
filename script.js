// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Placeholder for form submission logic
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thanks for reaching out! We'll get back to you soon.");
    this.reset();
});
