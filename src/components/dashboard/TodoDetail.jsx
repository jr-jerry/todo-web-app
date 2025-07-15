import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { DetailContext } from "../../context/DetailContext";

const TimeFormat = (time) => {
    const [hourStr, minute] = time.split(":");
    const hour = parseInt(hourStr);
    const ampm = hour >= 12 ? "PM" : "AM";
    const hour12 = hour % 12 || 12;
    return `${hour12}:${minute} ${ampm}`;
};

function TodoDetail() {
    const { theme } = useContext(ThemeContext);
    const { detail } = useContext(DetailContext);

    return (
        <div
            className={`todo-detail-section ${theme === "light" ? "bg-[#f9fafb] text-black" : "bg-[#242424] text-white"}  outline-none  border-none h-full p-4`}
        >
            {detail ? (
                <>
                    <p>{detail.text}</p>
                    <p>Day: {detail.date}</p>
                    <p>Time: {TimeFormat(detail.time)}</p>
                </>
            ) : (
                <p>Click on any task to get detail</p>
            )}
        </div>
    );
}

export default TodoDetail;