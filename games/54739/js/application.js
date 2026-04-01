// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  document.addEventListener("Monetize-Game-SDK-Ready", function (event) {
    new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
  });
});
