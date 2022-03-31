import React, { useState, useEffect } from "react";
import Newsitem from "./newsItem";

import "../styles/components/newsGrid.sass";

const Newsgrid = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      return await fetch(
        "https://hn.algolia.com/api/v1/search_by_date?query=reactjs&hitsPerPage=10&page=0"
      )
        .then((response) => response.json())
        .then((resultData) => setData(resultData));
    };
    getData();
  }, []);

  console.log(data);

  return (
    <div className="news-grid">
      {data &&
        data.hits.map((news, index) => {
          return (
            <Newsitem
              title={news.story_title}
              link={news.story_url}
              createdAt={news.created_at}
              author={news.author}
              key={index}
            />
          );
        })}
    </div>
  );
};

export default Newsgrid;
