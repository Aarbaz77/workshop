// This file contains JavaScript code for interactivity on the website. 
// You can add functions for form validation or dynamic content updates here.

document.addEventListener('DOMContentLoaded', function() {
    console.log('Welcome to the School Website!');

    // Example function for form validation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;

            if (!name || !email) {
                event.preventDefault();
                alert('Please fill in all fields.');
            }
        });
    }
});