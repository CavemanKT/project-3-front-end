import React from 'react'
import PropTypes from 'prop-types'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import { getMyProfile } from '@/actions/my/profile'

import LayoutsNavbar from '@/layouts/Navbar'
import LayoutsFooter from '@/layouts/Footer'

import DevPrivateRoute from '@/components/DevPrivateRoute'
import TalentsPrivateRoute from '@/components/TalentsPrivateRoute'
import Loading from '@/components/Loading'

// main page & game list
import PagesHome from '@/pages/Home'
import PagesUserGameList from '@/pages/game-list'

// show page
import PagesShow from '@/pages/show-page/Show'

// publish page
import pageDevPublish from '@/pages/form-page/dev/publish'

import pageDevEditPublish from '@/pages/form-page/dev/edit-publish'

// profile page
import pageDevProfile from '@/pages/form-page/dev/profile'
import pageTalentProfile from '@/pages/form-page/talents/profile'

import PagesNotFound from '@/pages/NotFound'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loaded: false
    }
  }

  componentDidMount() {
    this.props.getMyProfile().finally(() => {
      this.setState({ loaded: true })
    })
  }

  render() {
    const { loaded } = this.state

    return (
      <Router>
        <LayoutsNavbar />
        <div id="body-footer-container">
          {
          loaded ? (
            <Switch>
              {/* Shared Paths */}
              <Route exact path="/" component={PagesHome} />
              {/* Shared Paths */}
              <Route exact path="/games/:id" component={PagesShow} />
              {/* for now, it will just be Route, later change to GeneralRoute */}
              <Route exact path="/my/profile" component={pageDevProfile} />
              {/* <TalentsPrivateRoute exact path="/my/profile/talent" component={pageTalentProfile} /> */}
              {/* Talent Paths */}
              <TalentsPrivateRoute exact path="/my/applications" component={PagesUserGameList} />

              {/* Developer Paths */}
              <DevPrivateRoute exact path="/my/games" component={PagesUserGameList} />
              <DevPrivateRoute exact path="/my/games/new" component={pageDevPublish} />
              <DevPrivateRoute exact path="/my/games/:id/edit" component={pageDevEditPublish} />

              <Route component={PagesNotFound} />
            </Switch>
          ) : (
            <div className="my-3">
              <Loading />
            </div>
          )
        }
        </div>

        <LayoutsFooter />

        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Router>
    )
  }
}

App.propTypes = {
  getMyProfile: PropTypes.func.isRequired

}

const mapDispatchToProps = {
  getMyProfile

}

export default connect(null, mapDispatchToProps)(App)
