import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "components/pages/login-page/login/login";
import Dashboard from "components/pages/dashboard/dashboard";
import { AuthConsumer } from "components/context/auth-context/auth-context"
import DataPage from "components/pages/data-page/data/data";

const routes = () => (
  <Switch>
    {/* Public routes*/}
    <Route path="/login">
      <Login />
    </Route>

    {/* All redirects should be placed after public and before protected routes */}
    <AuthConsumer>
      {
        ({ user }) => {

          if (!user.isAuth) return <Redirect push to="/login" />

          return (
            // Protected routes
            <React.Fragment>
              <Route exact path="/">
                <Dashboard/>
              </Route>
              <Route path={"/data"}>
                <DataPage/>
              </Route>
            </React.Fragment>
          )
        }
      }
    </AuthConsumer>
  </Switch>
)

export default routes