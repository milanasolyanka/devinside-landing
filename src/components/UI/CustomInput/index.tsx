import React from "react";

import InputMask from "react-input-mask";

import { IInput } from "../../../types";

import "./custom-input.scss";

const CustomInput: React.FC<IInput> = ({
  label,
  placeholder,
  value,
  type = "default",
  errorMesage = "Пожалуйста, заполните все обязательные поля",
  errorMessageState = "invisible",
  name = "",
  setValue,
}) => {
  return (
    <div className="myInput">
      <label>{label}</label>
      {type === "phone" ? (
        <InputMask
          mask="+7 (999) 999 99 99"
          value={value}
          onChange={(e) => setValue(e)}
          placeholder="+7 (999) 999 99 99"
          className={`inp phone ${
            errorMessageState === "visible" ? "error" : ""
          }`}
          name={name}
        ></InputMask>
      ) : type === "sizeable" ? (
        <textarea
          value={value}
          onChange={(e) => setValue(e)}
          className={`inp sizeable ${
            errorMessageState === "visible" ? "error" : ""
          }`}
          name={name}
        ></textarea>
      ) : (
        <div className="inputBlock">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e)}
            className={`inp ${errorMessageState === "visible" ? "error" : ""}`}
            name={name}
            placeholder=""
          ></input>
          <div className="placeholder">{placeholder}</div>
        </div>
      )}

      <div className={`errorMessage ${errorMessageState}`}>{errorMesage}</div>
    </div>
  );
};

export default CustomInput;
