import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

import LayoutsNavbar from '@/layouts/Navbar'
import PagesHome from '@/pages/Home'
import PagesAuthSignup from '@/pages/auth/Signup'
import PagesAuthLogin from '@/pages/auth/Login'
import PagesNotFound from '@/pages/NotFound'

const App = () => (
  <Router>
    <LayoutsNavbar />
    <Switch>
      <Route exact path="/" component={PagesHome} />

      <Route exact path="/auth/signup" component={PagesAuthSignup} />
      <Route exact path="/auth/login" component={PagesAuthLogin} />

      <Route component={PagesNotFound} />
    </Switch>
  </Router>
)

export default App
