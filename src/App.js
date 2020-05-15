import React, { Component } from 'react';
import AuthProvider from "./context/auth-context/auth-provider.jsx";
import routes from "./config/routes";
import NavMenu from "./components/navigation/nav/nav";
import { AuthConsumer } from "./context/auth-context/auth-consumer";

class App extends Component {
  render() {
    return (
      <AuthProvider endpoint={process.env.REACT_APP_API_URL}>
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
