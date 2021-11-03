import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import ReducersDevUser from '@/reducers/dev-user'
import ReducersTalentUser from '@/reducers/talent-user'

const createReducersRoot = (history) => combineReducers({
  devCurrentUser: ReducersDevUser,
  talentCurrentUser: ReducersTalentUser,
  router: connectRouter(history)
})

export default createReducersRoot
