import {Recepcion} from "../pages/recepcion/Recepcion"
import { LoginPage } from "../pages/LoginPage"
import {HomePage} from "../pages/HomePage"
import { Cuenta } from "../pages/cuenta/Cuenta"
import {Preparacion} from "../pages/preparacion/Preparacion"
import {Reports} from "../pages/reportes/Reports"
import { Route, Routes } from "react-router"
import { Transferencia } from "../pages/recepcion/Transferencia"

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/recepcion" element={<Recepcion />}/>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/cuenta" element={<Cuenta/>}/>
        <Route path="/preparacion" element={<Preparacion/>}/>
        <Route path="/reports" element={<Reports/>}/>
        <Route path="/recepcion/transferencia" element={<Transferencia/>}/>
      </Routes>
    </>
  )
}
