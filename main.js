import Game from "./Game.js";
import FetchData from "./FetchData.js";
const fetchData = new FetchData();
const game = new Game();
const $formFight = document.querySelector(".control");

// const players = await fetchData.getPlayers();
// const enemyPlayer = await fetchData.getEnemyPlayer();
// const hitDefence = await fetchData.postFight("foot", "head");
// console.log("hitDefence", hitDefence);
// console.log("players main ", players);
// console.log("enemy main", enemyPlayer);
game.start();

$formFight.addEventListener("submit", function (event) {
  event.preventDefault();
  const enemy = game.enemyAttack();
  const player = game.playerAttack();
  game.setFightResult(player, enemy);
  game.showResults();
});
