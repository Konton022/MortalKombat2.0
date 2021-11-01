import Game from "./Game.js";
import FetchData from "./FetchData.js";
const fetchData = new FetchData();
const game = new Game();
const $formFight = document.querySelector(".control");

game.start();

$formFight.addEventListener("submit", async function (event) {
  event.preventDefault();
  const { player1: player, player2: enemy } = await fetchData.postFight(
    game.getAttack()
  );
  game.setFightResult(player, enemy);
  game.showResults();
});
