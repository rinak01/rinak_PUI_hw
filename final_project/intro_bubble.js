document.addEventListener("DOMContentLoaded", () => {
    const welcomeBubble = document.getElementById("welcomeBubble");
    const beginButton = document.getElementById("beginButton");
    const timerSpan = document.getElementById("timer");

    let countdown = 10; // Set the countdown timer (in seconds)

    // Update the timer every second
    const interval = setInterval(() => {
        countdown--;
        timerSpan.textContent = countdown; // Update the countdown display

        // Hide the message when the timer reaches 0
        if (countdown === 0) {
            clearInterval(interval);
            welcomeBubble.style.display = "none";
        }
    }, 1000);

    // Hide the message when the button is clicked
    beginButton.addEventListener("click", () => {
        clearInterval(interval); // Cancel the timer
        welcomeBubble.style.display = "none";
    });
});
