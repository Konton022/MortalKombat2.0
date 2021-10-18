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

function changeHP(player) {
  const $playerLife = document.querySelector(`.player${player.player} .life`);
  player.hp -= getRandom(20);
  //   console.log(`player${player.player} ${player.hp}`);
  $playerLife.style.width = `${player.hp}%`;
  if (player.hp <= 0) {
    $playerLife.style.width = `0%`;
    $randomButton.disabled = true;
  }
}

function winPlayer(player) {
  const $winTitle = createElement("div", "loseTitle");
  $winTitle.innerHTML = `${player.name} WIN`;
  return $winTitle;
}
function drawPlayers() {
  const $winTitle = createElement("div", "loseTitle");
  $winTitle.innerHTML = `DRAW`;
  return $winTitle;
}
function getRandom(value) {
  return Math.ceil(Math.random() * value);
}

$randomButton.addEventListener("click", () => {
  //   console.log("click");
  changeHP(player1);
  changeHP(player2);
  if (player1.hp <= 0 && player2.hp > 0) {
    $arenas.appendChild(winPlayer(player2));
  } else if (player2.hp <= 0 && player1.hp > 0) {
    $arenas.appendChild(winPlayer(player1));
  } else if (player1.hp <= 0 && player2.hp <= 0) {
    // console.log("DRAW");
    $arenas.appendChild(drawPlayers());
  }
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
