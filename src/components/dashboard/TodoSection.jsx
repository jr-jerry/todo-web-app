import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { TodoContext } from "../../context/TodoContext";
import { DetailContext } from "../../context/DetailContext";
import { LayoutContext } from "../../context/LayoutContext";
import { HugeiconsIcon } from "@hugeicons/react";
import { CalendarIcon, ClockIcon } from "@hugeicons/core-free-icons";
function TodoSection() {

    const { todo, setTodo, todoCompleted, setTodoCompleted } = useContext(TodoContext);

    const [inputText, setInputText] = useState("");
    const [date, setDate] = useState(new Date().toDateString());
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const ref = useRef(null);
    const timeRef = useRef(null);
    const { theme } = useContext(ThemeContext);
    const { setDetail } = useContext(DetailContext);
    const { grid } = useContext(LayoutContext);

    const handleDateChange = () => {
        ref.current.showPicker();
    }
    const handleTimeChange = () => {
        timeRef.current.showPicker();
    }
    const AddText = (text) => {
        if (text.trim() === "") return;
        const newTodo = {
            id: todo.length + 1,
            text: text,
            completed: false,
            date: date,
            time:time,
        }
        setTodo([...todo, newTodo]);
        setInputText("");
        setDate(new Date().toDateString());
        setTime(new Date().toLocaleTimeString());
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
                    <input type="text" placeholder="Enter your task description"
                        className={`w-full h-[80%] block mx-auto ${theme == "light" ? "bg-white text-black" : "bg-[#2f3630] text-white"} pl-5 outline-none`}
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}>
                    </input>
                    <div className={` h-[20%]  ${theme == "light" ? "bg-gray-50" : "bg-[#2f3630]"}`}>
                        <div className="caleder-time-section z-1  flex h-full gap-2 relative">

                            <input type="date" name="date" id="" className="inline -block w-[1%] h-[1%] opacity-0" value={date} ref={ref} onChange={(e) => setDate(e.target.value.toDateString())} />

                            <motion.button 
                            onClick={handleDateChange} 
                            whilehover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }} transition={{ duration: 0.5 }} backgroundColor="#4f4f4f">
                                <HugeiconsIcon icon={CalendarIcon} />
                            </motion.button>

                            <input type="time" 
                            ref={timeRef} 
                            name="time" 
                            id="" 
                            value={time}
                            className="inline-block absolute top-0 left-10 opacity-0 "
                            onChange={(e)=>setTime(e.target.value)} />

                            <motion.button 
                            whilehover={{ scale: 1.5 }} 
                            whileTap={{ scale: 0.8 }} 
                            transition={{ duration: 0.5 }} 
                            backgroundColor="#4f4f4f">
                                <HugeiconsIcon icon={ClockIcon} className="relative" onClick={handleTimeChange} />
                            </motion.button>

                            {/* <!------- Priority Section-------> */}
                            <motion.button
                             whileHover={{scale:1.1}} 
                             whileTap={{scale:0.9}} 
                             transition={{duration:0.5}}
                             >
                                {/* <HugeiconsIcon icon={PriorityIcon} /> */}

                            </motion.button>

                            

                            {/* Priority Section End-------------------> */}

                        </div>
                        <motion.button whilehover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }} transition={{ duration: 0.5 }} backgroundColor="#4f4f4f"
                            className="absolute px-4 right-2 bottom-1 rounded-xl z-3  text-center bg-black text-white border-gray-300 border-2 my-2 drop-shadow-lg" onClick={() => AddText(inputText)} >

                            add
                        </motion.button>
                    </div>

                </div>
                <h3 className={`pl-2 py-2 w-full  ${theme == "light" ? "text-black bg-gray-200" : "text-white bg-[#2f3630]"}`}>TodoList</h3>

                <div className={`todo-list  ${grid == true ? "flex flex-wrap content-start " : "flex flex-col"} overflow-y-auto    border-t border-r border-l border-gray-300 h-[35%] `}>

                    {
                        todo.map((item) => {
                            return (
                                <div key={item.id} className={`text-xs m-2 p-2 flex items-center border-t ${grid == true ? "shadow-lg rounded-md md:w-[20%] w-[25%] h-[50px] md:max-h-[80px]" : "w-[90%]"} border-gray-300 ${theme == "light" ? "text-black bg-gray-200" : "text-white bg-[#2f3630]"}`}>

                                    <input type="checkbox" value={item.completed} className="mx-2" onChange={() => removeTodo(item.id)} />

                                    <p className="cursor-pointer inline-block" onClick={() => setDetail(item)}>{item.text.split(" ").slice(0, 2).join(" ")}</p>

                                </div>
                            )
                        })
                    }
                </div>
                <h3 className={`py-2${theme == "light" ? "text-black  bg-gray-300 " : "text-white  bg-[#2f3630]"}`}>CompletedList</h3>

                <div className="completed-list overflow-y-auto flex-1 h-[30%] border-r border-l border-b border-gray-300">
                    {todoCompleted.map((item) =>
                        <div key={item.id} onClick={() => setDetail(item)} className={`line-through px-4 border-t border-gray-300 py-2 pl-10 ${grid == true ? "inline-block" : ""} ${theme == "light" ? "text-black bg-gray-200" : "text-white bg-[#2f3630]"}`}>
                            {item.text.split(" ").slice(0, 2).join(" ")}
                        </div>)}
                </div>
            </motion.div>
        </div>
    );
}

export default TodoSection