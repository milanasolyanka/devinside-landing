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

  // код для проверки значений в инпутах
  const initialErrorVisibilities = {
    email: "invisible",
    name: "invisible",
    phone: "invisible",
  };
  const [errorVisibilities, setErrorVisibilities] = useState(
    initialErrorVisibilities
  );

  const checkInputs = () => {
    let hasVisibleErrors = false;

    if (values.email === "") {
      errorVisibilities.email = "visible";
      hasVisibleErrors = true;
    } else {
      errorVisibilities.email = "invisible";
    }

    if (values.name === "") {
      errorVisibilities.name = "visible";
      hasVisibleErrors = true;
    } else {
      errorVisibilities.name = "invisible";
    }

    if (!values.phone || !/^\d{11}$/.test(values.phone)) {
      errorVisibilities.phone = "visible";
      hasVisibleErrors = true;
    } else {
      errorVisibilities.phone = "invisible";
    }

    console.log(values.email, values.name, values.phone, values.messageText);

    if (!hasVisibleErrors) {
      // sendMessage(values.email, values.name, values.phone, values.messageText);
      console.log("Ща бы отправила инфу на сервер");
    }
    setErrorVisibilities({ ...errorVisibilities });
  };

  return (
    <div className={`inputForm ${formVisible}`}>
      <CustomInput
        value={values.email}
        setValue={handleInputChange}
        placeholder="mycompany@co.com"
        label="E-mail"
        name="email"
        errorMessageState={errorVisibilities.email}
      ></CustomInput>
      <CustomInput
        value={values.name}
        setValue={handleInputChange}
        placeholder="Сергей Иванов"
        label="Имя"
        name="name"
        errorMessageState={errorVisibilities.name}
      ></CustomInput>
      <CustomInput
        value={values.phone}
        setValue={handleInputChange}
        label="Телефон"
        type="phone"
        name="phone"
        errorMessageState={errorVisibilities.phone}
      ></CustomInput>
      <CustomInput
        value={values.messageText}
        setValue={handleInputChange}
        label="Опишите Ваш проект"
        name="messageText"
        type="sizeable"
      ></CustomInput>
      <div className="inputForm-buttonWrapper">
        <CustomButton
          value="Отправить"
          color="blue"
          onClick={checkInputs}
        ></CustomButton>
      </div>
    </div>
  );
};

export default InputForm;
