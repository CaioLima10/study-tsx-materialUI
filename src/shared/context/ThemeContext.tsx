import { Box, ThemeProvider } from "@mui/material";
import { createContext, useCallback, useMemo, useState } from "react";
import { DarkTheme, LightTheme } from "../themes";

interface IThemeContextData{
    themeName: 'light' | 'dark'
    toggleTheme: () => void
}

interface IThemeProvider {
    children: JSX.Element
}

export const ThemeContext = createContext({} as IThemeContextData)
    
export default function AppThemeProvider({ children }: IThemeProvider){

    const [ themeName , setThemeName ] = useState<'light' | 'dark'>('light')

    const toggleTheme = useCallback(() => {
        setThemeName(  
            oldThemeName => oldThemeName === 'light' ? 'dark' : 'light' 
        )
    }, [])

    const theme = useMemo(() => {
        const toggleTheme = themeName === 'light'? LightTheme : DarkTheme
        return toggleTheme
    }, [ themeName ])

    return(
        <ThemeProvider theme={ theme }>
            <ThemeContext.Provider value={{ themeName , toggleTheme  }}>
                <Box width={"100vw"} height={"100vh"} bgcolor={theme.palette.background.default}>
                    { children }
                </Box>
            </ThemeContext.Provider>
        </ThemeProvider>
    )
}
