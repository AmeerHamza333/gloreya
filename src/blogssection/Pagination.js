import React from 'react';
const Pagination = ({ todosPerPage, totalTodos, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalTodos / todosPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className='pagination' style={{display: "flex", justifyContent: "center", gap: "5px", listStyle: "none"}}>
        {pageNumbers.map(number => (
          <li key={number} className='page-item pagg'>
            <a onClick={() => paginate(number)}  className='page-link'>
              {number}
            </a>
          </li>



        ))}
      </ul>
    </nav>
  );
};
export default Pagination;