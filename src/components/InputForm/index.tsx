import React, { useState, useEffect } from "react";

import CustomInput from "../UI/CustomInput";
import CustomButton from "../UI/CustomButton";

import "./input-form.scss";

const InputForm = () => {
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
      <CustomInput
        value={values.email}
        setValue={handleInputChange}
        placeholder="mycompany@co.com"
        label="E-mail"
        name="email"
        errorMessageState="invisible"
      ></CustomInput>
      <CustomInput
        value={values.name}
        setValue={handleInputChange}
        placeholder="Сергей Иванов"
        label="Имя"
        name="name"
        errorMessageState="invisible"
      ></CustomInput>
      <CustomInput
        value={values.phone}
        setValue={handleInputChange}
        label="Телефон"
        type="phone"
        name="phone"
        errorMessageState="invisible"
      ></CustomInput>
      <CustomInput
        value={values.messageText}
        setValue={handleInputChange}
        label="Опишите Ваш проект"
        name="messageText"
        type="sizeable"
        errorMessageState="invisible"
      ></CustomInput>
      <div style={{ marginTop: "30px", marginBottom: "10px" }}>
        <CustomButton value="Отправить" color="blue"></CustomButton>
      </div>
    </div>
  );
};

export default InputForm;
