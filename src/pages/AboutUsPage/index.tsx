import { aboutUsText } from "data/aboutUsText";

import devinsideLogo from "assets/devinside.png";

import "./about-us-page.scss";

const AboutUsPage = () => {
  return (
    <div className="aboutSection" id="about">
      <div className="aboutSection-wrapper">
        <div className="aboutSection-text">
          <div className="aboutSection-text__title">О нас</div>
          <div className="aboutSection-text__line"></div>
          <div className="aboutSection-text__description">{aboutUsText}</div>
        </div>
        <div className="aboutSection-picture">
          <img src={devinsideLogo} alt="Логотип девинсайд"></img>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
