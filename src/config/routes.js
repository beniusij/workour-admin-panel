import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import { AuthConsumer } from "../context/Auth/AuthConsumer";

const routes = () => (
  <Switch>
    {/* Public routes */}
    <Route path="/login">
      <Login />
    </Route>

    <AuthConsumer>
      {
        ({ user }) => (
          !user.isAuth &&
          <Redirect to="/login" />
        )
      }
    </AuthConsumer>

    {/* Protected routes */}
    <Route path="/">
      <Dashboard/>
    </Route>
  </Switch>
)

export default routes