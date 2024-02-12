import React from "react";
import "./buttonBlack.scss";

interface IButtonBlack {
  value: string;
}

export const ButtonBlack: React.FC<IButtonBlack> = ({ value }) => {
  return <button className="buttonBlack">{value}</button>;
};
