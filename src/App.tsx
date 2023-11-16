import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import AppThemeProvider from "./shared/context/ThemeContext";
import LateralMenu from "./shared/components/lateral-menu/LateralMenu";
import DrawerProvider from "./shared/context/DrawerContext";

export default function App() {


  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>

          <LateralMenu>
            <AppRoutes/>
          </LateralMenu>
          
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  )
}

