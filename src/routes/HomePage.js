import React from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";

const HomePage = (props) => {
  return (
    <div className="container flex flex-col justify-center items-center w-full mx-auto my-auto h-screen">
      <h1 className="text-6xl text-white font-bold pb-5">Welcome</h1>

      <div className="flex flex-row items-center ">
        <Link
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-center"
          to="/login"
        >
          Login
        </Link>
        <span className="mx-5">or</span>
        <Link
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-center"
          to="/register"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

HomePage.propTypes = {};

export default HomePage;
