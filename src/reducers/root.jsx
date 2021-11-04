import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import ReducersCurrentUser from '@/reducers/current-user'
import ReducersProfile from '@/reducers/dev-profile'

const createReducersRoot = (history) => combineReducers({
  profile: ReducersProfile,
  currentUser: ReducersCurrentUser,
  router: connectRouter(history)
})

export default createReducersRoot
