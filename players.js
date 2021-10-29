import Player from "./Player.js";
import FetchData from "./FetchData.js";

const fetchData = new FetchData();

let p1 = await fetchData.getPlayerOne();
let p2 = await fetchData.getEnemyPlayer();

const player1 = new Player({
  ...p1,
  player: 1,
  rootSelector: "arenas",
});

// console.log("player1", player1);
const player2 = new Player({
  ...p2,
  player: 2,
  rootSelector: "arenas",
});

console.log("player1", player1);
console.log("player2", player2);

export { player1, player2 };
