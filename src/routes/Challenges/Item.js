import React from "react";
import PropTypes from "prop-types";

const Item = ({ id }) => {
  return <div>challenge {id}</div>;
};

Item.propTypes = {
  id: PropTypes.string,
};

export default Item;
