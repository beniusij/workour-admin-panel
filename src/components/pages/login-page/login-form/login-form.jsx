import React from 'react'
import Button from '@bit/beniusij.ourworkout.ui-components.button'
import InputField from '@bit/beniusij.ourworkout.input-field'
import styles from './login-form.module.scss'
import Notification from "@bit/beniusij.ourworkout.notification";
import {AuthConsumer} from "../../../context/auth-context/auth-consumer";

function LoginForm() {
  return (
    <AuthConsumer>
      {({error, authenticate, loading}) => (
        <div className={styles.formContainer} >
          <h2 className={styles.formTitle}>Log In</h2>

          {
            error &&
            <Notification type={"failure"} message={error} />
          }

          <form onSubmit={authenticate}>
            <InputField
              name="Email"
              type="email"
            />
            <InputField
              name="Password"
              type="password"
            />
            <Button type={'submit'} text={loading ? 'Loading...' : 'Sign In'} />
          </form>
        </div>
      )}
    </AuthConsumer>
  )
}

export default LoginForm