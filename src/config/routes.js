import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import Login from "../components/pages/login-page/login/login";
import Dashboard from "../components/pages/dashboard/dashboard";
import { AuthConsumer } from "components/context/auth-context/auth-context"

const routes = () => (
  <Switch>
    {/* Public routes */}
    <Route path="/login">
      <Login />
    </Route>

    {/* All redirects should be placed after public and before protected routes */}
    <AuthConsumer>
      {
        ({ user }) => (
          !user.isAuth &&
          <Redirect push to="/login" />
        )
      }
    </AuthConsumer>

    {/* Protected routes */}
    <Route exact path="/">
      <Dashboard/>
    </Route>
  </Switch>
)

export default routes