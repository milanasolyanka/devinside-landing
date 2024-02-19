import InputForm from "components/InputForm";

import "./contact-page.scss";

const ContactPage = () => {
  return (
    <div className="formSection" id="form">
      <div className="formSection-title">Свяжитесь с нами</div>
      <div className="formSection-form-container">
        <InputForm></InputForm>
        <div className="warning">
          Нажимая на кнопку, вы соглашаетесь с нашими правилами обработки данных
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
