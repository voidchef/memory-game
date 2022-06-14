import "../styles/Header.css";
import React from "react";

const Header = (props) => {
  const { score, highScore, displayText } = props;
  return (
    <header className="App-header">
      <h1>Gwent: The Memory Game</h1>
      <p>
        Get points for choosing a card, but don't click on the same card twice!
      </p>
      <p>{displayText}</p>
    </header>
  );
};

export default Header;
