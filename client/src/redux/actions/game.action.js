import { INIT_GAME } from "../types";
import axios from "axios"

/* формирование стейта конкретной игры */
export const initGame = (data) => ({
 type: INIT_GAME,
 payload: data
})

/* запрос к API получение игры по ID, и получение скриншотов игры */
export const initGameApi = (payload) => async (dispatch) => {
try {
  const screenshots = axios(`https://api.rawg.io/api/games/${payload}/screenshots?key=${process.env.REACT_APP_KEY}`)
  const gameInfo = axios(`https://api.rawg.io/api/games/${payload}?key=${process.env.REACT_APP_KEY}`)
  const result = await Promise.all([gameInfo, screenshots])
  const data = result[0].data
  data.screenshotsUrl = result[1].data.results
  dispatch(initGame(data));
} catch (error) {
  console.log(error);
}

}
