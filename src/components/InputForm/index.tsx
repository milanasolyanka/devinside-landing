import React, { useState } from "react";
import { MyInput } from "../UI/MyInput";
import { MyButton } from "../UI/MyButton";

export const InputForm = () => {
  const initialValues = { email: "", phone: "", name: "", messageText: "" };
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  return (
    <div className="inputForm">
      <MyInput
        value={values.email}
        setValue={handleInputChange}
        label="E-mail"
        name="email"
        errorMessageState="invisible"
      ></MyInput>
      <MyInput
        value={values.name}
        setValue={handleInputChange}
        label="Имя"
        name="name"
        errorMessageState="invisible"
      ></MyInput>
      <MyInput
        value={values.phone}
        setValue={handleInputChange}
        label="Телефон"
        type="phone"
        name="phone"
        errorMessageState="invisible"
      ></MyInput>
      <MyInput
        value={values.messageText}
        setValue={handleInputChange}
        label="Опишите Ваш проект"
        name="messageText"
        type="sizeable"
        errorMessageState="invisible"
      ></MyInput>
      <div style={{ marginTop: "30px", marginBottom: "10px" }}>
        <MyButton value="Отправить" color="blue"></MyButton>
      </div>
    </div>
  );
};
