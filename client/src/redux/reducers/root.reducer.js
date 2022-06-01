import { combineReducers } from 'redux'
import {gamesReducer } from './games.reducer'
import {gameReducer } from './game.reducer'
import {platformsReducer } from './platforms.reducer'

export const rootReducer = combineReducers({
games: gamesReducer,
game: gameReducer,
platforms: platformsReducer,
})
