// Get the visitor count from localStorage or initialize it
let visitorCount = localStorage.getItem('visitorCount') || 0;

// Increment the counter
visitorCount = parseInt(visitorCount) + 1;

// Save the updated count back to localStorage
localStorage.setItem('visitorCount', visitorCount);

// Update the counter display
document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.querySelector('.visitor-counter span');
    if (counterElement) {
        counterElement.textContent = visitorCount.toLocaleString();
    }
}); 