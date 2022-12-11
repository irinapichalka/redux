import React from "react";

class Pagination extends React.Component {
  render() {
    const { goPrev, goNext, currentPage, totalItems, itemsPerPage } =
      this.props;
    const pages = Math.ceil(totalItems / itemsPerPage);
    const isPrevPageAvailable = currentPage === 1;
    const isNextPageAvailable = pages === currentPage;
    return (
      <div className="pagination">
        <button className="btn" onClick={goPrev} disabled={isPrevPageAvailable}>
          {!isPrevPageAvailable && "←"}
        </button>
        <span className="pagination__page">{currentPage}</span>
        <button className="btn" onClick={goNext} disabled={isNextPageAvailable}>
          {!isNextPageAvailable && "→"}
        </button>
      </div>
    );
  }
}

export default Pagination;
