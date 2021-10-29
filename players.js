import Player from "./Player.js";

const player1 = new Player({
  player: 1,
  name: "Scorpion",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["кувалда", "топор", "пистолет"]
});

// console.log("player1", player1);
const player2 = new Player({
  player: 2,
  name: "Liu kang",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/liukang.gif",
  weapon: ["лед", "мечь", "пулемет"]
});

export { player1, player2 };
