import { createTheme } from "@mui/material";
import { blue } from "@mui/material/colors";


export const DarkTheme = createTheme({
    palette:{
        mode: 'dark',
        primary:{
            main:blue[700],
            dark: blue[800],
            light: blue[500],
            contrastText: '#FFFFFF',

        },
        secondary: {
            main: blue[400] ,
            dark:  blue[400],
            light: blue[400],
            contrastText: '#FFFFFF',
        },
        background:{
            default: '#202124',
            paper: '#303134',
        },
    },
    typography:{
        allVariants:{
            color: '#FFFFFF'
            
        }
    }
})