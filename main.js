import Game from "./Game.js";

const game = new Game();
const $formFight = document.querySelector(".control");

game.start();

$formFight.addEventListener("submit", function (event) {
  event.preventDefault();
  const enemy = game.enemyAttack();
  const player = game.playerAttack();
  game.setFightResult(player, enemy);
  game.showResults();
});
