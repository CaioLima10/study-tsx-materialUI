import {Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import AuthContextDrawer from "../shared/context/AuthDrawer";
import { useEffect } from "react";
import ListOfUsers from "../pages/users/ListOfUsers";

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
          icon: 'people',
          path: '/pessoas',
          label: 'Pessoas'
        },    
      ])
    }, [setDrawerOptions])

  return (
        <Routes>
            <Route path="/pagina-inicial" element={<Dashboard/>}/>
            <Route path="/pessoas" element={<ListOfUsers/>}/>
            <Route path="*" element={<Navigate to={"/pagina-inicial"} />}/>
        </Routes>
  )
}
