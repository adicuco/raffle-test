import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "@reach/router";
import { useSelector } from "react-redux";

const Auth = ({ Route, children }) => {
  const { isAuth } = useSelector((state) => state.auth);
  return isAuth ? <Route>{children}</Route> : <Redirect to="/login" noThrow />;
};

Auth.propTypes = {
  Route: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Auth;
