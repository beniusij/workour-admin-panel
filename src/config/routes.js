import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import { AuthConsumer } from "../context/auth-context/auth-consumer";

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