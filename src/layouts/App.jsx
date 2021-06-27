import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import { hot } from 'react-hot-loader'

import PagesHome from '@/pages/Home'
import PagesAnother from '@/pages/Another'
import PagesNotFound from '@/pages/NotFound'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={PagesHome} />
      <Route exact path="/another" component={PagesAnother} />
      <Route component={PagesNotFound} />
    </Switch>
  </Router>
)

export default hot(module)(App)
