import React, { useState, useEffect } from "react";
import { MyInput } from "../UI/MyInput";
import { MyButton } from "../UI/MyButton";

import "./inputForm.scss";

export const InputForm = () => {
  // этот код следит за тем, чтобы значения во всех инпутах обновлялись. Хранит значения в values, обновляет их в handleInputChange
  const initialValues = { email: "", phone: "", name: "", messageText: "" };
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  // а это код для анимации
  const [formVisible, setFormVisible] = useState<string>("");
  useEffect(() => {
    const parallaxWrapper: HTMLElement | null =
      document.querySelector(".parallax-wrapper")!;

    parallaxWrapper.addEventListener("scroll", () => {
      if (parallaxWrapper.scrollTop > 4000) {
        setFormVisible("visible");
      }
    });
  }, []);

  return (
    <div className={"inputForm" + " " + formVisible}>
      <MyInput
        value={values.email}
        setValue={handleInputChange}
        placeholder="mycompany@co.com"
        label="E-mail"
        name="email"
        errorMessageState="invisible"
      ></MyInput>
      <MyInput
        value={values.name}
        setValue={handleInputChange}
        placeholder="Сергей Иванов"
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
