import React from "react";
import { useLocation } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

import { ICustomNavLink } from "types";

const CustomNavLink: React.FC<ICustomNavLink> = ({ to, linkText }) => {
  const location = useLocation();
  return (
    <NavHashLink
    smooth
      to={to}
      className={location.hash === to ? " selectedSection " : ""}
    >{linkText}</NavHashLink>
  );
};

export default CustomNavLink;
