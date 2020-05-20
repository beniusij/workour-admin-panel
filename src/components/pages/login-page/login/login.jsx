import React from 'react'
import LoginForm from 'components/pages/login-page/login-form/login-form'
import styles from './login.module.scss'
import SiteTitle from "components/ui-components/site-title/site-title";

const Login = props => {
  return (
  	<div className={styles.page}>
      <SiteTitle>OurWorkout Admin Panel</SiteTitle>
  		<LoginForm history={props.history} />
    </div>
  )
}

export default Login