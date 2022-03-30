import React from "react";
import Favicon from "./favIcon";

import IconTime from "../assets/icons/icon-time.svg";

const Newsitem = () => {
  return (
    <div className="news-item">
      <div className="news-info">
        <div className="data">
          <img src={IconTime} alt="icon of time" />
          <span>3 hours ago by author</span>
        </div>
        <h3 className="title">
          Yes, React is taking over front-end development. The question is why.
        </h3>
      </div>
      <div className="news-fav">
        <Favicon />
      </div>
    </div>
  );
};

export default Newsitem;
