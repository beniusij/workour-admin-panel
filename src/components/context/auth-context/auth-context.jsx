import React from 'react'
import { getCurrentUser } from "lib/user-service"
import { withRouter } from "react-router-dom"
import PropTypes from 'prop-types'

/**
 * AuthContext holds state information about user
 * and it's status (logged in or not)
 *
 * @type {React.Context<any>}
 */
export const AuthContext = React.createContext()

/**
 * AuthConsumer for those consuming the context
 */
export const AuthConsumer = AuthContext.Consumer

const LOGIN_ROUTE = "/login"
const HOME_ROUTE = "/"
const defaultUser = { isAuth: false }
const defaultError = "Error occurred. Please, contact site admin."

const redirect = (history, path) => {
  if (history) {
    console.info(`Redirecting to ${path}`)
    history.push(path)
  }
}

/**
 * AuthProvider sets up the context with right state
 * and hooks for mutating the state
 *
 * @param props
 * @returns {*}
 */
export class Auth extends React.Component {
  constructor(props) {
    super(props)
    const history = this.props.history

    // This is called on login-page form submit
    const authenticate = async (event) => {
      event.preventDefault()

      this.setState({ loading: true })

      const loginForm = {
        email: document.getElementsByName('Email')[0].value,
        password: document.getElementsByName('Password')[0].value
      }

      await fetch(`${process.env.REACT_APP_API_URL}/login`, {
        method: 'POST',
        body: JSON.stringify(loginForm),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include',
      }).then((response) => {
        if (response.status !== 200) {
          response.json().then((result) => {
            if (result.error) {
              this.setState({error: result.error})
            } else {
              this.setState({error: defaultError})
            }
          })
        } else {
          getCurrentUser().then((data) => {
            if (data !== null) {
              data.isAuth = true
              this.setState({user: data})
              redirect(history, HOME_ROUTE)
            }
          })
        }
      }).catch((error) => {
        console.error(error.error)
        this.setState({ error: defaultError })
      })

      this.setState({
        loading: false,
        error: ""
      })
    }

    /**
     * Callback for logging user out
     *
     * @returns {Promise<void>}
     */
    const logout = async () => {
      await fetch(`${this.props.endpoint}/logout`, {
        method: 'POST',
        credentials: 'include'
      }).catch((error) => {
        console.error(error)
      })

      this.setState({ user: { isAuth: false }})

      redirect(history, LOGIN_ROUTE)
    }

    this.state = {
      user: defaultUser,
      error: "",
      loading: false,
      authenticate: authenticate,
      logout: logout
    }
  }

  render() {
    const user = this.state.user
    const loading = this.state.loading
    const error = this.state.error
    const logout = this.state.logout
    const authenticate = this.state.authenticate

    return (
      <AuthContext.Provider value={({ user, logout, authenticate, loading, error })}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }

  /**
   * This runs after component has rendered
   */
  componentDidMount() {
    getCurrentUser().then((data) => {
      if (typeof data.error !== 'undefined') {
        data.isAuth = false
      } else if(typeof data.isAuth === 'undefined') {
        data.isAuth = true
      }

      // Update current user state since this can't be done in class
      // constructor otherwise other components expecting user.isAuth
      // will fail horrendously
      if (this.state.user.isAuth !== data.isAuth) {
        this.setState({ user: data})

        if (this.state.user.isAuth) {
          let path = window.location.pathname

          if (path === LOGIN_ROUTE) {
            this.props.history.push(HOME_ROUTE)
          } else {
            this.props.history.push(path)
          }
        } else {
          this.props.history.push(LOGIN_ROUTE)
        }
      }
    })
  }
}

Auth.propTypes = {
  history: PropTypes.object,
  endpoint: PropTypes.string,
  children: PropTypes.any
}

Auth.defaultTypes = {
  history: {},
  endpoint: '',
  children: ''
}

export const AuthProvider = withRouter(Auth)