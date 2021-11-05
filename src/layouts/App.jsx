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
import PagesDevGameList from '@/pages/game-list/dev/game-list'
import PagesTalentsGameList from '@/pages/game-list/talents/game-list'

// show page
import PagesPublicShow from '@/pages/show-page/public/Show'
import PagesDevShow from '@/pages/show-page/dev/Show'
import PagesTalentsShow from '@/pages/show-page/talents/Show'

// publish page
import pageDevPublish from '@/pages/form-page/dev/publish'

import pageDevEditPublish from '@/pages/form-page/dev/edit-publish'

// profile page
import pageDevProfile from '@/pages/form-page/dev/profile'

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
      console.log('getMyProfile---didMount')
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
              <Route exact path="/" component={PagesHome} />
              <Route exact path="/games/:id" component={PagesPublicShow} />

              <DevPrivateRoute exact path="/dev/games" component={PagesDevGameList} />


              
              <DevPrivateRoute exact path="/dev/games/:id/edit" component={pageDevEditPublish} />


              <DevPrivateRoute exact path="/dev/games/:id" component={PagesDevShow} />
              <DevPrivateRoute exact path="/dev/publish" component={pageDevPublish} />
              {/* <DevPrivateRoute exact path="/dev/edit" component={pageDevEdit} /> */}
              <DevPrivateRoute exact path="/dev/profile/edit" component={pageDevProfile} />

              <TalentsPrivateRoute exact path="/talents/games" component={PagesTalentsGameList} />
              <TalentsPrivateRoute exact path="/talents/games/:id" component={PagesTalentsShow} />
              {/* <PrivateRoute exact path="/showpages/dev/game/:id/edit" component={PagesDevShowEdit} /> */}

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
