import React from "react";

const Selector = () => {
  return (
    <div className="selector">
      <div className="front">
        <span>Select your news</span>
      </div>
      <div className="items">
        <div className="item">
          <span>Angular</span>
        </div>
        <div className="item">
          <span>Reactjs</span>
        </div>
        <div className="item">
          <span>Vuejs</span>
        </div>
      </div>
    </div>
  );
};

export default Selector;
