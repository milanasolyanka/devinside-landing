import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import CustomNavLink from "components/UI/CustomNavLink";

import headerData from "data/headerData";

import "./header.scss";
import "./header-media.scss";

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

  // код для адаптива, для кнопочки показа sidebar
  const [sidebarVisibility, setSidebarVisibility] =
    useState<string>("sidebar-invisible");
  const sidebarToggler = () => {
    if (sidebarVisibility === "sidebar-invisible")
      setSidebarVisibility("sidebar-visible");
    if (sidebarVisibility === "sidebar-visible")
      setSidebarVisibility("sidebar-invisible");
  };

  return (
    <div className={`header ${headerColor}`}>
      <button className="sidebar-toggler" onClick={sidebarToggler}>
        {sidebarVisibility === "sidebar-invisible" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            viewBox="0 -960 960 960"
            width="30"
            fill="white"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            viewBox="0 -960 960 960"
            width="30"
            fill="white"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        )}
      </button>
      <div className="header__holder">
        <div className="header__logo">
          <Link to="/" reloadDocument>
            DEVINSIDE
          </Link>
        </div>
        <div
          className={`header__menu ${sidebarVisibility}`}
          onClick={(e) => setSidebarVisibility("sidebar-invisible")}
        >
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
