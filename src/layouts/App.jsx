import React from 'react'
import PropTypes from 'prop-types'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import { getDevProfile, getTalentProfile } from '@/actions/my/profile'

import LayoutsNavbar from '@/layouts/Navbar'
import DevPrivateRoute from '@/components/DevPrivateRoute'
import TalentsPrivateRoute from '@/components/TalentsPrivateRoute'
import Loading from '@/components/Loading'

// main page
import PagesHome from '@/pages/Home'
import PagesDevGameList from '@/pages/game-list/dev/game-list'
import PagesTalentsGameList from '@/pages/game-list/talents/game-list'

// show page
import PagesPublicShow from '@/pages/show-page/public/Show'
import PagesDevShow from '@/pages/show-page/dev/Show'
import PagesTalentsShow from '@/pages/show-page/talents/Show'

// publish page

// profile page

import PagesNotFound from '@/pages/NotFound'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loaded: false
    }
  }

  componentDidMount() {
    this.props.getDevProfile().finally(() => {
      console.log('getDevProfile---didMount')
      this.setState({ loaded: true })
    })
    this.props.getTalentProfile().finally(() => {
      console.log('getTalentProfile---didMount')
      this.setState({ loaded: true })
    })
  }

  render() {
    const { loaded } = this.state

    return (
      <Router>
        <LayoutsNavbar />

        {
          loaded ? (
            <Switch>
              <Route exact path="/" component={PagesHome} />
              <Route exact path="/api/games/:id" component={PagesPublicShow} />

              <DevPrivateRoute exact path="/api/dev/games" component={PagesDevGameList} />
              <TalentsPrivateRoute exact path="/api/talents/games" component={PagesTalentsGameList} />

              <DevPrivateRoute exact path="/api/dev/games/:id" component={PagesDevShow} />
              <TalentsPrivateRoute exact path="/api/talents/games/:id" component={PagesTalentsShow} />
              {/* <PrivateRoute exact path="/showpages/dev/game/:id/edit" component={PagesDevShowEdit} /> */}

              <Route component={PagesNotFound} />
            </Switch>

          ) : (
            <div className="my-3">
              <Loading />
            </div>
          )
        }

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
  getDevProfile: PropTypes.func.isRequired,
  getTalentProfile: PropTypes.func.isRequired

}

const mapDispatchToProps = {
  getDevProfile,
  getTalentProfile

}

export default connect(null, mapDispatchToProps)(App)
