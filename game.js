import { createElement, getCurrentTime, getRandom } from "./utils.js";
import { logs, HIT, ATTACK } from "./constants.js";
import { player1, player2 } from "./players.js";

const $arenas = document.querySelector(".arenas");
const $chat = document.querySelector(".chat");
const $formFight = document.querySelector(".control");

class Game {

  start = () => {
    console.log("START GAME!!!");
    player1.createPlayer();
    player2.createPlayer();
    this.generateLogs('start', player1, player2)
  };



  winPlayer = ({ name }) => {
    const $winTitle = createElement("div", "loseTitle");
    if (name) {
      $winTitle.innerHTML = `${name} WINS`;
    } else {
      $winTitle.innerHTML = `DRAW`;
    }
    return $winTitle;
  };

  createReloadButton = () => {
    const $reloadWrap = createElement("div", "reloadWrap");
    const $reloadButton = createElement("button", "button");
    $reloadButton.innerHTML = `RESET`;
    $reloadButton.addEventListener("click", () => {
      window.location.reload();
    });
    $reloadWrap.appendChild($reloadButton);
    $arenas.appendChild($reloadWrap);
  };

  enemyAttack = () => {
    const hit = ATTACK[getRandom(3) - 1];
    const defence = ATTACK[getRandom(3) - 1];
    return {
      value: getRandom(HIT[hit]),
      hit,
      defence,
    };
  };

  playerAttack = () => {
    const attack = {};
    for (let item of $formFight) {
      if (item.checked && item.name === "hit") {
        attack.value = getRandom(HIT[item.value]);
        attack.hit = item.value;
      }
      if (item.checked && item.name === "defence") {
        attack.defence = item.value;
      }
      item.checked = false;
    }
    return attack;
  };

  generateLogs = (type, player1, player2, value) => {
    let text = "";
    let el = "";

    switch (type) {
      case "start":
        text = logs.start
          .replace("[time]", getCurrentTime())
          .replace("[player1]", player1.name)
          .replace("[player2]", player2.name);
        el = `<p>${text}</p>`;
        $chat.insertAdjacentHTML("afterbegin", el);
        break;
      case "hit":
        text = logs.hit[getRandom(logs.hit.length - 1)]
          .replace("[playerDefence]", player1.name)
          .replace("[playerKick]", player2.name);
        el = `<p>${getCurrentTime()} - ${text} -${value} [${player1.hp
          }/100]</p>`;
        $chat.insertAdjacentHTML("afterbegin", el);
        break;
      case "defence":
        text = logs.defence[getRandom(logs.defence.length - 1)]
          .replace("[playerDefence]", player1.name)
          .replace("[playerKick]", player2.name);
        el = `<p>${getCurrentTime()} - ${text}  [${player1.hp}/100]</p>`;
        $chat.insertAdjacentHTML("afterbegin", el);
        break;
      case "end":
        text = logs.end[getRandom(logs.end.length - 1)]
          .replace("[playerWins]", player1.name)
          .replace("[playerLose]", player2.name);
        el = `<p>${getCurrentTime()} - ${text}</p>`;
        $chat.insertAdjacentHTML("afterbegin", el);
        break;
      case "draw":
        text = logs.draw;
        el = `<p>${getCurrentTime()} - ${text}</p>`;
        $chat.insertAdjacentHTML("afterbegin", el);
        break;
    }
  };

  setFightResult = (player, enemy) => {
    if (player.hit !== enemy.defence) {
      player2.changeHP(player.value);
      player2.renderHP();
      this.generateLogs("hit", player2, player1, player.value);
    } else {
      this.generateLogs("defence", player2, player1);
    }
    if (enemy.hit !== player.defence) {
      player1.changeHP(enemy.value);
      player1.renderHP();
      this.generateLogs("hit", player1, player2, enemy.value);
    } else {
      this.generateLogs("defence", player1, player2);
    }
  };

  showResults = () => {
    if (player1.hp === 0 || player2.hp === 0) {
      $formFight.remove($formFight);
      // $fightButton.disabled = true;
      this.createReloadButton();
    }

    if (player1.hp <= 0 && player2.hp > 0) {
      $arenas.appendChild(this.winPlayer(player2));
      this.generateLogs("end", player2, player1);
    } else if (player2.hp <= 0 && player1.hp > 0) {
      $arenas.appendChild(this.winPlayer(player1));
      this.generateLogs("end", player1, player2);
    } else if (player1.hp <= 0 && player2.hp <= 0) {
      $arenas.appendChild(this.winPlayer());
      this.generateLogs("draw");
    }
  };
}

export default Game;
