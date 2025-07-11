import {createContext,useState} from "react";
export const LayoutContext=createContext();
export const LayoutProvider=({children})=>{
    const [grid,setGrid]=useState(false);
    const toggleGrid=()=>{
        setGrid(!grid);
    }
    return (
        <LayoutContext.Provider value={{grid,toggleGrid}}>
            {children}
        </LayoutContext.Provider>
    )
}