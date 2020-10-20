import React from "react";
import PropTypes from "prop-types";

import colors from "../constants/colors";

import Matrix from "./Matrix";

const Game = ({ state, onColor }) => {
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
          <div>{round} rounds</div>
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

Game.propTypes = {};

export default Game;
