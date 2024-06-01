import { Route,Routes, BrowserRouter } from "react-router-dom";
import ContentInitial from './Routes/Pages/ContentInitial/index'
import Erro from './Routes/Pages/Erro'
import Login from './Routes/Pages/Login'
import Register from './Routes/Pages/Register'
import Footer from './Components/Footer'
import Produtos from './Routes/Pages/Produtos/Home'
import Elet from './Routes/Pages/Produtos/Home'

const RoutesApp = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/co" element={<ContentInitial/>}/>
        <Route path="/" element={<Elet/>}/>
        <Route path="/produtos" element={<Produtos/>}/>
        <Route path="/erro" element={<Erro/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default RoutesApp