import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from "../pages/Login/Login";
import ProtectedRoute from "../components/navComponents/ProtectedRoute";
import Dashboard from "../pages/Dashboard";

const routes = () => (
  <Router>
    {/* Public routes */}
    <Route path={'/login'} render={Login} />

    {/* Protected routes */}
    <ProtectedRoute exact path={'/'} render={Dashboard} />
  </Router>
)

export default routes