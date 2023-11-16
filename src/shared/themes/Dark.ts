import { createTheme } from "@mui/material";
import { blue, cyan } from "@mui/material/colors";


export const DarkTheme = createTheme({
    palette:{
        primary:{
            main:blue[700],
            dark: blue[800],
            light: blue[500],
            contrastText: '#FFFFFF',

        },
        secondary: {
            main: cyan[500] ,
            dark:  cyan[400],
            light: cyan[300],
            contrastText: '#FFFFFFF',
        },
        background:{
            default: '#202124',
            paper: '#303134',
        }    
    }
})