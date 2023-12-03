import { createTheme } from "@mui/material";
import { blue } from "@mui/material/colors";


export const LightTheme = createTheme({
    palette: {
        primary:{
            main: blue[700],
            dark: blue[800],
            light: blue[500],
            contrastText: "#FFFFFF",
        },
        secondary:{
            main: blue[300],
            dark: blue[300],
            light: blue[300],
            contrastText: "#FFFFFF",
        },
        background:{
            default: "#F7F6F3",
            paper: "#FFFFFF",
        }
    }
}) 