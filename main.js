import { player1, player2 } from "./players.js";
import Game from "./Game.js";

const game = new Game();
const $formFight = document.querySelector(".control");

game.start();
game.createPlayer(player1);
game.createPlayer(player2);
game.generateLogs("start", player1, player2);

$formFight.addEventListener("submit", function (event) {
  event.preventDefault();
  const enemy = game.enemyAttack();
  const player = game.playerAttack();
  game.setFightResult(player, enemy);
  game.showResults();
});
