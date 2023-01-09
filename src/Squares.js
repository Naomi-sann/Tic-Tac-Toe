import Game from "./Game";

function laodSquares() {
  const board = document.getElementById("board");
  let squares = [];

  for (let i = 0; i < 9; i++) {
    const square = document.createElement("button");

    square.className = `square square-${i + 1}`;

    const squareElement = board.appendChild(square);
    squares.push(squareElement);
  }

  return squares;
}

export { laodSquares };
