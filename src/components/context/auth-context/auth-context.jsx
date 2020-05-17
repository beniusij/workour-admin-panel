import React from 'react'
import { getCurrentUser } from "@bit/beniusij.ourworkout.user-service"
import isEmpty from "@bit/beniusij.ourworkout.helpers"
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

const defaultUser = { isAuth: false }
const defaultError = "Error occurred. Please, contact site admin."

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

    const redirect = (path) => {
      console.log(`Redirecting to ${path}`)
      if (history) history.push(path)
    }

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
            if (!isEmpty(result.error)) {
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
            }
          })
          redirect("/")
        }
      }).catch((error) => {
        console.error(error)
        this.setState({ error: defaultError })
      })

      this.setState({ loading: false })
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

      redirect("/login-page")
    }

    this.state = {
      user: defaultUser,
      error: "",
      loading: false,
      authenticate: authenticate,
      logout: logout
    }
  }

  componentDidMount() {
    getCurrentUser().then((data) => {
      if (data !== null && typeof data.message === "undefined") {
        data.isAuth = true
      } else {
        console.log(data)
        data = {isAuth: false}
      }
      
      if (this.state.user.isAuth !== data.isAuth) {
        this.setState({ user: data})
      }
    })
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