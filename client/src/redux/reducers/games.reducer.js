import { INIT_GAMES } from "../types";

export function gamesReducer(state = [], action) {
  const { type, payload } = action

  switch (type) {
    case INIT_GAMES: {
      return [ ...state, ...payload]
    }

    default:
      return state
  }
}
