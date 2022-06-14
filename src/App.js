import React, { useState, useEffect } from "react";
import data from "./utils/data";
import "./styles/App.css";

function App() {
  const [maxCards, setMaxCards] = useState(5);
  const [cards, setCards] = useState();
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [displayText, setDisplayText] = useState("");

  const shuffleCards = (obj) => {
    for (let i = obj.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [obj[i], obj[j]] = [obj[j], obj[i]];
    }

    setCards(obj);
  };

  const newGame = () => {
    let arr = new Set();

    while (arr.size < maxCards) {
      arr.add(Math.floor(Math.random() * 51) + 1);
    }

    arr = Array.from(arr);
    let obj = [];
    for (let i = 0; i < maxCards; i++) {
      obj.push(data["card"][arr[i]]);
    }

    shuffleCards(obj);
  };

  useEffect(() => {
    newGame();
  }, []);

  const resetGame = () => {
    setScore(0);
  };

  return <div className="App"></div>;
}

export default App;
