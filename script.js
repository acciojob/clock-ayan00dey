function updateTimer() {
    const timerElement = document.getElementById('timer');
    const now = new Date();
    timerElement.textContent = now.toLocaleString();
}

// Show time immediately on load
updateTimer();

// Update the timer every second
setInterval(updateTimer, 1000);
