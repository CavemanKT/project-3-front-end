import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

import LayoutsNavbar from '@/layouts/Navbar'

// main page
import PagesHome from '@/pages/Home'
import PagesDevGameList from '@/pages/game-list/dev/game-list'
import PagesTalentsGameList from '@/pages/game-list/talents/game-list'

// show page
import PagesPublicShow from '@/pages/show-page/public/Show'
import PagesDevShow from '@/pages/show-page/dev/Show'
import PagesTalentsShow from '@/pages/show-page/talents/Show'

import PagesNotFound from '@/pages/NotFound'

const App = () => (
  <Router>
    <LayoutsNavbar />
    <Switch>
      <Route exact path="/" component={PagesHome} />
      <Route exact path="/api/dev/games" component={PagesDevGameList} />
      <Route exact path="/api/talents/games" component={PagesTalentsGameList} />

      <Route exact path="/api/games/:id" component={PagesPublicShow} />
      <Route exact path="/api/dev/games/:id" component={PagesDevShow} />
      <Route exact path="/api/talents/games/:id" component={PagesTalentsShow} />

      <Route component={PagesNotFound} />
    </Switch>
  </Router>
)

export default App
