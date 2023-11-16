import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import AppThemeProvider from "./shared/context/ThemeContext";
import LateralMenu from "./shared/components/lateral-menu/LateralMenu";

export default function App() {


  return (
    <AppThemeProvider>
      <BrowserRouter>
        <LateralMenu>
          <AppRoutes/>
        </LateralMenu>
      </BrowserRouter>
    </AppThemeProvider>
  )
}

