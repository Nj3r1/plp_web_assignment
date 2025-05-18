document.addEventListener('DOMContentLoaded', () => {
    const animateButton = document.getElementById('animateButton');
    const animatedBox = document.getElementById('animatedBox');
    const favoriteColorInput = document.getElementById('favoriteColor');
    const favoriteColorDisplay = document.getElementById('favoriteColorDisplay');

    // Function to store user preference in localStorage
    function storePreference(key, value) {
        localStorage.setItem(key, value);
        console.log(`Stored ${key}: ${value}`);
    }

    // Function to retrieve user preference from localStorage
    function getPreference(key) {
        const value = localStorage.getItem(key);
        console.log(`Retrieved ${key}: ${value}`);
        return value;
    }

    // Load favorite color from localStorage on page load
    const storedColor = getPreference('favoriteColor');
    if (storedColor) {
        favoriteColorInput.value = storedColor;
        favoriteColorDisplay.textContent = `Your favorite color is: ${storedColor}`;
    }

    // Event listener to store favorite color when changed
    favoriteColorInput.addEventListener('change', (event) => {
        const color = event.target.value;
        storePreference('favoriteColor', color);
        favoriteColorDisplay.textContent = `Your favorite color is: ${color}`;
    });

    // Function to trigger the pulse animation
    function triggerPulseAnimation() {
        animatedBox.classList.add('pulsing');
        // Remove the class after the animation duration to allow re-triggering
        setTimeout(() => {
            animatedBox.classList.remove('pulsing');
        }, 1000); // Matches the animation duration
    }

    // Event listener to trigger animation on button click
    animateButton.addEventListener('click', triggerPulseAnimation);
});