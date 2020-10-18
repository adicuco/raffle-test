import React from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";
import { useDispatch } from "react-redux";

import { login } from "../store/actions/auth";
import { useAuth } from "../utils/hooks";

import Form from "../components/Form";

const Login = (props) => {
  useAuth();

  const dispatch = useDispatch();

  const handleSubmit = ({ username, password }) => {
    dispatch(login({ username, password }));
  };

  return (
    <div className="container flex flex-col justify-center items-center w-full mx-auto my-auto h-screen">
      <h1 className="text-6xl text-white font-bold pb-5">Login</h1>
      <Form onSubmit={handleSubmit} submitText="Login" />
      <Link className="text-blue-500 hover:text-blue-700" to="/register">
        Don't have an account?
      </Link>
    </div>
  );
};

Login.propTypes = {};

export default Login;
