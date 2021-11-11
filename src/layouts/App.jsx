import React from 'react'
import PropTypes from 'prop-types'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import { getMyProfile } from '@/actions/my/profile'

import LayoutsNavbar1 from '@/layouts/Navbar'
import LayoutsFooter from '@/layouts/Footer'

import DevPrivateRoute from '@/components/DevPrivateRoute'
import TalentsPrivateRoute from '@/components/TalentsPrivateRoute'
import PrivateRoute from '@/components/PrivateRoute'
import Loading from '@/components/Loading'

import PagesHome from '@/pages/Home'
import PagesShow from '@/pages/show-page/Show'

import PagesMyProfile from '@/pages/form-page/profile'

import PagesUserGameList from '@/pages/game-list'
import pageDevPublish from '@/pages/form-page/dev/publish'
import pageDevEditPublish from '@/pages/form-page/dev/edit-publish'

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
        <LayoutsNavbar1 />
        <div id="body-footer-container">
          {
          loaded ? (
            <Switch>
              {/* Shared Paths */}
              <Route exact path="/" component={PagesHome} />

              {/* Shared Paths */}
              <Route exact path="/games/:id" component={PagesShow} />

              {/* for now, it will just be Route, later change to GeneralRoute */}
              <PrivateRoute exact path="/my/profile" component={PagesMyProfile} />

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
