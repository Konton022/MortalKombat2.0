import { createElement } from "./utils.js";
const $arenas = document.querySelector('.arenas')

class Player {
  constructor(props) {
    this.player = props.player;
    this.name = props.name;
    this.hp = props.hp;
    this.weapon = props.weapon;
    this.img = props.img;
  }
  changeHP(value) {
    this.hp -= value;
    if (this.hp <= 0) {
      this.hp = 0;
    }
    return this.hp;
  }
  elHP() {
    return document.querySelector(`.player${this.player} .life`);
  }
  renderHP() {
    const player = this.elHP();
    return (player.style.width = `${this.hp}%`);
  }
  attack() {
    console.log(`${this.name} Fight!!!`);
  }
  createPlayer() {
    const $player = createElement("div", `player${this.player}`);
    const $progressBar = createElement("div", "progressbar");
    const $life = createElement("div", "life");
    $life.style.width = `${this.hp}%`;
    const $name = createElement("div", "name");
    $name.innerHTML = `${this.name}`;
    const $character = createElement("div", "character");
    const $img = createElement("img", "img", `${this.img}`);
    $player.appendChild($progressBar);
    $player.appendChild($character);
    $progressBar.appendChild($life);
    $progressBar.appendChild($name);
    $character.appendChild($img);

    $arenas.appendChild($player);
  }
}

export default Player;
