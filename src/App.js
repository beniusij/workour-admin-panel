import React, { Component } from 'react';
import AuthProvider from "./context/Auth/AuthProvider.jsx";
import routes from "./config/routes";
import NavMenu from "./components/navigation/NavMenu";
import { AuthConsumer } from "./context/Auth/AuthConsumer";
import { history } from "./lib/history"



class App extends Component {
  render() {
    return (
      <AuthProvider history={history}>
        { routes() }

        <AuthConsumer>
          {
            ({ user }) => (
              user.isAuth &&
              <NavMenu />
            )
          }
        </AuthConsumer>
      </AuthProvider>
    );
  }
}

export default App;
