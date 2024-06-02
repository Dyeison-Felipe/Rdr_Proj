import "./style.css";
import { Link } from "react-router-dom";
import HeaderContent from "../../../Components/HeaderContent";
import React, { useState } from "react";

export default function Payment() {
  // const [modalIsOpen, setModalIsOpen] = useState(false);

  const [formaPagamento, setFormaPagamento] = useState("");

  const [cupomDescontoAdicionado, setCupomDescontoAdicionado] = useState(false);

  const CartaoCreditoForm = () => {
    return (
      <div>
        <label>Nome do titular:</label>
        <input type="text" />
        <br />
        <label>Número do cartão:</label>
        <input type="text" />
        <br />
        <label>Data de vencimento:</label>
        <input type="text" />
        <br />
        <label>Código de segurança:</label>
        <input type="text" />
      </div>
    );
  };

  const PixForm = () => {
    return (
      <div>
        <span className="fiu-eopix">Pagamento aprovado na hora!</span>
      </div>
    );
  };

  const BoletonForm = () => {
    return (
      <div>
        <span className="boleton">
          O Pagamento deve ser realizado em 2-3 dias úteis até o prazo de seu
          vencimento em uma casa lotérica ou em caixas bancários.
        </span>
      </div>
    );
  };

  const DescontoForm = () => {
    return (
      <div>
        <span className="cupom-desconto">
          Seu cupom de desconto foi adicionado!
        </span>
      </div>
    );
  };

  return (
    <>
      <div className="renann">
        <HeaderContent />
        <h2 className="h2">Pagamento</h2>
        <div className="pagamento-c">
          <div className="campos-pagamento-c">
            <div className="cupom-desconto-c">
              <span className="texto-desconto-c">Cupom de Desconto</span>
              <input
                className="campo-cupom-c"
                placeholder="Você possui um cupom de desconto? Digite aqui"
              />
              <button
                className="campo-botao-c"
                onClick={() => setCupomDescontoAdicionado(true)}
              >
                OK
              </button>
              {cupomDescontoAdicionado && <DescontoForm />}
            </div>
            <div className="formas-pagamento-c">
              <span>Pagamento</span>

              <div
                className="pagamento-geral-c"
                onClick={() => setFormaPagamento("Pix")}
              >
                <div className="selecionar-pagamento-c">
                  <input type="radio" id="pix-c" name="formapagamento" />
                  <svg
                    width="25"
                    height="20"
                    viewBox="0 0 40 40"
                    fill="none"
                    className="nofill"
                  >
                    <path
                      d="M8.904 30.337c1.544 0 2.992-.6 4.088-1.697l5.904-5.904a1.121 1.121 0 011.552 0l5.92 5.92a5.756 5.756 0 004.088 1.697h1.16l-7.472 7.471a5.978 5.978 0 01-8.456 0L8.192 30.33h.712v.008zM30.448 9.464c-1.544 0-2.992.6-4.088 1.696l-5.92 5.928a1.098 1.098 0 01-1.552 0l-5.904-5.904a5.756 5.756 0 00-4.088-1.696h-.712l7.496-7.496a5.978 5.978 0 018.456 0l7.472 7.472h-1.16z"
                      fill="#000"
                    ></path>
                    <path
                      d="M1.992 15.687l4.464-4.464h2.448c1.064 0 2.104.432 2.856 1.184l5.904 5.904a2.831 2.831 0 004 .008l5.92-5.92a4.066 4.066 0 012.856-1.184h2.896l4.488 4.488a5.978 5.978 0 010 8.456l-4.488 4.488H30.44a4.066 4.066 0 01-2.856-1.184l-5.92-5.92c-1.072-1.072-2.936-1.072-4.008 0l-5.896 5.872A4.066 4.066 0 018.904 28.6H6.456l-4.464-4.464a5.968 5.968 0 010-8.448z"
                      fill="#000"
                    ></path>
                  </svg>
                  <label for="pix-c">Pix</label>
                </div>
                {formaPagamento === "Pix" && <PixForm />}
                <span>Total a vista R$ 34.500,00</span>
              </div>

              <div className="pagamento-geral-c">
                <div className="selecionar-pagamento-c">
                  <input
                    type="radio"
                    id="cartao-credito-c"
                    name="formapagamento"
                  />
                  <svg
                    width="25"
                    height="20"
                    viewBox="0 0 40 40"
                    fill="none"
                    className="nofill"
                  >
                    <path
                      d="M34.55 7H5.45C2.993 7 1 9.131 1 11.76v16.48C1 30.868 2.993 33 5.45 33h29.1c2.458 0 4.45-2.131 4.45-4.76V11.76C39 9.132 37.008 7 34.55 7z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M34.55 12.31h-1.712c-.662 0-1.198.574-1.198 1.281v1.832c0 .707.536 1.281 1.198 1.281h1.712c.661 0 1.198-.574 1.198-1.282v-1.83c0-.708-.537-1.282-1.198-1.282zM12.297 12.31H5.45c-.661 0-1.198.574-1.198 1.281v1.832c0 .707.537 1.281 1.198 1.281h6.847c.662 0 1.198-.574 1.198-1.282v-1.83c0-.708-.536-1.282-1.198-1.282z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M3.739 25.676h6.847m1.711 0h6.847m1.712 0h6.847m1.711 0h6.847M5.451 7H34.55C37.008 7 39 9.131 39 11.76v16.48c0 2.629-1.992 4.76-4.45 4.76H5.45C2.993 33 1 30.869 1 28.24V11.76C1 9.132 2.993 7 5.45 7zm27.387 5.31h1.712c.661 0 1.198.574 1.198 1.281v1.832c0 .707-.537 1.281-1.198 1.281h-1.712c-.662 0-1.198-.574-1.198-1.282v-1.83c0-.708.536-1.282 1.198-1.282zm-27.388 0h6.847c.662 0 1.198.574 1.198 1.281v1.832c0 .707-.536 1.281-1.198 1.281H5.45c-.661 0-1.198-.574-1.198-1.282v-1.83c0-.708.537-1.282 1.198-1.282z"
                      stroke="#000"
                    ></path>
                  </svg>
                  <label for="cartao-credito-c">Cartão de Crédito</label>
                </div>
                {formaPagamento === "Cartão" && <CartaoCreditoForm />}
                <span>Total Parcelado R$ 36.250,00</span>
                <span>Em até 10x de R$ 3.625,00</span>
              </div>

              <div
                className="pagamento-geral-c"
                onClick={() => setFormaPagamento("Boleto")}
              >
                <div className="selecionar-pagamento-c">
                  <input type="radio" id="boletao-c" name="formapagamento" />
                  <svg
                    width="25"
                    height="20"
                    viewBox="0 0 40 40"
                    fill="none"
                    className="nofill"
                  >
                    <path
                      d="M34.55 8H5.45C2.993 8 1 10.018 1 12.507v15.6c0 2.489 1.993 4.506 4.45 4.506h29.1c2.458 0 4.45-2.017 4.45-4.506v-15.6C39 10.017 37.008 8 34.55 8z"
                      fill="#fff"
                      stroke="#000"
                      stroke-width="0.8"
                    ></path>
                    <path d="M8.368 12H3v16h5.368V12z" fill="#000"></path>
                    <path d="M8.368 12H3v16h5.368V12z" fill="#000"></path>
                    <path d="M8.368 12H3v16h5.368V12z" fill="#000"></path>
                    <path
                      d="M8.368 12H3v16h5.368V12zM28.053 12h-5.369v16h5.369V12z"
                      fill="#000"
                    ></path>
                    <path d="M28.053 12h-5.369v16h5.369V12z" fill="#000"></path>
                    <path d="M28.053 12h-5.369v16h5.369V12z" fill="#000"></path>
                    <path
                      d="M28.053 12h-5.369v16h5.369V12zM10.158 12h1.79v16h-1.79V12z"
                      fill="#000"
                    ></path>
                    <path d="M10.158 12h1.79v16h-1.79V12z" fill="#000"></path>
                    <path d="M10.158 12h1.79v16h-1.79V12z" fill="#000"></path>
                    <path
                      d="M10.158 12h1.79v16h-1.79V12zM13.737 12h3.579v16h-3.58V12z"
                      fill="#000"
                    ></path>
                    <path d="M13.737 12h3.579v16h-3.58V12z" fill="#000"></path>
                    <path d="M13.737 12h3.579v16h-3.58V12z" fill="#000"></path>
                    <path
                      d="M13.737 12h3.579v16h-3.58V12zM29.842 12h3.58v16h-3.58V12z"
                      fill="#000"
                    ></path>
                    <path d="M29.842 12h3.58v16h-3.58V12z" fill="#000"></path>
                    <path d="M29.842 12h3.58v16h-3.58V12z" fill="#000"></path>
                    <path
                      d="M29.842 12h3.58v16h-3.58V12zM19.105 12h1.79v16h-1.79V12z"
                      fill="#000"
                    ></path>
                    <path d="M19.105 12h1.79v16h-1.79V12z" fill="#000"></path>
                    <path d="M19.105 12h1.79v16h-1.79V12z" fill="#000"></path>
                    <path
                      d="M19.105 12h1.79v16h-1.79V12zM35.21 12H37v16h-1.79V12z"
                      fill="#000"
                    ></path>
                    <path d="M35.21 12H37v16h-1.79V12z" fill="#000"></path>
                    <path d="M35.21 12H37v16h-1.79V12z" fill="#000"></path>
                    <path d="M35.21 12H37v16h-1.79V12z" fill="#000"></path>
                  </svg>
                  <label for="boletao-c">Boleto Bancário</label>
                </div>
                {formaPagamento === "Boleto" && <BoletonForm />}
                <span>Total a vista R$ 34.500,00</span>
              </div>
            </div>
          </div>

          <div className="valor-final-c">
            <div className="texto-valor-final-c">
              <span>Valor Produtos</span>
              <span className="decoracao-texto-final-c">R$ 34.500,00</span>
            </div>

            <div className="texto-valor-final-c">
              <span>Descontos</span>
              <span className="decoracao-texto-desconto-c">R$ 0,00</span>
            </div>

            <div className="texto-valor-final-c">
              <span>Frete</span>
              <span className="decoracao-texto-final-c">R$ 150,00</span>
            </div>

            <div className="texto-valor-final-c">
              <span>Total Pedido</span>
              <span className="decoracao-texto-final-c">R$ 34.650,00</span>
            </div>
            <div>
              <Link
                className="campo-botao-final-c"
                to="/orderplaced-finalizacao"
              >
                Finalizar Pedido
              </Link>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
