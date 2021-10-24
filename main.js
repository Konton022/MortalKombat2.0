const $arenas = document.querySelector(".arenas");
const $fightButton = document.querySelector(".button");
const $formFight = document.querySelector(".control");
const $chat = document.querySelector(".chat");

const logs = {
  start:
    "Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.",
  end: [
    "Результат удара [playerWins]: [playerLose] - труп",
    "[playerLose] погиб от удара бойца [playerWins]",
    "Результат боя: [playerLose] - жертва, [playerWins] - убийца",
  ],
  hit: [
    "[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.",
    "[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.",
    "[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.",
    "[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.",
    "[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.",
    "[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.",
    "[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.",
    "[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.",
    "[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.",
    "[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.",
    "[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.",
    "[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.",
    "[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.",
    "[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.",
    "[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.",
    "[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.",
    "[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.",
    "[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.",
  ],
  defence: [
    "[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.",
    "[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.",
    "[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.",
    "[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.",
    "[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.",
    "[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.",
    "[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.",
    "[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.",
  ],
  draw: "Ничья - это тоже победа!",
};

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

function setFightResult(player, enemy) {
  if (player.hit !== enemy.defence) {
    player2.changeHP(player.value);
    player2.renderHP();
    generateLogs("hit", player2, player1, player.value);
  } else {
    generateLogs("defence", player2, player1);
  }
  if (enemy.hit !== player.defence) {
    player1.changeHP(enemy.value);
    player1.renderHP();
    generateLogs("hit", player1, player2, enemy.value);
  } else {
    generateLogs("defence", player1, player2);
  }
}

function showResults() {
  if (player1.hp === 0 || player2.hp === 0) {
    $formFight.remove($formFight);
    // $fightButton.disabled = true;
    createReloadButton();
  }

  if (player1.hp <= 0 && player2.hp > 0) {
    $arenas.appendChild(winPlayer(player2));
    generateLogs("end", player2, player1);
  } else if (player2.hp <= 0 && player1.hp > 0) {
    $arenas.appendChild(winPlayer(player1));
    generateLogs("end", player1, player2);
  } else if (player1.hp <= 0 && player2.hp <= 0) {
    $arenas.appendChild(winPlayer());
    generateLogs("draw");
  }
}

function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours() >= 10 ? now.getHours() : `0${now.getHours()}`;
  const minutes =
    now.getMinutes() >= 10 ? now.getMinutes() : `0${now.getMinutes()}`;
  const seconds =
    now.getSeconds() >= 10 ? now.getSeconds() : `0${now.getSeconds()}`;

  const currentTime = `${hours}:${minutes}:${seconds}`;
  return currentTime;
}

function generateLogs(type, player1, player2, value) {
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
      el = `<p>${getCurrentTime()} - ${text} -${value} [${player1.hp}/100]</p>`;
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
}
$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
generateLogs("start", player1, player2);

$formFight.addEventListener("submit", function (event) {
  event.preventDefault();
  const enemy = enemyAttack();
  // console.log("enemyObj ", enemy, player2.hp);
  const player = playerAttack();
  // console.log("playerObj", player, player1.hp);

  setFightResult(player, enemy);

  showResults();
});
