import React from "react";
import PropTypes from "prop-types";

import colors from "../constants/colors";

const Matrix = ({ matrix }) => {
  return (
    <div className="flex w-full h-full flex-col">
      {matrix.map((row, i) => (
        <div key={i} className="flex flex-1">
          {row.map(({ color, player }, j) => (
            <div
              key={j}
              className="flex-1 rounded-sm m-1"
              style={{
                backgroundColor: colors[color],
                opacity: `${player ? 100 : 50}%`,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

Matrix.propTypes = {
  matrix: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        color: PropTypes.number.isRequired,
        player: PropTypes.string,
      })
    )
  ).isRequired,
};

export default Matrix;
