import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from "../pages/Login/Login";

const routes = () => (
  <Router>
    {/* Public routes */}
    <Route path={'/login'} render={Login} />

    {/* Protected routes */}
  </Router>
)

export default routes