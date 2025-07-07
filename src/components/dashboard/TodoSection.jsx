import { useState } from "react";
import { motion } from "framer-motion";
function TodoSection() {
    const[todo,setTodo]=useState([]);
    const [inputText, setInputText] = useState("");
    const AddText=(text)=>{
        const newTodo={
            id:todo.length+1,
            text:text,
            completed:false
        }
        setTodo([...todo,newTodo]);
    }
    return (
        <div className="todo-detail-section  flex flex-col h-full overflow-y-auto">
             <motion.div initial={{opacity:0,scale:0}}
                        animate={{opacity:1,scale:1}}
                        transition={{duration:0.5}} >
                <div className="input-tag h-[150px] mb-4 ">
                    <input type="text" placeholder="Enter your task" className="w-full h-[80%] block mx-auto"
                    value={inputText}
                    onChange={(e)=>setInputText(e.target.value)}>
                    </input>
                    <div className=" h-[20%] relative ">
                        <div className="caleder-time-section">
                            
                        </div>
                    <motion.button  whilehover={{scale:1.5}} whileTap={{scale:0.8}} transition={{type:'spring',stiffness:100}} backgroundColor="#4f4f4f"
                    className="absolute px-4 right-2 rounded-4xl z-3 h-[100%] text-center" onClick={()=>AddText(inputText)} >
                       
                            add 
                    </motion.button>
                    </div>
                    
                </div>
                <div className="todo-list ">
                    {
                        todo.map((item)=>{
                            return(
                                <div key={item.id}>
                                    <p>{item.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </motion.div>
        </div>
    );
}

export default TodoSection