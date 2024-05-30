import { Link } from "react-router-dom";
import HeaderInitial from "../../../Components/HeaderInitial";
import Fone from "../../../Images/Computadores/fone.jpg";
import "./style.css";

const index = () => {
  return (
    <div className="Dyeison1">
      <HeaderInitial />

      <div className="product-container">
        <div className="product">
          <img src={Fone} alt="Fone de ouvido gamer" />
          <h3>Fone Gamer </h3>
          <p>R$330,00</p>
          <Link to="" className="btn-content">
            Comprar
          </Link>
        </div>

        <div className="product">
          <img src={Fone} alt="Fone de ouvido gamer" />
          <h3>Fone Gamer</h3>
          <p>R$330,00</p>
          <Link to="" className="btn-content">
            Comprar
          </Link>
        </div>

        <div className="product">
          <img src={Fone} alt="Fone de ouvido gamer" />
          <h3>Fone Gamer</h3>
          <p>R$330,00</p>
          <Link to="" className="btn-content">
            Comprar
          </Link>
        </div>

        <div className="product">
          <img src={Fone} alt="Fone de ouvido gamer" />
          <h3>Fone Gamer</h3>
          <p>R$330,00</p>
          <Link to="" className="btn-content">
            Comprar
          </Link>
        </div>
      </div>
      <div className="texto">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio qui
          aperiam recusandae. Voluptas minus perspiciatis reiciendis! Rerum,
          velit nostrum dolore quis officia maiores doloribus, quo ex ullam
          aliquam delectus doloremque. Quae, culpa aspernatur. Non cupiditate
          fuga rerum. Ex adipisci provident odio quo asperiores nihil natus
          corrupti deleniti, officia ea in quisquam eos, earum atque harum
          quibusdam? Provident aperiam exercitationem veniam officia error alias
          excepturi. Ipsa ducimus molestiae sit odio fuga rem, earum voluptatem
          rerum dolorum! Accusamus, enim. Temporibus voluptatum voluptatem minus
          consectetur animi facere iusto aliquid eos ut doloremque, saepe
          tempora aut fuga expedita nesciunt tempore ea sapiente porro quasi.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio qui
          aperiam recusandae. Voluptas minus perspiciatis reiciendis! Rerum,
          velit nostrum dolore quis officia maiores doloribus, quo ex ullam
          aliquam delectus doloremque. Quae, culpa aspernatur. Non cupiditate
          fuga rerum. Ex adipisci provident odio quo asperiores nihil natus
          corrupti deleniti, officia ea in quisquam eos, earum atque harum
          quibusdam? Provident aperiam exercitationem veniam officia error alias
          excepturi. Ipsa ducimus molestiae sit odio fuga rem, earum voluptatem
          rerum dolorum! Accusamus, enim. Temporibus voluptatum voluptatem minus
          consectetur animi facere iusto aliquid eos ut doloremque, saepe
          tempora aut fuga expedita nesciunt tempore ea sapiente porro quasi.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio qui
          aperiam recusandae. Voluptas minus perspiciatis reiciendis! Rerum,
          velit nostrum dolore quis officia maiores doloribus, quo ex ullam
          aliquam delectus doloremque. Quae, culpa aspernatur. Non cupiditate
          fuga rerum. Ex adipisci provident odio quo asperiores nihil natus
          corrupti deleniti, officia ea in quisquam eos, earum atque harum
          quibusdam? Provident aperiam exercitationem veniam officia error alias
          excepturi. Ipsa ducimus molestiae sit odio fuga rem, earum voluptatem
          rerum dolorum! Accusamus, enim. Temporibus voluptatum voluptatem minus
          consectetur animi facere iusto aliquid eos ut doloremque, saepe
          tempora aut fuga expedita nesciunt tempore ea sapiente porro quasi.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio qui
          aperiam recusandae. Voluptas minus perspiciatis reiciendis! Rerum,
          velit nostrum dolore quis officia maiores doloribus, quo ex ullam
          aliquam delectus doloremque. Quae, culpa aspernatur. Non cupiditate
          fuga rerum. Ex adipisci provident odio quo asperiores nihil natus
          corrupti deleniti, officia ea in quisquam eos, earum atque harum
          quibusdam? Provident aperiam exercitationem veniam officia error alias
          excepturi. Ipsa ducimus molestiae sit odio fuga rem, earum voluptatem
          rerum dolorum! Accusamus, enim. Temporibus voluptatum voluptatem minus
          consectetur animi facere iusto aliquid eos ut doloremque, saepe
          tempora aut fuga expedita nesciunt tempore ea sapiente porro quasi.

        </p>
      </div>

      <div className="plans-container">
        <div className="plan-card">
          <h3>Plano Básico</h3>
          <p className="price">R$ 29,90/mês</p>
          <ul>
            <li>2 Anuncio</li>
            <li>Suporte Básico</li>
            <li>Suporte Prioritário</li>
            <li>Retorna 70% do valor do produto</li>
          </ul>
          <button className="buy-button">Comprar</button>
        </div>
        <div className="plan-card">
          <h3>Plano Padrão</h3>
          <p className="price">R$ 59,90/mês</p>
          <ul>
            <li>5 Anuncios</li>
            <li>Suporte Prioritário</li>
            <li>Retorna 80% do valor do produto</li>
          </ul>
          <button className="buy-button">Comprar</button>
        </div>
        <div className="plan-card">
          <h3>Plano Premium</h3>
          <p className="price">R$ 99,90/mês</p>
          <ul>
            <li>15 Anuncios</li>
            <li>Suporte 24/7</li>
            <li>Retorno de 90 % do valor do produto</li>
          </ul>
          <button className="buy-button">Comprar</button>
        </div>
        <div className="plan-card">
          <h3>Plano Empresarial</h3>
          <p className="price">R$ 199,90/mês</p>
          <ul>
            <li>Anuncios Ilimitados</li>
            <li>Gerente de Anuncios Dedicado</li>
            <li>Retorno de 98% do valor do </li>
          </ul>
          <button className="buy-button">Comprar</button>
        </div>
      </div>
    </div>
  );
};

export default index;
