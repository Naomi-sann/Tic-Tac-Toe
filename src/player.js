import Game from "./Game";
import bot from "./bot";
import { checkSquaresFilled, checkWinCondition } from "./utils";

function playerChoose() {
  const squares = document.querySelectorAll(".square");

  Game.player.isPending = true;
  squares.forEach((square, index) => {
    square.addEventListener("click", () => {
      if (Game.turn === "player" && !Game.boardSquares[index]) {
        square.innerHTML = `<div class="${Game.player.mark}-icon"></div>`;
        Game.fillSquare(Game.player.mark, index);
        Game.player.isPending = false;
        Game.turn = null;
        const isWin = checkWinCondition();

        if (isWin && isWin.win) {
          Game.addPoint(isWin.user);
          setTimeout(() => {
            Game.endRound("player");
          }, 1000);
        } else {
          if (!checkSquaresFilled("player")) {
            Game.turn = "enemy";
            bot.botChoose();
          }
        }
      }
    });
  });
}

export { playerChoose };
