import React from "react";
import PropTypes from "prop-types";

const Leaderboard = ({ players }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full mx-auto my-auto">
      <h1 className="text-5xl text-white font-bold pb-5">Leaderboard</h1>

      {players.map(({ username, score }, index) => (
        <div
          key={username}
          className="flex justify-between items-center font-bold text-xl w-1/2"
        >
          <div className="flex flex-row items-center justify-center my-1">
            <span className="border border-blue-300 rounded-full h-10 w-10 flex items-center justify-center">
              {index + 1}
            </span>
            <span className="text-blue-500 ml-5">{username}</span>
          </div>
          <span className="">{score}</span>
        </div>
      ))}
    </div>
  );
};

Leaderboard.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Leaderboard;
