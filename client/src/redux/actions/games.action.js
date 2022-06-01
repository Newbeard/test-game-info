import { INIT_GAMES, INIT_PLATFORMS } from "../types";
import axios from "axios"

export const initGames = (data) => ({
 type: INIT_GAMES,
 payload: data
})

export const initPlatforms = (data) => ({
  type: INIT_PLATFORMS ,
  payload: data
 })
export const initGamesApi = (payload) => async (dispatch) => {
try {
  const {data} = await axios(`https://api.rawg.io/api/games?key=353d7becd6904257b1a0f28730760f83&page=${payload}&page_size=12`)
  data.results.count = data.count;
  dispatch(initGames(data.results))
  // const ddata = await axios(`https://api.rawg.io/api/games?key=353d7becd6904257b1a0f28730760f83&search='The Witcher'`)
  const platforms = await axios(`https://api.rawg.io/api/platforms/lists/parents?key=353d7becd6904257b1a0f28730760f83`)
  // console.log(platforms.data.results);
  dispatch(initPlatforms(platforms.data.results))
  
} catch (error) {
  console.log(error);
}

}
