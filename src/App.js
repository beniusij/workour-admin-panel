import React, { Component } from 'react';
import NavMenu from "./components/NavMenu";
import auth0Client from "./Auth";
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        {
          !auth0Client.isAuthenticated() &&
          <Redirect to='/login' />
        }
        {
          auth0Client.isAuthenticated() &&
          <NavMenu />
        }
        <Route exact path='/' render={Dashboard} />
        <Route path='/login' component={Login} />
      </Router>
    );
  }
}

export default App;
