import React from "react";
import "../../styles/ScoreBoard.css";

const ScoreBoard = (props) => {
  const { score, highScore } = props;
  return (
    <div className="scoreBoard">
      <div className="currentScore">Score: {score}</div>
      <div className="highScore">High Score: {highScore}</div>
    </div>
  );
};

export default ScoreBoard;
