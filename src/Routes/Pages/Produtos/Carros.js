import React, { useState } from 'react';
import Book from '../components/Book';
import Modal from '../components/Modal';
import Pagination from '../components/Pagination';
import books from '../data/books';
import '../styles/styles.css';

const Carros = () => {
  const [modalData, setModalData] = useState(null);

  const openModal = (title, imageSrc, summary) => {
    setModalData({ title, imageSrc, summary });
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <div className="container">
      <h1>Carros</h1>
      <div className="books-grid">
        {books.map((book, index) => (
          <Book key={index} book={book} openModal={openModal} />
        ))}
      </div>
      <Pagination />
      {modalData && <Modal {...modalData} closeModal={closeModal} />}
    </div>
  );
};
 
export default Carros;
