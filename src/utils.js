import bot from "./bot";
import Game from "./Game";
import { playerChoose } from "./player";

const randomNumber = (min = 0, max = 1) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const checkWinCondition = () => {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winConditions.length; i++) {
    const currentCondition = winConditions[i];
    const a = currentCondition[0];
    const b = currentCondition[1];
    const c = currentCondition[2];

    if (
      Game.boardSquares[a] &&
      Game.boardSquares[a] === Game.boardSquares[b] &&
      Game.boardSquares[a] === Game.boardSquares[c]
    )
      return { win: true, user: Game.boardSquares[a] };
  }
};

const checkSquaresFilled = (finalSquareFiller) => {
  const anyEmpty = Game.boardSquares.some((square) => !square);

  const nextStarter = finalSquareFiller === "player" ? "enemy" : "player";

  if (!anyEmpty) {
    setTimeout(() => {
      Game.resetBoard();
      Game.turn = nextStarter;
      nextStarter === "player"
        ? playerChoose()
        : nextStarter === "enemy" && bot.botChoose();
    }, 1000);
  } else {
    return false;
  }
};

export { randomNumber, checkWinCondition, checkSquaresFilled };
