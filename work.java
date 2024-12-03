// Simple JavaScript to add interactivity (for the "Get in Touch" button)
document.getElementById('alertButton').addEventListener('click', function() {
    alert('Thanks for reaching out! We will contact you soon.');
});

// Smooth Scroll with offset for navigation links
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a'); // Select all nav links

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior

            const targetId = this.getAttribute('href').substring(1); // Get the target section ID
            const targetElement = document.getElementById(targetId); // Get the target section element

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Scroll to the target section with an offset of 80px
                    behavior: 'smooth' // Smooth scroll
                });
            }
        });
    });
});
