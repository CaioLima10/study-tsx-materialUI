import {Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import AuthContextDrawer from "../shared/context/AuthDrawer";
import { useEffect } from "react";

export default function AppRoutes() {

    const { setDrawerOptions } = AuthContextDrawer()

    useEffect(() => {
      setDrawerOptions([
        {
          icon: 'home',
          path: '/pagina-inicial',
          label: 'Pagina inicial'
        },    
      ])
    }, [setDrawerOptions])

  return (
        <Routes>
            <Route path="/pagina-inicial" element={<Dashboard/>}/>
            <Route path="*" element={<Navigate to={"/pagina-inicial"} />}/>
        </Routes>
  )
}
