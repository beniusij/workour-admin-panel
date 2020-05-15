import React from 'react'
import LoginForm from '../login-form/login-form.jsx'
import styles from './login.module.scss'

const Login = props => {
  return (
  	<div className={styles.page}>
  	<h1 className={styles.title}>Workour Admin Panel</h1>
  		<LoginForm history={props.history} />
    </div>
  )
}

export default Login