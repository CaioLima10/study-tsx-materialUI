import { Button } from "@mui/material";
import {Navigate, Route, Routes } from "react-router-dom";
import AuthContextTheme from "../shared/context/AuthTheme";

export default function AppRoutes() {

    const { toggleTheme } = AuthContextTheme()

  return (
        <Routes>
            <Route path="/pagina-inicial" element={<Button onClick={toggleTheme} variant="contained" color="primary">Pagina inicial</Button>}/>
            <Route path="*" element={<Navigate to={"/pagina-inicial"} />}/>
        </Routes>
  )
}
