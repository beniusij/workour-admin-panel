import React from 'react'
import Button from '@bit/beniusij.ourworkout.button'
import InputField from '../field/InputField.js'
import styles from './Form.module.scss'
import Notification from "../notification/Notification";
import {AuthConsumer} from "../../context/auth-context/auth-consumer";

function LoginForm() {
  return (
    <AuthConsumer>
      {({error, authenticate, loading}) => (
        <div className={styles.formContainer} >
          <h2 className={styles.formTitle}>Log In</h2>

          {
            error &&
            <Notification message={error} />
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