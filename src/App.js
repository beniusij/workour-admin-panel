import React, { Component } from 'react';
import './App.scss'
import { AuthProvider, AuthConsumer } from "./components/context/auth-context/auth-context";
import routes from "./config/routes";
import Navigation from "./components/navigation/nav/nav";

class App extends Component {
  render() {
    return (
      <AuthProvider endpoint={process.env.REACT_APP_API_URL}>
        <AuthConsumer>
          {
            ({ user }) => (
              user.isAuth &&
              <Navigation />
            )
          }
        </AuthConsumer>

        { routes() }
      </AuthProvider>
    );
  }
}

export default App;
