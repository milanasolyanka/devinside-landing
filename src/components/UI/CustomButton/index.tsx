import React from "react";

import { IButton } from "../../../types";

import "./custom-button.scss";

const CustomButton: React.FC<IButton> = ({
  value,
  color,
  size = "default",
}) => {
  return (
    <button className={"iButton" + " " + color + " " + size}>{value}</button>
  );
};

export default CustomButton;
