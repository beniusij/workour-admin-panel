import React, { Component } from 'react';
import NavMenu from "./components/NavMenu";
import auth0Client from "./Auth";

class App extends Component {
  render() {
    return (
      <div>
      {
        !auth0Client.isAuthenticated() &&
        <p>Please log in</p>
      }
      {
        auth0Client.isAuthenticated() &&
        <p>You are authenticated</p>
      }
      </div>
    );
  }
}

export default App;
