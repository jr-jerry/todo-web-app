import {createContext} from "react";
import {useState,useEffect} from "react";
export const ThemeContext=createContext();
export const ThemeProvider=({children})=>{
    const [theme,setTheme]=useState("light");
    const toggleTheme=()=>{
        setTheme(theme=="light"?"dark":"light");
    }
    useEffect(()=>{
        const root=window.document.documentElement;
        root.classList.remove("light","dark");
        root.classList.add(theme);
    },[theme])
    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}


