const $arenas = document.querySelector(".arenas");
const $fightButton = document.querySelector(".button");
const $formFight = document.querySelector(".control");

const HIT = {
  head: 30,
  body: 25,
  foot: 20,
};
const ATTACK = ["head", "body", "foot"];

const player1 = {
  player: 1,
  name: "Scorpion",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  // imgWin: "https://reactmarathon-api.herokuapp.com/assets/scorpion-win.gif",
  weapon: ["кувалда", "топор", "пистолет"],
  attack: function () {
    console.log(`${this.name} Fight!!!`);
  },
  changeHP,
  elHP,
  renderHP,
};

const player2 = {
  player: 2,
  name: "Liu kang",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/liukang.gif",
  // imgWin:
  // "https://bestanimations.com/Games/Computer/MortalCombat/LiuKang/mortalkombatanimation-17.gif",
  weapon: ["лед", "мечь", "пулемет"],
  attack: function () {
    console.log(`${this.name} Fight!!!`);
  },
  changeHP,
  elHP,
  renderHP,
};

function createElement(tag, tagClass, img) {
  const elem = document.createElement(tag);
  elem.classList.add(tagClass ? tagClass : null);
  if (tag == "img") {
    elem.src = img;
  }
  return elem;
}

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

  return $player;
}

function changeHP(value) {
  this.hp -= value;
  if (this.hp <= 0) {
    this.hp = 0;
  }
  return this.hp;
}

function elHP() {
  return document.querySelector(`.player${this.player} .life`);
}

function renderHP() {
  const player = this.elHP();

  return (player.style.width = `${this.hp}%`);
}

function winPlayer(player) {
  const $winTitle = createElement("div", "loseTitle");
  // const $playerImg = document.querySelector(`.player${player.player} img`);
  if (player) {
    $winTitle.innerHTML = `${player.name} WINS`;
    // $playerImg.src = player.imgWin;
  } else {
    $winTitle.innerHTML = `DRAW`;
  }
  return $winTitle;
}

function getRandom(value) {
  return Math.ceil(Math.random() * value);
}
function createReloadButton() {
  const $reloadWrap = createElement("div", "reloadWrap");
  const $reloadButton = createElement("button", "button");
  $reloadButton.innerHTML = `RESET`;
  $reloadButton.addEventListener("click", () => {
    window.location.reload();
  });
  $reloadWrap.appendChild($reloadButton);
  $arenas.appendChild($reloadWrap);
}

function enemyAttack() {
  const hit = ATTACK[getRandom(3) - 1];
  const defence = ATTACK[getRandom(3) - 1];
  // console.log(" enemy ##hit ", hit, " #defence ", defence);
  return {
    value: getRandom(HIT[hit]),
    hit,
    defence,
  };
}

function playerAttack() {
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
}

function setFightResult(player, enemy, playerDefence) {
  if (player.hit !== enemy.defence) {
    playerDefence.changeHP(player.value);
    playerDefence.renderHP();
  }
}

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

$formFight.addEventListener("submit", function (event) {
  event.preventDefault();
  const enemy = enemyAttack();
  // console.log("enemyObj ", enemy, player2.hp);
  const player = playerAttack();
  // console.log("playerObj", player, player1.hp);

  setFightResult(player, enemy, player2);
  setFightResult(enemy, player, player1);

  if (player1.hp === 0 || player2.hp === 0) {
    $formFight.remove($formFight);
    // $fightButton.disabled = true;
    createReloadButton();
  }

  if (player1.hp <= 0 && player2.hp > 0) {
    $arenas.appendChild(winPlayer(player2));
  } else if (player2.hp <= 0 && player1.hp > 0) {
    $arenas.appendChild(winPlayer(player1));
  } else if (player1.hp <= 0 && player2.hp <= 0) {
    $arenas.appendChild(winPlayer());
  }
});
