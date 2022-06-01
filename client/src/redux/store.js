import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from './reducers/root.reducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  games: [],  
  game: {},
  platforms: [],
}

export const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)))
