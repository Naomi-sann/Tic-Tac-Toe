import Game from "./Game";
import { playerChoose } from "./player";
import { randomNumber, checkWinCondition } from "./utils";

const bot = {
  botName: null,
  delay: [300, 1300],
  botChoose() {
    if (Game.turn === "enemy") {
      Game.enemy.isPending = true;
      let emptySquares = [];

      Game.boardSquares.forEach(
        (square, index) => !square && emptySquares.push(index)
      );

      const botMark = Game.enemy.mark;

      const randomIndex = Math.floor(Math.random() * emptySquares.length);

      const squares = document.querySelectorAll(".square");

      setTimeout(() => {
        squares[
          emptySquares[randomIndex]
        ].innerHTML = `<div class="${botMark}-icon"></div>`;
        Game.fillSquare(botMark, emptySquares[randomIndex]);
        Game.enemy.isPending = false;
        Game.turn = "player";
        playerChoose();

        const isWin = checkWinCondition();

        if (isWin && isWin.win) {
          Game.endRound();
          Game.addPoint(isWin.user);
        }
      }, randomNumber(this.delay[0], this.delay[1]));
    }
  },
};

export default bot;
