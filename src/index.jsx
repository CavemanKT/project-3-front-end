import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import React from 'react'
import ReactDOM from 'react-dom'

import configureStore from '@/configure-store'
import App from '@/layouts/App'
import '@/styles/index.scss'

const history = createBrowserHistory()
const store = configureStore(history)

const render = () => {
  ReactDOM.render((
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>

    </AppContainer>
  ), document.getElementById('root'))
}

render()

if (module.hot) {
  module.hot.accept('@/layouts/App', () => {
    render(App)
  })
}
