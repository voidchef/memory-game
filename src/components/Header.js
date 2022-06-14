import "../styles/Header.css";
import React from "react";
import ScoreBoard from "./Score/ScoreBoard";

const Header = (props) => {
  const { score, highScore, displayText } = props;
  return (
    <header className="App-header">
      <h1>Gwent: The Memory Game</h1>
      <p>
        Get points for choosing a card, but don't click on the same card twice!
      </p>
      <ScoreBoard
        score={score}
        highScore={highScore}
      />
      <p>{displayText}</p>
    </header>
  );
};

export default Header;
