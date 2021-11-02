import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

import LayoutsNavbar from '@/layouts/Navbar'
import LayoutsFooter from '@/layouts/Footer'

import PagesHome from '@/pages/Home'
import PagesDevGameList from '@/pages/game-list/dev/game-list'
import PagesTalentsGameList from '@/pages/game-list/talents/game-list'

// show page
import PagesPublicShow from '@/pages/show-page/public/Show'
import PagesDevShow from '@/pages/show-page/dev/Show'
import PagesTalentsShow from '@/pages/show-page/talents/Show'

// publish page
import pageDevPublish from '@/pages/form-page/dev/publish'

// profile page

import PagesNotFound from '@/pages/NotFound'

const App = () => (
  <Router>
    <LayoutsNavbar />

    <Switch>
      <Route exact path="/" component={PagesHome} />
      <Route exact path="/api/dev/games" component={PagesDevGameList} />
      <Route exact path="/api/talent/games" component={PagesTalentsGameList} />

      <Route exact path="/api/games/:id" component={PagesPublicShow} />
      <Route exact path="/api/dev/games/:id" component={PagesDevShow} />
      <Route exact path="/api/talent/games/:id" component={PagesTalentsShow} />
      {/* <Route exact path="/showpages/dev/game/:id/edit" component={PagesDevShowEdit} /> */}

      <Route exact path="/api/dev/publish" component={pageDevPublish} />

      <Route component={PagesNotFound} />
    </Switch>

    <LayoutsFooter />
  </Router>
)

export default App
