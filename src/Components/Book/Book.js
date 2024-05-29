import React from 'react';

const Book = ({ book, openModal }) => {
  return (
    <div className="book">
      <h1>{book.title}</h1>
      <img src={book.img} alt={book.title} />
      <p>{book.title}</p>
      <button
        className="ler-livro"
        onClick={() => openModal(book.title, book.img, book.summary)}
      >
        Ver Mais
      </button>
    </div>
  );
};

export default Book;