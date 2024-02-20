import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import CustomNavLink from "components/UI/CustomNavLink";

import headerData from "data/headerData";

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
        <div className="header__logo">
          <Link to="/" reloadDocument>
            DEVINSIDE
          </Link>
        </div>
        <div className="header__menu">
          {headerData.map((item) => (
            <CustomNavLink
              key={item.link}
              to={item.link}
              linkText={item.linkText}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
