import { createContext, useCallback, useState } from "react";

interface IDrawerContext {
    isDrawerOpen: boolean
    toggleDrawerOpen: () => void
}

export const DrawerContext = createContext({} as IDrawerContext)

export default function DrawerProvider({ children }){

    const [ isDrawerOpen , setIsDrawerOpen ] = useState(false)

    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen)
    },[])
    
    return( 
        <DrawerContext.Provider value={{ isDrawerOpen , toggleDrawerOpen }}>
            { children }
        </DrawerContext.Provider>
    )
}