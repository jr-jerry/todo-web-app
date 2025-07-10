import {createContext,useState} from "react";
export const TodoContext=createContext();
export const TodoProvider=({children})=>{
    const [todo,setTodo]=useState([]);
    const [todoCompleted,setTodoCompleted]=useState([]);
    return (
        <TodoContext.Provider value={{todo,setTodo,todoCompleted,setTodoCompleted}}>
            {children}
        </TodoContext.Provider>
    )
}