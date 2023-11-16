import { Button } from "@mui/material";
import {Navigate, Route, Routes } from "react-router-dom";
import AuthContextDrawer from "../shared/context/AuthDrawer";

export default function AppRoutes() {

    const { toggleDrawerOpen } = AuthContextDrawer()

  return (
        <Routes>
            <Route path="/pagina-inicial" element={<Button onClick={toggleDrawerOpen} variant="contained" color="primary">Toggle Drawer</Button>}/>
            <Route path="*" element={<Navigate to={"/pagina-inicial"} />}/>
        </Routes>
  )
}
