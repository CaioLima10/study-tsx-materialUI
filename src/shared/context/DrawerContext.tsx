import { createContext, useCallback, useState } from "react";

interface IDrawerOptions{
    path: string
    label: string
    icon: string
}

interface IDrawerContext {
    isDrawerOpen: boolean
    toggleDrawerOpen: () => void
    drawerOptions: IDrawerOptions[]
    setDrawerOptions: (newDrawerOptions: IDrawerOptions[]) => void
}

export const DrawerContext = createContext({} as IDrawerContext)

export default function DrawerProvider({ children }){

    const [ isDrawerOpen , setIsDrawerOpen ] = useState(false)
    const [ drawerOptions , setDrawerOptions ] = useState<IDrawerOptions[]>([])

    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen)
    },[])

    const handleDrawerOptions = useCallback((newDrawerOptions: IDrawerOptions[]) => {
        setDrawerOptions(newDrawerOptions)
    }, [])
    
    return( 
        <DrawerContext.Provider 
            value={{ isDrawerOpen , toggleDrawerOpen , 
            drawerOptions , setDrawerOptions: handleDrawerOptions 
            }}>
            { children }
        </DrawerContext.Provider>
    )
}