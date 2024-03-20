document.addEventListener("DOMContentLoaded", function() {
    const welcomeButton = document.getElementById('welcomeButton');
    const welcomeMessage = document.getElementById('welcomeMessage');
    const failedMessage = document.getElementById('failedMessage');

    welcomeButton.addEventListener('click', function() {
      const userInput = prompt("Please type 'iamhuman' if you are:");

      if (userInput && userInput.toLowerCase() === 'iamhuman') {
        welcomeMessage.textContent = "Welcome! You have been validated as a human.";
        welcomeMessage.style.display = 'block';
      } else {
        welcomeMessage.style.display = "none";
        alert("Validation failed. You are not confirmed as human.");
        failedMessage.textContent = "Please enter valid argument";
        failedMessage.style.display = 'block'; 
      }
    });
  });