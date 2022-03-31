import React from "react";
import ReactPaginate from "react-paginate";

import "../styles/components/pagination.sass";

const Pagination = ({ pageSelected, totalPages, actualPage }) => {
  const triggerChangePage = (data) => {
    pageSelected(data.selected);
  };

  return (
    <div className="pagination">
      <ReactPaginate
        previousLabel="<"
        nextLabel=">"
        pageCount={totalPages}
        pageRange={2}
        marginPagesDisplayed={2}
        onPageChange={triggerChangePage}
        containerClassName={"container"}
        previousLinkClassName={"page"}
        breakClassName={"page"}
        nextLinkClassName={"page"}
        pageClassName={"page"}
        disabledClassNae={"disabled"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default Pagination;
