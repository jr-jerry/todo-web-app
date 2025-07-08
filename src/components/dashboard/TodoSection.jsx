import { useState } from "react";
import { motion } from "framer-motion";
function TodoSection() {
    const[todo,setTodo]=useState([]);
    const [todoCompleted,setTodoCompleted]=useState([]);
    const [inputText, setInputText] = useState("");
    const [completed,setComplete]=useState(false);
    const AddText=(text)=>{
        const newTodo={
            id:todo.length+1,
            text:text,
            completed:false,
        }
        setTodo([...todo,newTodo]);
    }

    const removeTodo=(id)=>{
        const updatedTodos=todo
        .map((item)=>item.id==id?{...item,completed:true}:item)

        const updatedTodo=updatedTodos.find((item)=>item.id==id);
        setTodo(updatedTodos.filter((item)=>item.id!=id));
        setTodoCompleted([...todoCompleted,updatedTodo]);
        
    }

    return (
        <div className="todo-detail-section h-full overflow-y-auto ">
             <motion.div initial={{opacity:0,scale:0}}
                        animate={{opacity:1,scale:1}}
                        transition={{duration:0.5}} className="flex flex-col h-full">
                <div className="input-tag h-[150px] mb-4 h-[30%]">
                    <input type="text" placeholder="Enter your task" className="w-full h-[80%] block mx-auto"
                    value={inputText}
                    onChange={(e)=>setInputText(e.target.value)}>
                    </input>
                    <div className=" h-[20%] relative ">
                        <div className="caleder-time-section">
                            
                        </div>
                    <motion.button  whilehover={{scale:1.5}} whileTap={{scale:0.8}} transition={{type:'spring',stiffness:100}} backgroundColor="#4f4f4f"
                    className="absolute px-4 right-2 rounded-4xl z-3 h-[100%] text-center bg-amber-100 border-amber-200 border-2" onClick={()=>AddText(inputText)} >
                       
                            add 
                    </motion.button>
                    </div>
                    
                </div>
                <div className="todo-list flex-1 overflow-y-auto h-[40%]">
                    {
                        todo.map((item)=>{
                            return(
                                <div key={item.id} className="flex gap-2">
                                    <input type="checkbox" value={item.completed} className="mx-2" onChange={()=>removeTodo(item.id)} />
                                    <p>{item.text}</p>
                                    
                                </div>
                            )
                        })
                    }
                </div>
               
                <div className="completed-list overflow-y-auto flex-1 h-[30%]">
                   {todoCompleted.map((item)=>
                   <div key={item.id} className="line-through px-4">
                    {item.text}
                    </div>)}
                </div>
            </motion.div>
        </div>
    );
}

export default TodoSection