import React, { useState } from 'react';
import Modal from '../../../Components/Modal/Modal';
import Pagination from '../../../Components/Pagination/Pagination';
import './styles.css';
import Header from '../../../Components/HeaderContent';


const Carros = () => {
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
          <h1>Carros</h1>
          <div className="Prod-grid">
            <div className="Prod">
              <h1>Vectra 94/95 2.0 8v</h1>
              <img src="assetss/imagens/carros/Vectra.jpeg" alt="Vectra 94/95 2.0 8v" />
              <p>Vectra 94/95 2.0 8v</p>
              <span>R$15.000,00</span>
              <button className="vis-prod" onClick={() => openModal
                ('Vectra 94/95 2.0 8v',
                  'assetss/imagens/carros/Vectra.jpeg',
                  <span>'R$15.000,00'</span>,
                  ['Doc: Tudo em Dia', 'Carro Antigo,tem detalhes', 'Rodas 17 e 4 pneus Novos'])}> Ver Mais</button>
            </div>
            <div className="Prod">
              <h1>Vectra 94/95 2.0 8v</h1>
              <img src="assetss/imagens/carros/Vectra.jpeg" alt="Vectra 94/95 2.0 8v" />
              <p>Vectra 94/95 2.0 8v</p>
              <span>R$15.000,00</span>
              <button className="vis-prod" onClick={() => openModal
                ('Vectra 94/95 2.0 8v',
                  'assetss/imagens/carros/Vectra.jpeg',
                  <span>'R$15.000,00'</span>,
                  ['Doc: Tudo em Dia', 'Carro Antigo,tem detalhes', 'Rodas 17 e 4 pneus Novos'])}> Ver Mais</button>
            </div>
            <div className="Prod">
              <h1>Vectra 94/95 2.0 8v</h1>
              <img src="assetss/imagens/carros/Vectra.jpeg" alt="Vectra 94/95 2.0 8v" />
              <p>Vectra 94/95 2.0 8v</p>
              <span>R$15.000,00</span>
              <button className="vis-prod" onClick={() => openModal
                ('Vectra 94/95 2.0 8v',
                  'assetss/imagens/carros/Vectra.jpeg',
                  <span>'R$15.000,00'</span>,
                  ['Doc: Tudo em Dia', 'Carro Antigo,tem detalhes', 'Rodas 17 e 4 pneus Novos'])}> Ver Mais</button>
            </div>
            <div className="Prod">
              <h1>Vectra 94/95 2.0 8v</h1>
              <img src="assetss/imagens/carros/Vectra.jpeg" alt="Vectra 94/95 2.0 8v" />
              <p>Vectra 94/95 2.0 8v</p>
              <span>R$15.000,00</span>
              <button className="vis-prod" onClick={() => openModal
                ('Vectra 94/95 2.0 8v',
                  'assetss/imagens/carros/Vectra.jpeg',
                  <span>'R$15.000,00'</span>,
                  ['Doc: Tudo em Dia', 'Carro Antigo,tem detalhes', 'Rodas 17 e 4 pneus Novos'])}> Ver Mais</button>
            </div>
            <div className="Prod">
              <h1>Vectra 94/95 2.0 8v</h1>
              <img src="assetss/imagens/carros/Vectra.jpeg" alt="Vectra 94/95 2.0 8v" />
              <p>Vectra 94/95 2.0 8v</p>
              <span>R$15.000,00</span>
              <button className="vis-prod" onClick={() => openModal
                ('Vectra 94/95 2.0 8v',
                  'assetss/imagens/carros/Vectra.jpeg',
                  <span>'R$15.000,00'</span>,
                  ['Doc: Tudo em Dia', 'Carro Antigo,tem detalhes', 'Rodas 17 e 4 pneus Novos'])}> Ver Mais</button>
            </div>
            <div className="Prod">
              <h1>Vectra 94/95 2.0 8v</h1>
              <img src="assetss/imagens/carros/Vectra.jpeg" alt="Vectra 94/95 2.0 8v" />
              <p>Vectra 94/95 2.0 8v</p>
              <span>R$15.000,00</span>
              <button className="vis-prod" onClick={() => openModal
                ('Vectra 94/95 2.0 8v',
                  'assetss/imagens/carros/Vectra.jpeg',
                  <span>'R$15.000,00'</span>,
                  ['Doc: Tudo em Dia', 'Carro Antigo,tem detalhes', 'Rodas 17 e 4 pneus Novos'])}> Ver Mais</button>
            </div>
            <div className="Prod">
              <h1>Vectra 94/95 2.0 8v</h1>
              <img src="assetss/imagens/carros/Vectra.jpeg" alt="Vectra 94/95 2.0 8v" />
              <p>Vectra 94/95 2.0 8v</p>
              <span>R$15.000,00</span>
              <button className="vis-prod" onClick={() => openModal
                ('Vectra 94/95 2.0 8v',
                  'assetss/imagens/carros/Vectra.jpeg',
                  <span>'R$15.000,00'</span>,
                  ['Doc: Tudo em Dia', 'Carro Antigo,tem detalhes', 'Rodas 17 e 4 pneus Novos'])}> Ver Mais</button>
            </div>
            <div className="Prod">
              <h1>Vectra 94/95 2.0 8v</h1>
              <img src="assetss/imagens/carros/Vectra.jpeg" alt="Vectra 94/95 2.0 8v" />
              <p>Vectra 94/95 2.0 8v</p>
              <span>R$15.000,00</span>
              <button className="vis-prod" onClick={() => openModal
                ('Vectra 94/95 2.0 8v',
                  'assetss/imagens/carros/Vectra.jpeg',
                  <span>'R$15.000,00'</span>,
                  ['Doc: Tudo em Dia', 'Carro Antigo,tem detalhes', 'Rodas 17 e 4 pneus Novos'])}> Ver Mais</button>
            </div>
            <div className="Prod">
              <h1>Vectra 94/95 2.0 8v</h1>
              <img src="assetss/imagens/carros/Vectra.jpeg" alt="Vectra 94/95 2.0 8v" />
              <p>Vectra 94/95 2.0 8v</p>
              <span>R$15.000,00</span>
              <button className="vis-prod" onClick={() => openModal
                ('Vectra 94/95 2.0 8v',
                  'assetss/imagens/carros/Vectra.jpeg',
                  <span>'R$15.000,00'</span>,
                  ['Doc: Tudo em Dia', 'Carro Antigo,tem detalhes', 'Rodas 17 e 4 pneus Novos'])}> Ver Mais</button>
            </div>
          </div>
        </div>
        <Pagination />
        {modalData && <Modal {...modalData} closeModal={closeModal} />}
      </div>

    </div>

  );
};

export default Carros;
