import React, { Component } from 'react';
import AuthProvider from "./context/Auth/AuthProvider.jsx";
import routes from "./config/routes";
import NavMenu from "./components/navigation/NavMenu";
import { AuthConsumer } from "./context/Auth/AuthConsumer";

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <AuthConsumer>
          {
            ({ user }) => (
              user.isAuth &&
              <NavMenu />
            )
          }
        </AuthConsumer>

        { routes() }
      </AuthProvider>
    );
  }
}

export default App;
