function laodSquares() {
  const board = document.getElementById("board");

  for (let i = 0; i < 9; i++) {
    const square = document.createElement("button");

    square.className = `square square-${i + 1}`;

    square.addEventListener("click", function () {
      this.innerText = i + 1;
    });

    board.appendChild(square);
  }
}

export { laodSquares };
