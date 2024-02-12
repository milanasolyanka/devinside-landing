import React from "react";
import "./App.scss";

// import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import { Header } from "./components/Header";
import { ButtonBlue } from "./components/UI/ButtonBlue";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="welcomeSection">
        {/* <Parallax style={{ overflow: "hidden" }} pages={1}>
        <ParallaxLayer speed={-0.1}> */}
        <div className="welcomeSection-wrapper">
          <div className="parallaxPic-wrapper">
            <img
              className="parallaxPic"
              src="/parallaxPic.jpg"
              alt="Картинка с крутыми работниками нашей компании"
            />
          </div>
          <div className="blackOpaque"></div>
          <div className="textAndButton">
            <div className="textName">DEVINSIDE</div>
            <div className="textDescription">
              Создаем веб-решения, которые работают для Вас!
            </div>
            <div className="button-wrapper">
              <ButtonBlue value="Связаться с нами"></ButtonBlue>
            </div>
          </div>
        </div>
        {/* </ParallaxLayer>
      </Parallax> */}
      </div>
      <div className="aboutSection">
        <div className="aboutSection-wrapper">
          <div className="aboutSection-text">
            <div className="aboutSection-text__title">О нас</div>
            <div className="aboutSection-text__line"></div>
            <div className="aboutSection-text__description">
              <p>
                Мы молодая команда разработчиков из Томска, объединённых целью
                создания качественных IT-решений для наших клиентов. Мы
                занимаемся разработкой и дизайном веб-сервисов и созданием
                продуктов на основе Machine Learning, которые оптимизируют
                рабочий процесс наших клиентов.
              </p>
              <p>
                Мы верим, что наша работа должна быть не только качественной, но
                и приятной для наших клиентов. Поэтому мы уделяем большое
                внимание коммуникации, прозрачности и вовлеченности нашей
                команды в проекты.
              </p>
              <p>
                Мы готовы взяться за любой проект и создать для Вас веб-решение,
                которое будет отражать вашу уникальность и поможет Вам достичь
                ваших целей.
              </p>
            </div>
          </div>
          <div className="aboutSection-picture">
            <img src="/devinside.png" alt="Логотип девинсайд"></img>
          </div>
        </div>
      </div>
      <div className="stripWrapper">
        <div className="strip"></div>
      </div>
      <div className="technologySection">
        <div className="technologySection-title">Наш стек технологий</div>
        <div className="technologySection-cards">
          {/* Три технолоджи карды */}
        </div>
      </div>
    </div>
  );
}

export default App;
