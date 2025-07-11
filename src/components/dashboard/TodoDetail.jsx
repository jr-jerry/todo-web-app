import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import {DetailContext} from "../../context/DetailContext";
function TodoDetail() {
    const {theme}=useContext(ThemeContext);
    const {detail}=useContext(DetailContext);
    return (
        <div className={`todo-detail-section ${theme=="light"?"bg-[#f9fafb] text-black":"bg-[#242424] text-white"}  outline-none  border-none h-full p-4`}>
           {`${detail? detail.text: "click on any task to get detail"}`}
        </div>
    );
}

export default TodoDetail