import CustomButton from "components/UI/CustomButton";

import parallaxPic from "assets/parallaxPic.jpg";

import "./welcome-page.scss";

const WelcomePage = () => {
  return (
    <div className="welcomeSection">
      <img className="parallaxPic" src={parallaxPic} alt="" />
      <div className="blackOpaque"></div>
      <div className="textAndButton">
        <div className="textName">DEVINSIDE</div>
        <div className="textDescription">
          Создаем веб-решения, которые работают для Вас!
        </div>
        <div className="button-wrapper">
          <CustomButton color="blue" value="Связаться с нами"></CustomButton>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
