import React from "react";
import "./App.scss";

// import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import { Header } from "./components/Header";
import { ButtonBlue } from "./components/UI/ButtonBlue";
import { TechnologyCard } from "./components/TechnologyCard";
import { ButtonBlack } from "./components/UI/ButtonBlack";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="welcomeSection">
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
          <div className="cards-container">
            <TechnologyCard
              title="Клиентская часть"
              content={["Typescript", "ReactJS", "SASS", "Effector"]}
              picture="/technology-frontend.png"
            />
            <TechnologyCard
              title="Серверная часть"
              content={[
                "Python",
                "Django",
                "Fast API",
                "Celery",
                "RabbitMQ",
                "Redis",
                "PostgreSQL",
              ]}
              picture="/technology-backend.png"
            />
            <TechnologyCard
              title="Machine learning"
              content={[
                "Tensorflow v2.x",
                "Keras",
                "Pandas",
                "Scikit-Learn",
                "Numpy",
                "Matplotlib",
                "Seaborn",
              ]}
              picture="/technology-machine-learning.png"
            />
          </div>
        </div>
      </div>
      <div className="stripWrapper">
        <div className="strip"></div>
      </div>
      <div className="productSection">
        <div className="productSection-title">Наш продукт</div>
        <div className="productSection-content">
          <div className="content-picture">
            <img src="/product.svg"></img>
          </div>
          <div className="content-text">
            <div className="title">TenderChad</div>
            <div className="text__line"></div>
            <div className="description">
              TenderChad - аналитическая система для оптимизации поиска и
              анализа тендеров. Наш уникальный алгоритм оценки тендеров
              основывается на информации из сопутствующей документации. Удобный
              интерфейс позволяет быстро находить тендеры по ключевым
              параметрам, а система берет на себя скучную работу по оценке
              документации. Выберите только те тендеры, которые полностью
              соответствуют вашим требованиям и сэкономьте свое время с
              TenderChad.
            </div>
            <ButtonBlack value="Подробнее"></ButtonBlack>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
