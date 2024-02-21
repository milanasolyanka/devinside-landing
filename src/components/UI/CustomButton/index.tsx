import React from "react";

import { IButton } from "../../../types";

import "./custom-button.scss";

const CustomButton: React.FC<IButton> = ({
  value,
  color,
  size = "default",
  onClick
}) => {
  return <button className={`customButton ${color} ${size}`} onClick={onClick}>{value}</button>;
};

export default CustomButton;
