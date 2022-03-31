import React from "react";

import "../styles/components/header.sass";

import Logo3x from "../assets/img/hacker-news@3x.png";
import Logo2x from "../assets/img/hacker-news@2x.png";
import Logo from "../assets/img/hacker-news.png";

const Header = () => {
  return (
    <header>
      <a href="/">
        <picture>
          <source srcSet={Logo3x} media="(min-width: 1024px)" />
          <source srcSet={Logo2x} media="(min-width: 768px)" />
          <img src={Logo} alt="Logo" />
        </picture>
      </a>
    </header>
  );
};

export default Header;
