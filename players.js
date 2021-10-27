import Player from "./Player.js";

const player1 = new Player(
  1,
  "Scorpion",
  100,
  "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  ["кувалда", "топор", "пистолет"]
);

// console.log("player1", player1);
const player2 = new Player(
  2,
  "Liu kang",
  100,
  "http://reactmarathon-api.herokuapp.com/assets/liukang.gif",
  ["лед", "мечь", "пулемет"]
);
// console.log("player2", player2);

export { player1, player2 };
