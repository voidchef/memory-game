import React from "react";
import "../../styles/CardCreator.css";

const CardCreator = (props) => {
  const { card, handleGameLogic } = props;

  return (
    <div className="card">
      <div className="cardArtContainer">
        <img
          src={process.env.PUBLIC_URL + card["pictureDir"]}
          id={card["id"]}
          className="cardArt"
          alt={card["title"]}
          onClick={(e) => handleGameLogic(e, card["id"])}
        ></img>
      </div>
      <p className="cardText">{card["title"]}</p>
    </div>
  );
};

export default CardCreator;
