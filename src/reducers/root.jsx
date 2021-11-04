import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import ReducersCurrentUser from '@/reducers/current-user'
import ReducersGames from '@/reducers/public-game'

const createReducersRoot = (history) => combineReducers({
  currentUser: ReducersCurrentUser,
  games: ReducersGames,
  router: connectRouter(history)
})

export default createReducersRoot
