import React from "react";
import CardCreator from "./CardCreator";
import "../../styles/Cards.css";

const Cards = (props) => {
  const { cards, handleGameLogic } = props;

  if (!cards) return null;

  return (
    <div className="container">
      <div className="cards">
        {cards.map((card) => {
          return <CardCreator card={card} handleGameLogic={handleGameLogic} />;
        })}
      </div>
    </div>
  );
};

export default Cards;
