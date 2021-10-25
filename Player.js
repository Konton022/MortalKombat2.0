class Player {
  constructor(player, name, hp, img, weapon) {
    this.player = player;
    this.name = name;
    this.hp = hp;
    this.weapon = weapon;
    this.img = img;
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
}

export default Player;
