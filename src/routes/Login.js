import React from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";

import Form from "../components/Form";

const Login = (props) => {
  const handleSubmit = ({ username, password }) => {
    console.log("password: ", password);
    console.log("username: ", username);
  };

  return (
    <div className="container flex flex-col justify-center items-center w-full mx-auto my-auto h-screen">
      <h1 className="text-6xl text-white font-bold pb-5">Login</h1>
      <Form onSubmit={handleSubmit} />
      <Link className="text-blue-500 hover:text-blue-700" to="/register">
        Don't have an account?
      </Link>
    </div>
  );
};

Login.propTypes = {};

export default Login;
