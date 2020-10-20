import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";
import { useSelector, useDispatch } from "react-redux";

import { getById, postById } from "../../store/actions/challenges";

import Game from "../../components/Game";

const Item = ({ id }) => {
  const dispatch = useDispatch();

  const { state } = useSelector((state) => state.challenges);
  const [isGame, setIsGame] = useState(false);

  useEffect(() => {
    dispatch(getById({ id }));
  }, [dispatch, id]);

  const handleStart = () => {
    dispatch(postById({ id }));
    setIsGame(true);
  };

  const handleColor = (color) => {
    dispatch(postById({ id, color }));
  };

  const handleBack = () => {
    setIsGame(false);
  };

  return (
    <div className="container flex flex-col justify-center items-center w-full mx-auto my-auto h-screen">
      {isGame && state.matrix ? (
        <>
          <Game
            state={state}
            onColor={handleColor}
            onStart={handleStart}
            onBack={handleBack}
          />
        </>
      ) : (
        <>
          <h1 className="text-5xl text-white font-bold pb-5">
            Challenge <span className="text-blue-500">#{id}</span>
          </h1>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-center"
            onClick={handleStart}
          >
            Start
          </button>
          <Link
            className="text-blue-500 hover:text-blue-700 py-3"
            to="/challenges"
          >
            Back
          </Link>
        </>
      )}
    </div>
  );
};

Item.propTypes = {
  id: PropTypes.string,
};

export default Item;
