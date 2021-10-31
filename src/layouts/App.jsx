import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

import LayoutsNavbar from '@/layouts/Navbar'
import PagesHome from '@/pages/Home'
import PagesNotFound from '@/pages/NotFound'

const App = () => (
  <Router>
    <LayoutsNavbar />
    <Switch>
      <Route exact path="/" component={PagesHome} />

      <Route component={PagesNotFound} />
    </Switch>
  </Router>
)

export default App
