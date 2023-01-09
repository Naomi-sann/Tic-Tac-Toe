import "./styles/main.scss";
import App from "./App";
import Game from "./Game";

const setMarkSelector = (dir) => {
  const markSelector = document.querySelector(".mark-selector");

  switch (dir) {
    case "left":
      markSelector.style.left = "7.5px";
      break;
    case "right":
      markSelector.style.left = "calc(100% - 50% - 7.5px)";

      break;
    default:
      console.error("mark selector dir isnt valid!");
  }

  setTimeout(() => {
    markSelector.classList.add("active");
  }, 50);
};

let playerMark = null;

const xMark = document.getElementById("x-mark");
const oMark = document.getElementById("o-mark");
const startGameButton = document.getElementById("start-game-btn");

xMark.addEventListener("click", () => {
  if (playerMark !== "x") {
    playerMark = "x";
    setMarkSelector("left");
  }
});

oMark.addEventListener("click", () => {
  if (playerMark !== "o") {
    playerMark = "o";
    setMarkSelector("right");
  }
});

startGameButton.addEventListener("click", () => {
  if (playerMark) {
    Game.player.mark = playerMark;

    if (playerMark === "x") {
      Game.enemy.mark = "o";
      Game.turn = "player";
    }
    if (playerMark === "o") {
      Game.enemy.mark = "x";
      Game.turn = "enemy";
    }

    App();
  }
});
