import React from "react";
import "./myButton.scss";
import { IButton } from "../../../types";

export const MyButton: React.FC<IButton> = ({
  value,
  color,
  size = "default",
}) => {
  return (
    <button className={"iButton" + " " + color + " " + size}>{value}</button>
  );
};
