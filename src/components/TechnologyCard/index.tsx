import React from "react";
import "./technologyCard.css";

interface ITechnologyCard {
  picture: string;
  title: string;
  content: string[];
}

export const TechnologyCard: React.FC<ITechnologyCard> = ({
  picture,
  title,
  content,
}) => {
  return (
    <div className="technologyCard">
      <div className="cardPicture">
        <img src={picture} alt="Логотип"></img>
      </div>
      <div className="cardTitle">{title}</div>
      <div className="cardContent">
        {content.map((techElement) => (
          <div className="techElement">{techElement}</div>
        ))}
      </div>
    </div>
  );
};
