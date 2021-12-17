import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { authLogout, authLogin, authSignup } from '@/actions/auth'
import ModalsSignup from '@/modals/auth/Signup'
import ModalsLogin from '@/modals/auth/Login'

const pages = ['Products', 'Pricing', 'Blog']
const settings = ['Profile', 'Account', 'My games', 'Logout']

class LayoutsNavbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      anchorElNav: null,
      anchorElUser: null
    }

    this.openModalsSignup = this.openModalsSignup.bind(this)
    this.openModalsLogin = this.openModalsLogin.bind(this)
    this.closeModalsSignup = this.closeModalsSignup.bind(this)
    this.closeModalsLogin = this.closeModalsLogin.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
    this.handleSignupSubmit = this.handleSignupSubmit.bind(this)
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)

    this.handleOpenNavMenu = this.handleOpenNavMenu.bind(this)
    this.handleOpenUserMenu = this.handleOpenUserMenu.bind(this)
    this.handleCloseNavMenu = this.handleCloseNavMenu.bind(this)
    this.handleCloseUserMenu = this.handleCloseUserMenu.bind(this)
  }

  handleOpenNavMenu = (event) => {
    this.setState({ anchorElNav: event.currentTarget })
  }

  handleOpenUserMenu = (event) => {
    this.setState({ anchorElUser: event.currentTarget })
  }

  handleCloseNavMenu = () => {
    this.setState({ anchorElNav: null })
  }

  handleCloseUserMenu = () => {
    this.setState({ anchorElUser: null })
  }

  // authentication function
  handleLogoutClick() {
    this.props.authLogout()
  }

  handleSignupSubmit(values) {
    this.props.authSignup(values).then(() => {
      this.setState({ showModalsSignup: false })
      this.setState({ showModalsLogin: true })
    })
  }

  handleLoginSubmit(values) {
    this.props.authLogin(values).then(() => {
      this.setState({ showModalsLogin: false })

      const { history: { push } } = this.props
      push('/')
    })
  }

  openModalsSignup() {
    this.setState({ showModalsSignup: true })
  }

  openModalsLogin() {
    this.setState({ showModalsLogin: true })
  }

  closeModalsSignup() {
    this.setState({ showModalsSignup: false })
  }

  closeModalsLogin() {
    this.setState({ showModalsLogin: false })
  }

  render() {
    const { currentUserState: { currentUser } } = this.props
    const { showModalsSignup, showModalsLogin } = this.state
    console.log(currentUser)
    return (
      <>
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
              >
                Indie Zone
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={this.handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={this.state.anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left'
                  }}
                  open={Boolean(this.state.anchorElNav)}
                  onClose={this.handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' }
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={this.handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
              >
                Indie Zone
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={this.handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                {
              currentUser && (currentUser.type === 'Developer') && (
                <>
                  <Tooltip title="Open settings">
                    <IconButton onClick={this.handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt="Rounded Avatar" src="/static/images/avatar/2.jpg" />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={this.state.anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right'
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right'
                    }}
                    open={Boolean(this.state.anchorElUser)}
                    onClose={this.handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem key={setting} onClick={this.handleCloseNavMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </>
              )
            }

                {
                !currentUser && (
                  <>
                    <Button color="inherit" onClick={this.openModalsSignup}>Signup</Button>
                    <Button color="inherit" onClick={this.openModalsLogin}>Login</Button>
                  </>
                )
            }

              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        <div id="authModals" className="container">
          { showModalsSignup && <ModalsSignup close={this.closeModalsSignup} onSubmit={this.handleSignupSubmit} />}
          {/* remember to define the function in this page */}
          { showModalsLogin && <ModalsLogin close={this.closeModalsLogin} onSubmit={this.handleLoginSubmit} />}
        </div>
      </>
    )
  }
}

LayoutsNavbar.propTypes = {
  currentUserState: PropTypes.shape().isRequired,
  history: PropTypes.shape().isRequired,
  authLogout: PropTypes.func.isRequired,
  authSignup: PropTypes.func.isRequired,
  authLogin: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  currentUserState: state.currentUser

})

const mapDispatchToProps = {
  authLogout,
  authLogin,
  authSignup
}

const LayoutsNavbar1 = withRouter(LayoutsNavbar)
export default connect(mapStateToProps, mapDispatchToProps)(LayoutsNavbar1)
