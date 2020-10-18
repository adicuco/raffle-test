import React from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";
import { useDispatch } from "react-redux";

import { register } from "../store/actions/auth";
import { useAuth } from "../utils/hooks";

import Form from "../components/Form";

const Register = (props) => {
  useAuth();

  const dispatch = useDispatch();

  const handleSubmit = ({ username, password }) => {
    dispatch(register({ username, password }));
  };

  return (
    <div className="container flex flex-col justify-center items-center w-full mx-auto my-auto h-screen">
      <h1 className="text-6xl text-white font-bold pb-5">Register</h1>
      <Form onSubmit={handleSubmit} />
      <Link className="text-blue-500 hover:text-blue-700" to="/login">
        Already have an account?
      </Link>
    </div>
  );
};

Register.propTypes = {};

export default Register;
