import "./style.css";

import HeaderContent from "../../../Components/HeaderContent";
import { Link } from "react-router-dom";

export default function ShopCart() {
  return (
    <div className="renann">
      <HeaderContent />


        <div id="cabeçalho=principal-c">
          <h1 className="meu-carrinho-c">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="imagem-vendas-c bi bi-cart4"
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
            </svg>{" "}
            Meu Carrinho
          </h1>
        </div>

        <div id="area-principal-c">
          <div>
            <div className="titulo-produtos-c">
              <span className="classe-primeiracoluna-c">Produto(s)</span>
              <span className="classe-segundacoluna-c">Quantidade</span>
              <span className="classe-terceiracoluna-c">Preço Total</span>
            </div>
            <div className="produto-carrinho-c">
              <div className="classe-primeiracoluna-c primeira-div-c">
                <div>
                  <img
                    className="imagem-produto-c"
                    src="/assetss/imagens/carros/Vectra.jpeg"
                    width="135"
                    alt="Veiculo Vectra"
                  />
                </div>
                <div className="descricao-produto-c">
                  <div className="informacao-produto-c">
                    <strong>Vectra 94/95 2.0 8v</strong>
                    <span className="cor-produto-c">Vermelho</span>
                  </div>
                  <span className="vendedor-c">-----------------</span>
                </div>
              </div>

              <div className="classe-segundacoluna-c segunda-div-c">
                <div className="quantidade-produto-c">
                  <div className="campo-quantidade-c">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      className="bi bi-trash3"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                    </svg>{" "}
                    <input className="quantidade-c" type="number" />
                  </div>
                  <span className="remover-c">Remover</span>
                </div>
              </div>

              <div className="classe-terceiracoluna-c terceira-div-c">
                <span className="valor-anterior-c">R$ 36.250,00</span>
                <span className="valor-atual-c">R$ 15.000,00</span>
                <span className="formato-valor-c"> no Dinheiro ou Pix</span>
              </div>
            </div>
          </div>

          <div>
            <div className="produto-carrinho-c">
              <div className="classe-primeiracoluna-c primeira-div-c">
                <div>
                  <img
                    className="imagem-produto-c"
                    src="/Renault Clio 1.0 16v.jpeg"
                    alt="Renault Clio 1.0"
                  />
                </div>
                <div className="descricao-produto-c">
                  <div className="informacao-produto-c">
                    <strong>Renault Clio 1.0, 16v, 2016, Completo</strong>
                    <span className="cor-produto-c">Vermelho</span>
                  </div>
                  <span className="vendedor-c">
                    {" "}
                    Vendido e entregue por Renann Felipe
                  </span>
                </div>
              </div>

              <div className="classe-segundacoluna-c segunda-div-c">
                <div className="quantidade-produto-c">
                  <div className="campo-quantidade-c">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      className="bi bi-trash3"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                    </svg>{" "}
                    <input className="quantidade-c" type="number" />
                  </div>
                  <span className="remover-c">Remover</span>
                </div>
              </div>

              <div className="classe-terceiracoluna-c terceira-div-c">
                <span className="valor-anterior-c">R$ 36.250,00</span>
                <span className="valor-atual-c">R$ 34.500,00</span>
                <span className="formato-valor-c"> no Dinheiro ou Pix</span>
              </div>
            </div>
          </div>
        </div>

    </div>
  );
}
