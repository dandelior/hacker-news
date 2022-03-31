import React from "react";

import AngularIcon3x from "../assets/icons/image-138@3x.png";
import AngularIcon2x from "../assets/icons/image-138@2x.png";
import AngularIcon from "../assets/icons/image-138.png";
import ReactIcon3x from "../assets/icons/image-140@3x.png";
import ReactIcon2x from "../assets/icons/image-140@2x.png";
import ReactIcon from "../assets/icons/image-140.png";
import VueIcon3x from "../assets/icons/image-141@3x.png";
import VueIcon2x from "../assets/icons/image-141@2x.png";
import VueIcon from "../assets/icons/image-141.png";

import "../styles/components/selector.sass";

const Selector = () => {
  return (
    <div className="selector">
      <div className="front">
        <span>Select your news</span>
      </div>
      <div className="items">
        <div className="item">
          <picture>
            <source srcSet={AngularIcon3x} media="(min-width: 1024px)" />
            <source srcSet={AngularIcon2x} media="(min-width: 768px)" />
            <img src={AngularIcon} alt="Angular icon" />
          </picture>
          <span>Angular</span>
        </div>
        <div className="item">
          <picture>
            <source srcSet={ReactIcon3x} media="(min-width: 1024px)" />
            <source srcSet={ReactIcon2x} media="(min-width: 768px)" />
            <img src={ReactIcon} alt="React icon" />
          </picture>
          <span>Reactjs</span>
        </div>
        <div className="item">
          <picture>
            <source srcSet={VueIcon3x} media="(min-width: 1024px)" />
            <source srcSet={VueIcon2x} media="(min-width: 768px)" />
            <img src={VueIcon} alt="Vue icon" />
          </picture>
          <span>Vuejs</span>
        </div>
      </div>
    </div>
  );
};

export default Selector;
