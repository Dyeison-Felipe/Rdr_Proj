import { Route,Routes, BrowserRouter } from "react-router-dom";
import ContentInitial from './Routes/Pages/ContentInitial/index'
import Erro from './Routes/Pages/Erro'
import Login from './Routes/Pages/Login'
import Register from './Routes/Pages/Register'
import Footer from './Components/Footer'
import ShopCart from "./Routes/Pages/ShopCart"
import Payment from "./Routes/Pages/Payment"
import OrderPlaced from "./Routes/Pages/OrderPlaced";
import Produtos from './Routes/Pages/Produtos/Home'
import Eletronicos from './Routes/Pages/Produtos/Eletronicos'
import Roupa from './Routes/Pages/Produtos/Roupas'
import Carros from "./Routes/Pages/Produtos/Carros";
import Plans from './Routes/Pages/Planos/plans'

const RoutesApp = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContentInitial/>}/>
        <Route path="/planos" element={<Plans/>} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/produtos" element={<Produtos/>}/>
        <Route path="/shop-cart" element={<ShopCart/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/orderplaced-finalizacao" element={<OrderPlaced/>}/>
        <Route path="/carros" element={<Carros/>}/>
        <Route path="/roupas" element={<Roupa/>}/>
        <Route path="/eletros" element={<Eletronicos/>}/>
        <Route path="*" element={<Erro/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default RoutesApp