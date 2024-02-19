import TechnologyCard from "components/TechnologyCard";
import techBackend from "assets/technology-backend.png";
import techFrontend from "assets/technology-frontend.png";
import techMachineLearning from "assets/technology-machine-learning.png";

import "./technology-page.scss";

const TechnologyPage = () => {
  return (
    <div className="technologySection" id="techs">
      <div className="technologySection-title">Наш стек технологий</div>
      <div className="technologySection-cards">
        <div className="cards-container">
          <TechnologyCard
            title="Клиентская часть"
            content={["Typescript", "ReactJS", "SASS", "Effector"]}
            picture={techFrontend}
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
            picture={techBackend}
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
            picture={techMachineLearning}
          />
        </div>
      </div>
    </div>
  );
};

export default TechnologyPage;
