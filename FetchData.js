import { getRandom } from "./utils.js";

class FetchData {
  getPlayers = async () => {
    const resp = await fetch(
      "https://reactmarathon-api.herokuapp.com/api/mk/players"
    ).then((res) => res.json());
    return resp;
  };
  getPlayerOne = async () => {
    const p1Arr = await this.getPlayers();
    const p1 = await p1Arr[getRandom(p1Arr.length - 1)];
    return p1;
  };
  getEnemyPlayer = async () => {
    const resp = await fetch(
      "https://reactmarathon-api.herokuapp.com/api/mk/player/choose"
    ).then((res) => res.json());
    return resp;
  };
  postFight = async (hit, defence) => {
    const resp = await fetch(
      "http://reactmarathon-api.herokuapp.com/api/mk/player/fight",
      {
        method: "POST",
        body: JSON.stringify({ hit, defence }),
      }
    ).then((res) => res.json());
    return resp;
  };
}
export default FetchData;
