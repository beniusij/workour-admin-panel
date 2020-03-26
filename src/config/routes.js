import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from "../pages/Login/Login";
import ProtectedRoute from "../components/navComponents/ProtectedRoute";
import Dashboard from "../pages/Dashboard/Dashboard";
import { history } from "../lib/history"

const routes = () => (
  <Router history={history}>
    {/* Public routes */}
    <Route path={'/login'} render={Login} />

    {/* Protected routes */}
    <ProtectedRoute exact path={'/'} render={Dashboard} />
  </Router>
)

export default routes