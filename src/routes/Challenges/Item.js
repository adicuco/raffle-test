import React from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";

const Item = ({ id }) => {
  return (
    <div className="container flex flex-col justify-center items-center w-full mx-auto my-auto h-screen">
      <h1 className="text-5xl text-white font-bold pb-5">
        Challenge <span className="text-blue-500">#{id}</span>
      </h1>

      <Link
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-center"
        to="/challenges"
      >
        Back
      </Link>
    </div>
  );
};

Item.propTypes = {
  id: PropTypes.string,
};

export default Item;
