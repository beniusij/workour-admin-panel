import React from 'react'
import LoginForm from '../login-form/login-form.jsx'
import styles from './login.module.scss'
import SiteTitle from "../../../ui-components/site-title/site-title";

const Login = props => {
  return (
  	<div className={styles.page}>
      <SiteTitle>OurWorkout Admin Panel</SiteTitle>
  		<LoginForm history={props.history} />
    </div>
  )
}

export default Login