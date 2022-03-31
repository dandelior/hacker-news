import React, { useState, useEffect } from "react";
import Newsitem from "./newsItem";
import Selector from "./selector";
import Pagination from "./pagination";

import "../styles/components/newsGrid.sass";

const Newsgrid = () => {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState("angular");
  const [page, setPage] = useState(0);

  useEffect(() => {
    const getData = async () => {
      fetch(
        `https://hn.algolia.com/api/v1/search_by_date?query=${query}&hitsPerPage=8&page=${page}`
      )
        .then((response) => response.json())
        .then((resultData) => setData(resultData));
    };
    getData();
  }, [query, page]);

  const atSelectFilter = (e) => {
    setQuery(e);
    setPage(0);
  };
  const atPageChange = (e) => setPage(e);

  console.log(data);

  return (
    <>
      <Selector filterSelected={atSelectFilter} />
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
      <Pagination
        pageSelected={atPageChange}
        totalPages={data && data.nbPages}
        actualPage={data && data.page}
      />
    </>
  );
};

export default Newsgrid;
