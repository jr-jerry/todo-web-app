import {createContext,useState} from "react";
export const DetailContext=createContext();
export const DetailProvider =({children})=>{
    const [detail,setDetail]=useState(null);
    return (
        <DetailContext.Provider value={{detail,setDetail}}>
            {children}
        </DetailContext.Provider>
    )
}
