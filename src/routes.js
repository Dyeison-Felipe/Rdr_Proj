import { Route,Routes, BrowserRouter } from "react-router-dom";
import ContentInitial from './Routes/Pages/ContentInitial/index'
import HeaderInitial from './Components/HeaderInitial'
import Erro from './Routes/Pages/Erro'
import Login from './Routes/Pages/Login'
import Register from './Routes/Pages/Register'
const RoutesApp = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/header" element={<HeaderInitial/>}/>
        <Route path="/" element={<ContentInitial/>}/>
        <Route path="/erro" element={<Erro/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp