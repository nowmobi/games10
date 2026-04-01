function UnityProgress(gameInstance, progress) {
  if (!gameInstance.Module)
    return;

  if (progress === 1) {
    // If progress is complete, remove the loading bar element
    if (gameInstance.progress) {
      gameInstance.container.removeChild(gameInstance.progress);
      gameInstance.progress = null;
    }
    return;
  }

  // Create or update the loading bar element
  if (!gameInstance.progress) {
    // Create the loading bar element if it doesn't exist
    gameInstance.progress = document.createElement("div");
    gameInstance.progress.className = "progress " + gameInstance.Module.splashScreenStyle;
    gameInstance.container.appendChild(gameInstance.progress);

    // Apply bold font and funny style to the loading text
    gameInstance.progress.innerText = "Loading... 0%";
    gameInstance.progress.style.fontWeight = "bold";
    gameInstance.progress.style.fontSize = "24px"; // Adjust font size as needed
    gameInstance.progress.style.color = "yellow"; // Adjust font color as needed
    gameInstance.progress.style.textAlign = "center";
  }

  // Update the loading text
  gameInstance.progress.innerText = "VodoGame.com... " + Math.round(progress * 100) + "%";

  // Apply rounded corners to the loading bar
  gameInstance.progress.style.borderRadius = "10px";

  // Set the width of the loading bar
  gameInstance.progress.style.width = "300px"; // Adjust the width as needed

  // Set the height of the loading bar
  gameInstance.progress.style.height = "20px"; // Adjust the height as needed

  // Center the loading bar horizontally and vertically
  gameInstance.progress.style.position = "absolute";
  gameInstance.progress.style.top = "50%";
  gameInstance.progress.style.left = "50%";
  gameInstance.progress.style.transform = "translate(-50%, -50%)";

  // Show the loading bar
  gameInstance.progress.style.opacity = 1;
}
