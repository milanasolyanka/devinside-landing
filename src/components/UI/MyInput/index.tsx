import React from "react";
import "./myInput.scss";

import InputMask from "react-input-mask";

interface IMyInput {
  label?: string;
  placeholder?: string;
  value: string;
  type?: "phone" | "sizeable";
  errorMesage?: string;
  errorMessageState: "visible" | "invisible";
  name: string;
  setValue: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

export const MyInput: React.FC<IMyInput> = ({
  label,
  placeholder,
  value,
  type = "default",
  errorMesage = "Обязательное поле",
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
          className="inp phone"
          name={name}
        ></InputMask>
      ) : type === "sizeable" ? (
        <textarea
          value={value}
          onChange={(e) => setValue(e)}
          className="inp sizeable"
          name={name}
        ></textarea>
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e)}
          className="inp"
          name={name}
        ></input>
      )}

      <div className={"errorMessage" + " " + errorMessageState}>
        {errorMesage}
      </div>
    </div>
  );
};
