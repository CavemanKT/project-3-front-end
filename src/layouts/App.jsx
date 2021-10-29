import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

import PagesHome from '@/pages/Home'
import PagesAnother from '@/pages/Another'
import PagesAuthSignup from '@/pages/auth/Signup'
import PagesAuthLogin from '@/pages/auth/Login'
import PagesNotFound from '@/pages/NotFound'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={PagesHome} />

      <Route exact path="/auth/signup" component={PagesAuthSignup} />
      <Route exact path="/auth/login" component={PagesAuthLogin} />

      <Route component={PagesNotFound} />
    </Switch>
  </Router>
)

export default App
