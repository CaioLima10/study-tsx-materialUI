import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";


export default function AuthContextTheme(){
    const theme = useContext(ThemeContext)
    return theme
} 