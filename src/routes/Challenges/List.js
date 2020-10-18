import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "@reach/router";

import { getAll } from "../../store/actions/challenges";

const List = (props) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { list } = useSelector((state) => state.challenges);

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  return (
    <div className="container flex flex-col justify-center items-center w-full mx-auto my-auto h-screen">
      <h1 className="text-4xl text-white font-bold pb-5">
        Hello <span className="text-blue-500">{user.username}</span>, choose a
        challenge
      </h1>

      <div className="grid grid-cols-3 gap-6">
        {list.map(({ id }) => (
          <Link
            className="rounded border border-blue-500 overfl-hidden shadow-lg cursor-pointer py-4 px-4"
            key={id}
            to={`${id}`}
          >
            <span className="text-3xl text-blue-300">#{id}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

List.propTypes = {};

export default List;
