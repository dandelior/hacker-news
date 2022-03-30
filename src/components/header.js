import React from "react";

import Logo3x from "../assets/img/hacker-news@3x.png";
import Logo2x from "../assets/img/hacker-news@2x.png";
import Logo from "../assets/img/hacker-news.png";

const Header = () => {
  return (
    <header>
      <picture>
        <source srcset={Logo3x} media="(min-width: 1024px)" />
        <source srcset={Logo2x} media="(min-width: 768px)" />
        <img src={Logo} alt="Logo" />
      </picture>
    </header>
  );
};

export default Header;
