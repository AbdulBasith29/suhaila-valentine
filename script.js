// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const questionContainer = document.getElementById('question-container');
    const response = document.getElementById('response');

    // Handle the "Yes" button click
    yesButton.addEventListener('click', () => {
        // Hide the question and show the response
        questionContainer.style.display = 'none';
        response.style.display = 'block';
        // Generate multiple hearts for the animation
        for (let i = 0; i < 50; i++) {
            createHeart();
        }
    });

    // Make the "No" button hard to click by moving it on hover
    noButton.addEventListener('mouseover', () => {
        // Determine the boundaries within the container
        const containerRect = questionContainer.getBoundingClientRect();
        const btnRect = noButton.getBoundingClientRect();
        // Calculate random positions (avoid leaving the container)
        const maxX = containerRect.width - btnRect.width;
        const maxY = containerRect.height - btnRect.height;
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;
        noButton.style.position = 'relative';
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });

    // Add a gentle warning when the "No" button is clicked
    noButton.addEventListener('click', () => {
        alert('Are you sure? Please reconsider 😊');
    });

    // Function to create a single heart element and animate it
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = '❤️';
        // Randomize initial horizontal position
        heart.style.left = Math.random() * 100 + 'vw';
        // Randomize animation duration for variety
        const duration = 5 + Math.random() * 5;
        heart.style.animationDuration = `${duration}s`;
        // Randomize heart size
        const size = 20 + Math.random() * 20;
        heart.style.fontSize = `${size}px`;
        document.body.appendChild(heart);
        // Remove the heart element after its animation completes to clean up the DOM
        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }
});