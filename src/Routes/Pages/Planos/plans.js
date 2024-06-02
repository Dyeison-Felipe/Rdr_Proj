import React from "react";
import Header from '../../../Components/HeaderInitial/index.js'
import Plan from '../../../Components/Plan_card/plan_card.js'

import "./style.css";

const index = () => {
  return (
    <div className="Dyeison2">
      <Header/>
      <section className="text-plan">
        <h1>
          Transforme Seu Potencial em Lucro: Torne-se um Vendedor da{" "}
          <strong>RDR</strong>
        </h1>
        <p>
          Você está buscando uma oportunidade para maximizar seus ganhos e
          explorar seu potencial empreendedor? Na RDR, oferecemos uma plataforma
          que permite a você vender uma ampla gama de produtos de alta qualidade
          e lucrar com suas vendas. Nosso programa é projetado para se adaptar
          às suas necessidades e ajudá-lo a crescer. Descubra como se tornar um
          vendedor da RDR pode transformar sua trajetória profissional.
        </p>

        <h2>Por Que Escolher a RDR?</h2>

        <p>
          <strong>Diversidade de Produtos:</strong> Nossa empresa oferece uma
          variedade de produtos que atendem a diferentes nichos de mercado. Isso
          significa mais opções para você vender e mais oportunidades de
          alcançar uma ampla base de clientes.
        </p>

        <p>
          <strong>Planos Flexíveis:</strong> Entendemos que cada vendedor tem
          necessidades diferentes, por isso, criamos quatro planos que se
          ajustam ao seu perfil e objetivos:{" "}
        </p>

        <ul>
          <li>
            <strong>Plano Básico:</strong> Ideal para quem está começando. Pague
            uma taxa mensal acessível e comece a vender um número limitado de
            produtos. Taxa de comissão mais alta.
          </li>

          <li>
            <strong> Plano Intermediário:</strong> Aumente seu portfólio de
            produtos e beneficie-se de uma taxa de comissão reduzida.
          </li>

          <li>
            <strong>Plano Avançado: </strong>Venda uma quantidade maior de
            produtos com ainda mais vantagens na comissão.
          </li>

          <li>
            <strong> Plano Premium: </strong>Máximo de produtos permitidos e a
            menor taxa de comissão. Perfeito para vendedores experientes que
            querem maximizar seus lucros
          </li>
        </ul>
        <p>
          <strong>Ganhos Crescentes: </strong>Quanto mais alto o plano, mais
          produtos você pode vender e menor será a taxa de comissão. Isso
          significa que seu potencial de lucro aumenta à medida que você investe
          no seu crescimento.
        </p>

        <p>
          <strong>Suporte e Treinamento: </strong> Não importa qual plano você
          escolha, nossa equipe está aqui para oferecer suporte completo.
          Disponibilizamos treinamentos, materiais de marketing e assistência
          contínua para garantir que você tenha todas as ferramentas necessárias
          para o sucesso.
        </p>

        <p>
          <strong>Liberdade e Flexibilidade: </strong>Trabalhe no seu próprio
          ritmo, nos horários que forem mais convenientes para você. Nossa
          plataforma é fácil de usar e permite que você gerencie suas vendas de
          qualquer lugar.
        </p>

        <h2>Como Funciona?</h2>

        <p>
          É simples! Escolha o plano que melhor se adapta às suas necessidades e
          objetivos. Pague a taxa mensal correspondente, cadastre os produtos
          permitidos pelo plano e comece a vender. A cada venda, você ganha uma
          comissão, que varia de acordo com o plano escolhido.
        </p>

        <h1>Junte-se a Nós Hoje</h1>

        <p>
          Não perca essa chance de transformar seu potencial em lucro real. A
          RDR está aqui para apoiar seu crescimento e sucesso.
          Inscreva-se hoje, escolha seu plano e comece a vender produtos que
          você acredita e confia. Clique aqui para se inscrever e dar o primeiro
          passo rumo ao seu sucesso. Estamos ansiosos para ver você prosperar
          como nosso novo vendedor.
        </p>

        <h4>Escolha um plano que melhor se adapta a você.</h4>
      </section>

      <div className="our-plans">
        <Plan/>
      </div>

    </div>
  );
};

export default index;
