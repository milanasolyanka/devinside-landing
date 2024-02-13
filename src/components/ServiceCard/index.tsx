import React from "react";
import "./serviceCard.scss";
import { IServiceElement } from "../../types";
import { MyButton } from "../UI/MyButton";

export const ServiceCard: React.FC<IServiceElement> = ({
  picture,
  title,
  description,
}) => {
  return (
    <div className="serviceElement">
      <div className="picture-wrapper">
        <img src={picture} alt="" />
      </div>
      <div className="title">{title}</div>
      <div className="description">{description}</div>
      <MyButton color="black" value="Свяжитесь с нами" size="small"></MyButton>
    </div>
  );
};
