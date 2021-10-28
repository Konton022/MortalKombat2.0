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
}

export default Player;
