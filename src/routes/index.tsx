import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

export default function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/pagina-inicial" element={<p>Pagina inicial</p>}/>
            <Route path="*" element={<Navigate to={"/pagina-inicial"} />}/>
        </Routes>
    </BrowserRouter>
  )
}
