import React from "react";
// import { IHeaderButton } from "../../../models";
import "./buttonBlue.scss";

interface IButtonBlue {
  value: string;
}

export const ButtonBlue: React.FC<IButtonBlue> = ({ value }) => {
  return <button className="buttonBlue">{value}</button>;
};
