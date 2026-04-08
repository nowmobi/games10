import Preload from "./assets/scripts/scene/GamePreload.js";
import GameMenu from "./assets/scripts/scene/GameMenu.js";
import GamePlay from "./assets/scripts/scene/GamePlay.js";
import GameOver from "./assets/scripts/scene/GameOver.js";


let game;
window.onload = function () {
  let config = {
    type: Phaser.AUTO,
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
      parent: "game",
      width: 720,
      height: 1280,
    },
    backgroundColor: "#000000",
    fps: {
      target: 60,
      ForceSetTimeOut: true,
    },
    // transparent: true,
    scene: [Preload, GameMenu, GamePlay, GameOver],
  };
  game = new Phaser.Game(config);
};
