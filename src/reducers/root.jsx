import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import ReducersCurrentUser from '@/reducers/current-user'

const createReducersRoot = (history) => combineReducers({
  currentUser: ReducersCurrentUser,
  router: connectRouter(history)
})

export default createReducersRoot
