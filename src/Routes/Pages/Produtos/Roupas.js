import React, { useState } from 'react';
import Book from '../components/Book';
import Modal from '../components/Modal';
import Pagination from '../components/Pagination';
import roupas from '../data/roupas';
import '../styless/styles.css';

const Roupas = () => {
  const [modalData, setModalData] = useState(null);

  const openModal = (title, imageSrc, summary) => {
    setModalData({ title, imageSrc, summary });
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <div className="container">
      <h1>Roupas</h1>
      <div className="books-grid">
        {roupas.map((roupa, index) => (
          <Book key={index} book={roupa} openModal={openModal} />
        ))}
      </div>
      <Pagination />
      {modalData && <Modal {...modalData} closeModal={closeModal} />}
    </div>
  );
};

export default Roupas;
