import React, { useState } from 'react';

const Pagination = () => {
  const [activePage, setActivePage] = useState(1);

  const handlePageClick = (page) => {
    setActivePage(page);
  };

  return (
    <div className="pagination">
      <a href="#" className="prev">«</a>
      {[1, 2, 3].map((page) => (
        <a
          href="#"
          key={page}
          className={`page ${activePage === page ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            handlePageClick(page);
          }}
        >
          {page}
        </a>
      ))}
      <a href="#" className="next">»</a>
    </div>
  );
};

export default Pagination;