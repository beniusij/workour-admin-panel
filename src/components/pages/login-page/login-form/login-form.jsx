import React from 'react'
import Button from '@bit/beniusij.ourworkout.ui-components.button'
import InputField from '@bit/beniusij.ourworkout.input-field'
import Form from 'components/ui-components/form/form'
import {AuthConsumer} from "components/context/auth-context/auth-consumer";

function LoginForm() {
  return (
    <AuthConsumer>
      {({error, authenticate, loading}) => (
        <Form
          title={'Login'}
          error={error}
          formFunction={authenticate}
        >
          <InputField
            name="Email"
            type="email"
          />
          <InputField
            name="Password"
            type="password"
          />
          <Button type={'submit'} text={loading ? 'Loading...' : 'Sign In'} />
        </Form>
      )}
    </AuthConsumer>
  )
}

export default LoginForm