import { useEffect, useState } from "react";

import CustomNavLink from "components/UI/CustomNavLink";

import "./header.scss";

const Header = () => {
  // код для цвета хэдера - белый или прозрачный
  const [headerColor, setHeaderColor] = useState("transparent");

  useEffect(() => {
    const parallaxWrapper: HTMLElement | null =
      document.querySelector(".parallax-wrapper")!;
    parallaxWrapper.addEventListener("scroll", () => {
      if (parallaxWrapper.scrollTop > 0) {
        setHeaderColor("opaque");
      } else {
        setHeaderColor("transparent");
      }
    });
  }, []);

  return (
    <div className={`header ${headerColor}`}>
      <div className="header__holder">
        <div className="header__logo">DEVINSIDE</div>
        <div className="header__menu">
          <CustomNavLink to="#about" linkText="О нас" />
          <CustomNavLink to="#techs" linkText="Наш стек технологий" />
          <CustomNavLink to="#product" linkText="Наш продукт" />
          <CustomNavLink to="#services" linkText="Наши услуги" />
          <CustomNavLink to="#form" linkText="Связь" />
          <CustomNavLink to="#contacts" linkText="Контакты" />
          {/* <div className="menu-item">О нас</div>
          <div className="menu-item">Наш стек технологий</div>
          <div className="menu-item">Наш продукт</div>
          <div className="menu-item">Наши услуги</div>
          <div className="menu-item">Связь</div>
          <div className="menu-item">Контакты</div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
