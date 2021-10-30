import Player from "./Player.js";
import FetchData from "./FetchData.js";

const fetchData = new FetchData();

let p1 = JSON.parse(localStorage.getItem("player1"));
let p2 = await fetchData.getEnemyPlayer();

const player1 = new Player({
  ...p1,
  player: 1,
  rootSelector: "arenas",
});

const player2 = new Player({
  ...p2,
  player: 2,
  rootSelector: "arenas",
});

export { player1, player2 };
