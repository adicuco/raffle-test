import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const List = (props) => {
  const { user } = useSelector((state) => state.auth);
  return <div>hello {user.username}</div>;
};

List.propTypes = {};

export default List;
