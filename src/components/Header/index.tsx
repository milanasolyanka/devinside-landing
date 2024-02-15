import React, { useEffect, useState } from "react";
import "./header.scss";

export const Header = () => {
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
    <div className={"header" + " " + headerColor}>
      <div className="header__holder">
        <div className="header__logo">DEVINSIDE</div>
        <div className="header__menu">
          <div className="menu-item">О нас</div>
          <div className="menu-item">Наш стек технологий</div>
          <div className="menu-item">Наш продукт</div>
          <div className="menu-item">Наши услуги</div>
          <div className="menu-item">Связь</div>
          <div className="menu-item">Контакты</div>
        </div>
      </div>
    </div>
  );
};
