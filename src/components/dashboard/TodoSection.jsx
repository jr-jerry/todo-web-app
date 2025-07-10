import { useState } from "react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
function TodoSection() {
    const [todo, setTodo] = useState([]);
    const [todoCompleted, setTodoCompleted] = useState([]);
    const [inputText, setInputText] = useState("");
    const [completed, setComplete] = useState(false);
    const { theme } = useContext(ThemeContext);
    const AddText = (text) => {
        if (text.trim() === "") return;
        const newTodo = {
            id: todo.length + 1,
            text: text,
            completed: false,
        }
        setTodo([...todo, newTodo]);
        setInputText("");
    }

    const removeTodo = (id) => {
        const updatedTodos = todo
            .map((item) => item.id == id ? { ...item, completed: true } : item)

        const updatedTodo = updatedTodos.find((item) => item.id == id);
        setTodo(updatedTodos.filter((item) => item.id != id));
        setTodoCompleted([...todoCompleted, updatedTodo]);

    }

    return (
        <div className="todo-detail-section h-full overflow-y-auto ">
            <motion.div initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }} className="flex flex-col h-full">
                <div className="input-tag  mb-4 shadow-lg h-[30%] relative">
                    <input type="text" placeholder="Enter your task" className={`w-full h-[80%] block mx-auto ${theme == "light" ? "bg-white text-black" : "bg-[#2f3630] text-white"} pl-5 outline-none`}
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}>
                    </input>
                    <div className={` h-[20%]  ${theme == "light" ? "bg-gray-50" : "bg-[#2f3630]"}`}>
                        <div className="caleder-time-section">

                        </div>
                        <motion.button whilehover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }} transition={{ type: 'spring', stiffness: 100 }} backgroundColor="#4f4f4f"
                            className="absolute px-4 right-2 bottom-1 rounded-xl z-3  text-center bg-black text-white border-gray-300 border-2 my-2 drop-shadow-lg" onClick={() => AddText(inputText)} >

                            add
                        </motion.button>
                    </div>

                </div>
                <div className="todo-list flex-1 overflow-y-auto h-[40%] border-t border-r border-l border-gray-300">
                    <h3 className={`mx-2 py-2 ${theme=="light"?"text-black":"text-white"}`}>TodoList</h3>

                    {
                        todo.map((item) => {
                            return (
                                <div key={item.id} className={`flex gap-2 my-2 py-2 border-t border-gray-300 ${theme=="light"?"text-black":"text-white"}`}>
                                    <input type="checkbox" value={item.completed} className="mx-2" onChange={() => removeTodo(item.id)} />
                                    <p>{item.text}</p>

                                </div>
                            )
                        })
                    }
                </div>

                <div className="completed-list overflow-y-auto flex-1 h-[30%] border-r border-l border-b border-gray-300">
                    <h3 className={`mx-2 py-2 ${theme=="light"?"text-black":"text-white"}`}>CompletedList</h3>
                    {todoCompleted.map((item) =>
                        <div key={item.id} className={`line-through px-4 border-t border-gray-300 py-2 pl-10 ${theme=="light"?"text-black":"text-white"}`}>
                            {item.text}
                        </div>)}
                </div>
            </motion.div>
        </div>
    );
}

export default TodoSection