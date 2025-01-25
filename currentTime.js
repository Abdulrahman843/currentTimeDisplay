// Function to update the time and display it
function updateTime() {
  // Create a new Date object to get the current time
  const now = new Date();

  // Extract hours, minutes, and seconds from the Date object
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  // Display the time in the 'time' div
  document.getElementById("time").innerText = `${hours}:${minutes}:${seconds}`;
}

// Initial call to updateTime to display the time immediately
updateTime();

// Update the time every second using setInterval
setInterval(updateTime, 1000);
