import { hot } from 'react-hot-loader/root'
import React from 'react'
import ReactDOM from 'react-dom'
import App from '@/layouts/App'

import '@/styles/index.scss'

const HotApp = hot(App)
ReactDOM.render(<HotApp />, document.getElementById('root'))
