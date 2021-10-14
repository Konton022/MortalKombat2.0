const player1 = {
  name: "Scorpion",
  hp: 100,
  img: "",
  weapon: ["кувалда", "топор", "пистолет"],
  attack: function () {
    console.log(`${this.name} Fight!!!`);
  },
};

const player2 = {
  name: "Sub-Zero",
  hp: 100,
  img: "",
  weapon: ["лед", "мечь", "пулемет"],
  attack: function () {
    console.log(`${this.name} Fight!!!`);
  },
};

player1.attack();
player2.attack();
