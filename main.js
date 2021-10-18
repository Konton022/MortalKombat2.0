const $arenas = document.querySelector(".arenas");
const $randomButton = document.querySelector(".button");

const player1 = {
  player: 1,
  name: "Scorpion",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
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

function renderHP(elementHP) {
  elementHP.style.width = `${this.hp}%`;
}

function winPlayer(player) {
  const $winTitle = createElement("div", "loseTitle");
  if (player) {
    $winTitle.innerHTML = `${player.name} WINS`;
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
  return $reloadWrap;
}

$randomButton.addEventListener("click", () => {
  player1.changeHP(getRandom(20));
  player2.changeHP(getRandom(20));
  player1.renderHP(player1.elHP());
  player2.renderHP(player2.elHP());

  if (player1.hp === 0 || player2.hp === 0) {
    $randomButton.disabled = true;
    $arenas.appendChild(createReloadButton());
  }

  if (player1.hp <= 0 && player2.hp > 0) {
    $arenas.appendChild(winPlayer(player2));
  } else if (player2.hp <= 0 && player1.hp > 0) {
    $arenas.appendChild(winPlayer(player1));
  } else if (player1.hp <= 0 && player2.hp <= 0) {
    $arenas.appendChild(winPlayer());
  }
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
