import React, { Component } from 'react';
import authClient from "./Auth";
import NavMenu from "./components/NavMenu";
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        {
          (!authClient.isAuthenticated() || !this.state.isAdmin) &&
          <Redirect to='/login' />
        }
        {
          authClient.isAuthenticated() &&
          <NavMenu />
        }
        <Route exact path='/' render={Dashboard} />
        <Route path='/login' component={Login} />
      </Router>
    );
  }
}

export default App;
