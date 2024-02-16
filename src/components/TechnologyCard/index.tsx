import React from "react";

import { ITechnologyCard } from "../../types";

import "./technology-card.scss";

const TechnologyCard: React.FC<ITechnologyCard> = ({
  picture,
  title,
  content,
}) => {
  return (
    <div className="technologyCard">
      <div className="technologyCard-container">
        <img src={picture} alt="Логотип"></img>
        <div className="cardTitle">{title}</div>
        <div className="cardContent">
          {content.map((techElement) => (
            <div className="techElement">{techElement}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologyCard;
