const Game = {
  xPoints: 0,
  oPoints: 0,
  boardSquares: Array(9).fill(null),
  fillSquare(mark, index) {
    if (
      (mark.toLowerCase() === "o" || mark.toLowerCase() === "x") &&
      index >= 0 &&
      index < 8
    )
      this.boardSquares[index] = mark;
  },
  addPoint(mark) {
    switch (mark.toLowerCase()) {
      case "x": {
        this.xPoints++;
        break;
      }
      case "o": {
        this.oPoints++;
        break;
      }
      default:
        console.error("Mark is not defined");
    }
  },
};

export default Game;
