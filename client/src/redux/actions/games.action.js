import { INIT_GAMES, INIT_PLATFORMS, INIT_GAMES_SEARCH, INIT_GAMES_REMOVE } from "../types";
import axios from "axios"

/* формирование стейта игр */
export const initGames = (data) => ({
 type: INIT_GAMES,
 payload: data
})

/* формирование стейта родительских платформ */
export const initPlatforms = (data) => ({
  type: INIT_PLATFORMS ,
  payload: data
 })

 /* удаление информации из стейта игры */
 export const removeGames = (data = []) => ({
  type: INIT_GAMES_REMOVE,
  payload: data
 })

 /* формирование стейта игры с учетом пользовательсого запроса */
 export const initGamesSearch = (data) => ({
  type: INIT_GAMES_SEARCH,
  payload: data
 })

 /* запрос к API для поиска игры по имени */
 export const searchInit = (payload) => async (dispatch) => {
  const { data } = await axios(`${process.env.REACT_APP_BASE_URL}&search=${payload}`)
  dispatch(initGamesSearch(data.results))
}

/* запрос к API получение  игр с учетом параметров селекторов, требуется оптимизация */
export const initGamesApi = (payload) => async (dispatch) => {
try {
  if(!payload.sortRating && !payload.sortData && !payload.platform){
    const {data} = await axios(`${process.env.REACT_APP_BASE_URL}&page=${payload.page}&page_size=12`)
    data.results.count = data.count;
    dispatch(initGames(data.results))
    const platforms = await axios(process.env.REACT_APP_URL_PLATFORMS)
    dispatch(initPlatforms(platforms.data.results))
  }
  else if (payload.sortRating && payload.sortData && payload.platform){
    const {data} = await axios(`${process.env.REACT_APP_BASE_URL}&page=${payload.page}&page_size=12&ordering=${payload.sortRating}&ordering=${payload.sortData}&parent_platforms=${payload.platform}`)
    data.results.count = data.count;
    dispatch(initGames(data.results))
  }
  else if(payload.sortRating && !payload.sortData && !payload.platform){
     const {data} = await axios(`${process.env.REACT_APP_BASE_URL}&page=${payload.page}&page_size=12&ordering=${payload.sortRating}`)
     data.results.count = data.count;
     dispatch(initGames(data.results))
  }
  else if(!payload.sortRating && payload.sortData && !payload.platform){
    const {data} = await axios(`${process.env.REACT_APP_BASE_URL}&page=${payload.page}&page_size=12&ordering=${payload.sortData}`)
    data.results.count = data.count;
    dispatch(initGames(data.results))
  }
  else if(!payload.sortRating && !payload.sortData && payload.platform){
    const {data} = await axios(`${process.env.REACT_APP_BASE_URL}&page=${payload.page}&page_size=12&parent_platforms=${payload.platform}`)
    data.results.count = data.count;
    dispatch(initGames(data.results))
  }
  else if(payload.sortRating && payload.sortData && !payload.platform){
    const {data} = await axios(`${process.env.REACT_APP_BASE_URL}&page=${payload.page}&page_size=12&ordering=${payload.sortRating}&ordering=${payload.sortData}`)
    data.results.count = data.count;
    dispatch(initGames(data.results))
  }
  else if(!payload.sortRating && payload.sortData && payload.platform){
    const {data} = await axios(`${process.env.REACT_APP_BASE_URL}&page=${payload.page}&page_size=12&ordering=${payload.sortData}&parent_platforms=${payload.platform}`)
    data.results.count = data.count;
    dispatch(initGames(data.results))
  }
  else if(payload.sortRating && !payload.sortData && payload.platform){
    const {data} = await axios(`${process.env.REACT_APP_BASE_URL}&page=${payload.page}&page_size=12&ordering=${payload.sortRating}&parent_platforms=${payload.platform}`)
    data.results.count = data.count;
    dispatch(initGames(data.results))
  }
} catch (error) {
  console.log(error);
}

}




