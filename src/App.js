import { laodSquares } from "./Squares";
import Game from "./Game";
import bot from "./bot";
import { playerChoose } from "./player";

const GameElements = `
<section id="points-section">
    <div class="x-points">
        <div class="x-icon"></div>
        <div class="seperator"></div>
        <span id="x-point">${Game.xPoints}</span>
    </div>
    <div class="o-points">
        <div class="o-icon small-icon"></div>
        <div class="seperator"></div>
        <span id="o-point">${Game.oPoints}</span>
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

  console.log(Game);

  if (Game.turn === "player") {
    playerChoose();
  } else if (Game.turn === "enemy") {
    bot.botChoose();
  }
}

export default App;
