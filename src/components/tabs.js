import React, { useState } from "react";

import "../styles/components/tabs.sass";

const Tabs = ({ detectClick }) => {
  const [activeAllTab, setActiveAllTab] = useState(true);
  const [activeFavsTab, setActiveFavsTab] = useState(false);

  const triggerActiveAllTab = () => {
    setActiveAllTab(true);
    setActiveFavsTab(false);
    detectClick("all");
  };

  const triggerActiveFavsTab = () => {
    setActiveFavsTab(true);
    setActiveAllTab(false);
    detectClick("favs");
  };

  return (
    <div className="tabs">
      <div
        className={`tab ${activeAllTab && "active"}`}
        onClick={triggerActiveAllTab}
      >
        All
      </div>
      <div
        className={`tab ${activeFavsTab && "active"}`}
        onClick={triggerActiveFavsTab}
      >
        My faves
      </div>
    </div>
  );
};

export default Tabs;
