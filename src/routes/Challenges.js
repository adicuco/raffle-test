import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const Challenges = (props) => {
  const { user } = useSelector((state) => state.auth);
  return <div>hello {user.username}</div>;
};

Challenges.propTypes = {};

export default Challenges;
