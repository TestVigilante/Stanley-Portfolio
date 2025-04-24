// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Basic scroll-triggered animations (you can expand on this)
    const sections = document.querySelectorAll('.section');

    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const windowHeight = window.innerHeight;
            const scrollPosition = window.scrollY;

            if (scrollPosition > sectionTop - windowHeight + sectionHeight / 4) {
                section.classList.add('active'); // Add a class to trigger CSS animations
            }
        });
    }

    // Initial check on load
    checkScroll();

    // Listen for scroll events
    window.addEventListener('scroll', checkScroll);
});