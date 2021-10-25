export const player1 = {
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

export const player2 = {
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
