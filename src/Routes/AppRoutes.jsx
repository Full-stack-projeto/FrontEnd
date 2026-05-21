import {Routes,Route} from "react-router-dom";
import { NotFound } from "../pages/notfound/Index";
import Login from "../pages/login/Index";


export function AppRoutes() {
  return (
    <Routes>
          {/* <Route path="/inicio" element={<Inicio/>}/>
        <Route path="/locaisafetados" element={<LocaisAfetados/>}/>
        <Route path="/fazerdoacao" element={<FazerDoacao/>}/>
        <Route path="/sobre" element={<Sobre/>}/> 
        <Route path="/inicio" element={<Cadastro/>}/>  */}
       <Route path="/login" element={<Login/>}/>
        <Route path="/notfound" element={<NotFound/>}/>

    </Routes>

)
}

