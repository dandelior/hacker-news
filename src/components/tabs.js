import React from "react";

import "../styles/components/tabs.sass";

const Tabs = () => {
  return (
    <div className="tabs">
      <div className="tab active">All</div>
      <div className="tab">My faves</div>
    </div>
  );
};

export default Tabs;
