import React from "react";
import PropTypes from "prop-types";

import colors from "../constants/colors";

import Matrix from "./Matrix";

const Game = ({ state, onColor, onBack, onStart }) => {
  const { matrix, color, round, done } = state;
  const exclude = [color];

  return (
    <div className="flex flex-col w-full h-full justify-around">
      <div className="flex" style={{ height: "75%" }}>
        <Matrix matrix={matrix} />
      </div>

      <div
        className="flex justify-center items-center"
        style={{ height: "15%" }}
      >
        {done ? (
          <div className="flex flex-col">
            <h3 className="text-2xl text-white font-bold pb-5">
              You finished in <span className="text-blue-500">{round}</span>{" "}
              rounds
            </h3>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-center"
              onClick={onStart}
            >
              Retry
            </button>
            <div
              className="text-blue-500 hover:text-blue-700 py-3 text-center cursor-pointer"
              onClick={onBack}
            >
              Back
            </div>
          </div>
        ) : (
          <>
            {colors.slice(0, 5).map((color, index) => (
              <div
                key={index}
                className="flex-1 h-full rounded-sm m-1 cursor-pointer opacity-50 hover:opacity-100"
                style={{
                  backgroundColor: color,
                  display: exclude.includes(index) ? "none" : null,
                }}
                onClick={() => {
                  onColor(index);
                }}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

Game.propTypes = {
  state: PropTypes.shape({
    matrix: PropTypes.array.isRequired,
    color: PropTypes.number.isRequired,
    round: PropTypes.number.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
  onColor: PropTypes.func.isRequired,
  onStart: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default Game;
