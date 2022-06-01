import { INIT_PLATFORMS } from "../types";

export function platformsReducer(state = {}, action) {
  const { type, payload } = action

  switch (type) {
    
    case INIT_PLATFORMS: {
      return payload.map((el) => {return { value:el.id, label: el.name}})
    }

    default:
      return state
  }
}
