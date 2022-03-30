import React from "react";

import "../styles/components/pagination.sass";

const Pagination = () => {
  return (
    <div className="pagination">
      <div className="page-item">&lt;</div>
      <div className="page-item active">1</div>
      <div className="page-item">2</div>
      <div className="page-item">3</div>
      <div className="page-item">&gt;</div>
    </div>
  );
};

export default Pagination;
