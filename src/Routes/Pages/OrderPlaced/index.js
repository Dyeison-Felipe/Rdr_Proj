import HeaderContent from "../../../Components/HeaderContent";
import './style.css';

export default function OrderPlaced(){
    return(
        <div className="renann">
            <HeaderContent/>
            <div className="apresentacao-final">
                <h1>Pedido Realizado</h1>
                <strong>Pedido: #987654</strong> <br/>
                <strong>Data: 31/05/2024</strong> <br/>
                <strong>Cliente: Renann Felipe Volff</strong> <br/>
                <strong>Total: R$ 34.650,00 (Subtotal: R$ 34.500,00 | Frete: R$ 150,00)</strong> <br/>
                <strong>Entrega: Rua das Palmeiras, 456, Apto 78, Centro, Rio de Janeiro, RJ, 12345-678</strong> <br/>
                <strong>Status: Processando (Entrega em 5-7 dias úteis)</strong> <br/>
                <h3> Obrigado pela compra Renann!</h3>
            </div>
        </div>
    )
}