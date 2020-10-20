import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "@reach/router";

import { getAll } from "../../store/actions/challenges";
import { useKeyPress } from "../../utils/hooks";

const List = ({ navigate }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth) || {};
  const { list } = useSelector((state) => state.challenges);

  const key1 = useKeyPress(49);
  const key2 = useKeyPress(50);
  const key3 = useKeyPress(51);

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  useEffect(() => {
    if (key1) {
      navigate("1");
    }
    if (key2) {
      navigate("2");
    }
    if (key3) {
      navigate("3");
    }
  }, [key1, key2, key3, navigate]);

  return (
    <div className="container flex flex-col justify-center items-center w-full mx-auto my-auto h-screen">
      <h1 className="text-4xl text-white font-bold pb-5">
        Hello <span className="text-blue-500">{user?.username}</span>, choose a
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

      <span className="text-sm text-white pt-5">
        You can navigate using keyboard keys 1, 2, 3
      </span>
    </div>
  );
};

List.propTypes = {};

export default List;
