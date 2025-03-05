import { Route, Routes } from "react-router"
import { Recepcion } from "../pages/Recepcion"
import { LoginPage } from "../pages/LoginPage"
import { HomePage } from "../pages/HomePage"
import { Cuenta } from "../pages/Cuenta"
import { Preparacion } from "../pages/Preparacion"
import { Reports } from "../pages/Reports"

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
      </Routes>
    </>
  )
}
