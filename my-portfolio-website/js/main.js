document.addEventListener('DOMContentLoaded', function() {

    // --- Image Slider (Home Page) ---
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        if (!slides.length) return; // Don't run if no slides

        slides.forEach((slide, i) => {
            slide.classList.remove('active-slide');
            if (i === index) {
                slide.classList.add('active-slide');
            }
        });
    }

    // Expose changeSlide to global scope for inline onclick,
    // or preferably, attach event listeners here.
    window.changeSlide = function(direction) {
        if (!slides.length) return;

        currentSlide += direction;
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        } else if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    }

    // Initialize slider
    if (slides.length > 0) {
        showSlide(currentSlide); // Show the first slide initially

        // Optional: Auto-slide functionality
        // setInterval(() => {
        //     changeSlide(1);
        // }, 5000); // Change slide every 5 seconds
    }


    // --- Contact Form Validation (Contact Page) ---
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            // Clear previous error messages and status
            clearErrors();
            formStatus.textContent = '';
            formStatus.style.color = '';

            let isValid = true;

            // Name validation
            const nameInput = document.getElementById('name');
            if (nameInput.value.trim() === '') {
                displayError('nameError', 'Name is required.');
                isValid = false;
            }

            // Email validation
            const emailInput = document.getElementById('email');
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailInput.value.trim() === '') {
                displayError('emailError', 'Email is required.');
                isValid = false;
            } else if (!emailPattern.test(emailInput.value.trim())) {
                displayError('emailError', 'Please enter a valid email address.');
                isValid = false;
            }

            // Message validation
            const messageInput = document.getElementById('message');
            if (messageInput.value.trim() === '') {
                displayError('messageError', 'Message is required.');
                isValid = false;
            }

            if (isValid) {
                // Simulate form submission
                // In a real application, you would send this data to a server
                console.log('Form submitted successfully!');
                console.log('Name:', nameInput.value.trim());
                console.log('Email:', emailInput.value.trim());
                console.log('Subject:', document.getElementById('subject').value.trim());
                console.log('Message:', messageInput.value.trim());

                formStatus.textContent = 'Thank you for your message! We will get back to you soon.';
                formStatus.style.color = 'green';
                contactForm.reset(); // Clear the form fields
            } else {
                formStatus.textContent = 'Please correct the errors in the form.';
                formStatus.style.color = 'red';
            }
        });
    }

    function displayError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        if (errorElement) {
            errorElement.textContent = message;
        }
    }

    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(msg => msg.textContent = '');
    }

    // --- Active Navigation Link Styling ---
    // Get the current page URL
    const currentPage = window.location.pathname.split("/").pop(); // Gets 'index.html', 'about.html', etc.

    // Get all navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split("/").pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active'); // Ensure others are not active
        }
        // Special case for home page if URL is just '/' or empty
        if ((currentPage === '' || currentPage === 'index.html') && linkPage === 'index.html') {
             link.classList.add('active');
        }
    });

});