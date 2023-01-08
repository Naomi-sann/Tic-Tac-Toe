import { laodSquares } from "./Squares";
import Game from "./Game";

const GameElements = `
<section id="points-section">
    <div class="x-points">
        <div class="x-icon"></div>
        <div class="seperator"></div>
        <span id="x-point">0</span>
    </div>
    <div class="o-points">
        <div class="o-icon small-icon"></div>
        <div class="seperator"></div>
        <span id="x-point">0</span>
    </div>
</section>
<section id="board">
</section>
<section id="handle-btns-section"></section>
`;

function loadBoard() {
  const gameContainer = document.getElementById("game-container");

  gameContainer.innerHTML = GameElements;
}

function App() {
  loadBoard();
  laodSquares();
}

export default App;
