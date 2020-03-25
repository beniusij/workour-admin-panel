import React, { Component } from 'react';
import AuthProvider from "./context/Auth/AuthProvider";
import routes from "./config/routes";
import NavMenu from "./components/navigation/NavMenu";
import {AuthConsumer} from "./context/Auth/AuthConsumer";



class App extends Component {
  render() {
    return (
      <AuthProvider>
        {routes()}

        <AuthConsumer>
          {({ user }) =>
            user.isAuth ?? (<NavMenu/>)
          }
        </AuthConsumer>
      </AuthProvider>
    );
  }
}

export default App;
