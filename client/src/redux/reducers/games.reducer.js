import { INIT_GAMES, INIT_GAMES_SEARCH, INIT_GAMES_REMOVE} from "../types";

export function gamesReducer(state = [], action) {
  const { type, payload } = action

  switch (type) {

    case INIT_GAMES: {
      const results = payload.map((el) => {return { 
        id:el.id, 
        name: el.name, 
        releaced: el.released, 
        rating: el.rating,  
        background_image: el.background_image,
      }})
      return [ ...state, ...results]
    }

    case INIT_GAMES_SEARCH:{
      const results = payload.map((el) => {return { 
        id:el.id, 
        name: el.name, 
        releaced: el.released, 
        rating: el.rating,  
        background_image: el.background_image,
      }})
      return results
    }

    case INIT_GAMES_REMOVE:{
      return payload
    }
    
    default:
      return state
  }
}
