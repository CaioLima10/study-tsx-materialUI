import {Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import AuthContextDrawer from "../shared/context/AuthDrawer";
import { useEffect } from "react";
import ListOfCities from "../pages/cities/ListOfCities";

export default function AppRoutes() {

    const { setDrawerOptions } = AuthContextDrawer()

    useEffect(() => {
      setDrawerOptions([
        {
          icon: 'home',
          path: '/pagina-inicial',
          label: 'Pagina inicial'
        },    
        {
          icon: 'location_city',
          path: '/cidades',
          label: 'Cidades'
        },    
      ])
    }, [setDrawerOptions])

  return (
        <Routes>
            <Route path="/pagina-inicial" element={<Dashboard/>}/>
            <Route path="/cidades" element={<ListOfCities/>}/>
            <Route path="*" element={<Navigate to={"/pagina-inicial"} />}/>
        </Routes>
  )
}
