import React, { useState, useEffect } from "react";
import "./styles/App.css";

function App() {
  const [maxCards, setMaxCards] = useState(5);
  const [cards, setCards] = useState();
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [displayText, setDisplayText] = useState("");

  return <div className="App"></div>;
}

export default App;
