function changeBackgroundBasedOnTime() {
    const currentHour = new Date().getHours(); // Get the current hour (0-23)
    const bodyElement = document.body;
  
    if (currentHour >= 20 || currentHour < 6) {
      // If the time is 8 PM or later, or before 6 AM, switch to the night background
      bodyElement.style.backgroundImage = "url('../images/')" 
    } else {
      // Default background (daytime)
      bodyElement.style.backgroundImage = "url('./path/to/underwater_background.png')";
    }
  }
  
  // Call the function when the page loads
  document.addEventListener("DOMContentLoaded", changeBackgroundBasedOnTime);
  