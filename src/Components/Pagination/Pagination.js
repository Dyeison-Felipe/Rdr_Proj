import React, { useState } from 'react';

const Pagination = () => {
  const [activePage, setActivePage] = useState(1);

  const handlePageClick = (page) => {
    setActivePage(page);
  };

  return (
    <div className="pagination">
      <button className="prev" onClick={() => handlePageClick(activePage - 1)} disabled={activePage === 1}>«</button>
      {[1, 2, 3].map((page) => (
        <button
          key={page}
          className={`page ${activePage === page ? 'active' : ''}`}
          onClick={() => handlePageClick(page)}
        >
          {page}
        </button>
      ))}
      <button className="next" onClick={() => handlePageClick(activePage + 1)} disabled={activePage === 3}>»</button>
    </div>
  );
};

export default Pagination;
