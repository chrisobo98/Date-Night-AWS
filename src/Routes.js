import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Containers/Home";
import Login from "./Containers/Login";
import Zip from "./Containers/Zip";
import AppliedRoute from "./components/AppliedRoute";
import ResetPassword from "./Containers/ResetPassword";
import Settings from "./Containers/Settings";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import ChangePassword from "./Containers/ChangePassword";
import NotFound from "./Containers/NotFound";
import Signup from "./Containers/Signup";
import Results from "./Containers/Results";


export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    <AuthenticatedRoute path="/zip" exact component={Zip} props={childProps} />
    <AuthenticatedRoute path="/settings" exact component={Settings} props={childProps} />
    <AuthenticatedRoute path="/settings/password" exact component={ChangePassword} props={childProps} />
    <AuthenticatedRoute path="/settings/results" component={Results} props={childProps} />
    <UnauthenticatedRoute path="/login/reset" exact component={ResetPassword} props={childProps} />
    <AppliedRoute path="/signup" exact component={Signup} props={childProps} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;