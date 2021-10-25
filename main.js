import { player1, player2 } from "./players.js";
import { createElement } from "./utils.js";
import {
  playerAttack,
  enemyAttack,
  generateLogs,
  setFightResult,
  showResults,
} from "./game.js";

const $arenas = document.querySelector(".arenas");
const $formFight = document.querySelector(".control");

function createPlayer({ name, player, hp, img }) {
  const $player = createElement("div", `player${player}`);
  const $progressBar = createElement("div", "progressbar");
  const $life = createElement("div", "life");
  $life.style.width = `${hp}%`;
  const $name = createElement("div", "name");
  $name.innerHTML = `${name}`;
  const $character = createElement("div", "character");
  const $img = createElement("img", "img", `${img}`);
  $player.appendChild($progressBar);
  $player.appendChild($character);
  $progressBar.appendChild($life);
  $progressBar.appendChild($name);
  $character.appendChild($img);

  $arenas.appendChild($player);
}

createPlayer(player1);
createPlayer(player2);
generateLogs("start", player1, player2);

$formFight.addEventListener("submit", function (event) {
  event.preventDefault();
  const enemy = enemyAttack();
  const player = playerAttack();
  setFightResult(player, enemy);
  showResults();
});
