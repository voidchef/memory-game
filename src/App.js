import React, { useState, useEffect } from "react";
import data from "./utils/data";
import Header from "./components/Header";
import Cards from "./components/Cards/Cards";
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

  const handleScore = (score) => setScore(score);

  useEffect(() => {
    if (score >= highScore) setHighScore(score);
  }, [score]);

  const handleDisplayText = (text) => setDisplayText(text);

  const handleGameLogic = (e, id) => {
    const index = cards.map((e) => e.id).indexOf(id);

    if (cards[index]["chosen"] === false) {
      const obj = cards.map((card) => {
        if (card.id === id) {
          return {
            ...card,
            chosen: true,
          };
        } else {
          return {
            ...card,
          };
        }
      });

      handleScore(score + 1);
      handleDisplayText("");
      shuffleCards(obj);
    } else {
      resetGame();
      handleDisplayText("You chose the same card twice! Try again!");
      newGame();
    }
  };

  return (
    <div className="App">
      <Header score={score} highScore={highScore} displayText={displayText} />
      <Cards cards={cards} handleGameLogic={handleGameLogic} />
    </div>
  );
}

export default App;
