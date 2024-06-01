import React, { useState } from 'react';
import Modal from '../../../Components/Modal/Modal';
import Pagination from '../../../Components/Pagination/Pagination';
import './styles.css';
import Header from '../../../Components/HeaderContent';

const Eletronicos = () => {
  const [modalData, setModalData] = useState(null);

  const openModal = (title, imageSrc, summary, description) => {
    setModalData({ title, imageSrc, summary, description });
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <div>
      <Header />
      <div className="Ruan">
        <div className="container">
          <h1>Eletronicos</h1>
          <div className="Prod-grid">
            <div className="Prod">
              <h1>Gabinete gamer</h1>
              <img src="assetss/imagens/Computadores/pccc.jpg" alt="Vectra 94/95 2.0 8v" />
              <p>-------------</p>
              <span>R$350,00</span>
              <button className="vis-prod" onClick={() => openModal
                ('Gabinete gamer',
                  'assetss/imagens/Computadores/pccc.jpg',
                  <span>'R$350,00'</span>,
                  ['Cor: Branco ', 'Largura: 80cm', 'Altura: 80cm'])}> Ver Mais</button>
            </div>
            <div className="Prod">
              <h1>Gabinete gamer</h1>
              <img src="assetss/imagens/Computadores/pccc.jpg" alt="Vectra 94/95 2.0 8v" />
              <p>-------------</p>
              <span>R$350,00</span>
              <button className="vis-prod" onClick={() => openModal
                ('Gabinete gamer',
                  'assetss/imagens/Computadores/pccc.jpg',
                  <span>'R$350,00'</span>,
                  ['Cor: Branco ', 'Largura: 80cm', 'Altura: 80cm'])}> Ver Mais</button>
            </div>
            <div className="Prod">
              <h1>Gabinete gamer</h1>
              <img src="assetss/imagens/Computadores/pccc.jpg" alt="Vectra 94/95 2.0 8v" />
              <p>-------------</p>
              <span>R$350,00</span>
              <button className="vis-prod" onClick={() => openModal
                ('Gabinete gamer',
                  'assetss/imagens/Computadores/pccc.jpg',
                  <span>'R$350,00'</span>,
                  ['Cor: Branco ', 'Largura: 80cm', 'Altura: 80cm'])}> Ver Mais</button>
            </div>
            <div className="Prod">
              <h1>Gabinete gamer</h1>
              <img src="assetss/imagens/Computadores/pccc.jpg" alt="Vectra 94/95 2.0 8v" />
              <p>-------------</p>
              <span>R$350,00</span>
              <button className="vis-prod" onClick={() => openModal
                ('Gabinete gamer',
                  'assetss/imagens/Computadores/pccc.jpg',
                  <span>'R$350,00'</span>,
                  ['Cor: Branco ', 'Largura: 80cm', 'Altura: 80cm'])}> Ver Mais</button>
            </div>
            <div className="Prod">
              <h1>Gabinete gamer</h1>
              <img src="assetss/imagens/Computadores/pccc.jpg" alt="Vectra 94/95 2.0 8v" />
              <p>-------------</p>
              <span>R$350,00</span>
              <button className="vis-prod" onClick={() => openModal
                ('Gabinete gamer',
                  'assetss/imagens/Computadores/pccc.jpg',
                  <span>'R$350,00'</span>,
                  ['Cor: Branco ', 'Largura: 80cm', 'Altura: 80cm'])}> Ver Mais</button>
            </div>
            <div className="Prod">
              <h1>Gabinete gamer</h1>
              <img src="assetss/imagens/Computadores/pccc.jpg" alt="Vectra 94/95 2.0 8v" />
              <p>-------------</p>
              <span>R$350,00</span>
              <button className="vis-prod" onClick={() => openModal
                ('Gabinete gamer',
                  'assetss/imagens/Computadores/pccc.jpg',
                  <span>'R$350,00'</span>,
                  ['Cor: Branco ', 'Largura: 80cm', 'Altura: 80cm'])}> Ver Mais</button>
            </div>
            <div className="Prod">
              <h1>Gabinete gamer</h1>
              <img src="assetss/imagens/Computadores/pccc.jpg" alt="Vectra 94/95 2.0 8v" />
              <p>-------------</p>
              <span>R$350,00</span>
              <button className="vis-prod" onClick={() => openModal
                ('Gabinete gamer',
                  'assetss/imagens/Computadores/pccc.jpg',
                  <span>'R$350,00'</span>,
                  ['Cor: Branco ', 'Largura: 80cm', 'Altura: 80cm'])}> Ver Mais</button>
            </div>
            <div className="Prod">
              <h1>Gabinete gamer</h1>
              <img src="assetss/imagens/Computadores/pccc.jpg" alt="Vectra 94/95 2.0 8v" />
              <p>-------------</p>
              <span>R$350,00</span>
              <button className="vis-prod" onClick={() => openModal
                ('Gabinete gamer',
                  'assetss/imagens/Computadores/pccc.jpg',
                  <span>'R$350,00'</span>,
                  ['Cor: Branco ', 'Largura: 80cm', 'Altura: 80cm'])}> Ver Mais</button>
            </div>
            <div className="Prod">
              <h1>Gabinete gamer</h1>
              <img src="assetss/imagens/Computadores/pccc.jpg" alt="Vectra 94/95 2.0 8v" />
              <p>-------------</p>
              <span>R$350,00</span>
              <button className="vis-prod" onClick={() => openModal
                ('Gabinete gamer',
                  'assetss/imagens/Computadores/pccc.jpg',
                  <span>'R$350,00'</span>,
                  ['Cor: Branco ', 'Largura: 80cm', 'Altura: 80cm'])}> Ver Mais</button>
            </div>
          </div>
        </div>
        <Pagination />
        {modalData && <Modal {...modalData} closeModal={closeModal} />}
      </div>
    </div>

  );
};

export default Eletronicos;
