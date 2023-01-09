const Game = {
  boardSquares: Array(9).fill(null),
  xPoints: 0,
  oPoints: 0,
  player: {
    mark: null,
    isPending: null,
  },
  enemy: {
    mark: null,
    isPending: null,
  },
  turn: null,
  fillSquare(mark, index) {
    if (
      (mark.toLowerCase() === "o" || mark.toLowerCase() === "x") &&
      index >= 0 &&
      index < 9
    )
      this.boardSquares[index] = mark;
  },
  addPoint(mark) {
    const xPoints = document.getElementById("x-point"),
      oPoints = document.getElementById("o-point");

    switch (mark.toLowerCase()) {
      case "x": {
        this.xPoints++;
        xPoints.innerText = this.xPoints;
        break;
      }
      case "o": {
        this.oPoints++;
        oPoints.innerText = this.oPoints;
        break;
      }
      default:
        console.error("Mark is not defined");
    }
  },
  endRound() {
    const squares = document.querySelectorAll(".square");

    squares.forEach((square) => (square.innerHTML = ""));

    this.boardSquares = Array(9).fill(null);
  },
};

export default Game;
