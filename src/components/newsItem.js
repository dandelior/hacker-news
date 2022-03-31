import React from "react";

import Favicon from "./favIcon";
import IconTime from "../assets/icons/icon-time.svg";

import "../styles/components/NewsItem.sass";

const dayjs = require("dayjs");
var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

const Newsitem = ({ title, link, createdAt, author }) => {
  return (
    <div className="news-item">
      <div className="news-info">
        <div className="data">
          <img src={IconTime} alt="icon of time" />
          <span>
            {/* {createdAt} */}
            {dayjs(createdAt).fromNow()} by {author}
          </span>
        </div>
        <a href={link} target="_blank" rel="noreferrer">
          <h3 className="title">{title}</h3>
        </a>
      </div>
      <div className="news-fav">
        <Favicon />
      </div>
    </div>
  );
};

export default Newsitem;
