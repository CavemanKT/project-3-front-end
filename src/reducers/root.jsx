import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import ReducersCurrentUser from '@/reducers/current-user'

import ReducersGames from '@/reducers/public-games'
import ReducersGame from '@/reducers/public-game'
import ReducersDevGames from '@/reducers/dev-games'
import ReducersDevGame from '@/reducers/dev-game'
import ReducersTalentApplications from '@/reducers/talent-applications'
import ReducersTalentApplication from '@/reducers/talent-application'

const createReducersRoot = (history) => combineReducers({
  currentUser: ReducersCurrentUser,
  games: ReducersGames,
  game: ReducersGame,
  devGames: ReducersDevGames,
  devGame: ReducersDevGame,
  applications: ReducersTalentApplications,
  application: ReducersTalentApplication,
  router: connectRouter(history)
})

export default createReducersRoot
