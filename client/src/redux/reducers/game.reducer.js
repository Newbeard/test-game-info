import { INIT_GAME } from "../types";

export function gameReducer(state = {}, action) {
  const { type, payload } = action

  switch (type) {
    
    case INIT_GAME: {
      return payload
    }

    default:
      return state
  }
}
