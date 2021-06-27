import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import createReducersRoot from '@/reducers/root'

const configureStore = (history, preloadedState) => {
  const middlewares = [thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)

  const store = createStore(createReducersRoot(history), preloadedState, composedEnhancers)

  if (module.hot) {
    module.hot.accept('@/reducers/root', () => store.replaceReducer(createReducersRoot(history)))
  }

  return store
}

export default configureStore
