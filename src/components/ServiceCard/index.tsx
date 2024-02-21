import React from "react";

import CustomButton from "../UI/CustomButton";
import scrollToForm from "utils/scrollToForm";
import { IServiceElement } from "../../types";

import "./service-card.scss";

const ServiceCard: React.FC<IServiceElement> = ({
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
      <CustomButton
        color="black"
        value="Свяжитесь с нами"
        size="small"
        onClick={scrollToForm}
      ></CustomButton>
    </div>
  );
};

export default ServiceCard;
