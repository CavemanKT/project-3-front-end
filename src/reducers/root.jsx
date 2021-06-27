import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

const createReducersRoot = (history) => combineReducers({
  router: connectRouter(history)
})

export default createReducersRoot
