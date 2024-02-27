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
        <div className="inputBlock">
          <InputMask
            mask="+7 (999) 999 99 99"
            value={value}
            onChange={(e) => setValue(e)}
            placeholder=""
            className={`inp ${errorMessageState === "visible" ? "error" : ""}`}
            name={name}
          ></InputMask>
          <div className="placeholder">{placeholder}</div>
        </div>
      ) : type === "sizeable" ? (
        <div className="inputBlock">
          <textarea
            value={value}
            onChange={(e) => setValue(e)}
            className={`inp sizeable ${
              errorMessageState === "visible" ? "error" : ""
            }`}
            name={name}
            placeholder=""
          ></textarea>
          <div className="placeholder">{placeholder}</div>
        </div>
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
