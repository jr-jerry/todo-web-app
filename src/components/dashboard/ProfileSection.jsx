import {motion} from "framer-motion";
import {useContext} from "react";
import {ThemeContext} from "../../context/ThemeContext";
import DonutChart from "../../Chart/DonutChart";
function ProfileSection() {
    const {theme}=useContext(ThemeContext);
    return (
        <div className="profile-section h-[80vh] absolute   transform -translate-x-[10%] -translate-y-[5%] w-[80vw]">
            <div className="image-up-behind-div h-[10%] relative bg-gray-100">
                <img src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000" alt="profile-image" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rounded-full h-24 w-24 z-3" />


            </div>
            <div className={`image-below-div h-[90%]  py-8 px-8 relative ${theme=="light"?"bg-gray-100 text-black":"bg-[#2c2c2c] text-white"}`}>
                <h3 className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-16 ">John Doe</h3>
                <div className={`profile-items-section ${theme=="light"?"bg-white":"bg-[#232323]"} h-[40%] mb-4 py-4 px-6 flex gap-1 flex-col pt-12 items-start`}>
                    <div className="w-full"><motion.button className="w-full" whileHover={{scale:1.1 ,backgroundColor:theme=="light"?"#dcdcdc":"#4c604f", texColor:"black",transition:{duration:0.5}}} whileTap={{scale:0.95}} >All Task</motion.button></div>

                    <div className="w-full"><motion.button className="w-full" whileHover={{scale:1.1 ,backgroundColor:theme=="light"?"#dcdcdc":"#4c604f", transition:{duration:0.5}}} whileTap={{scale:0.9}} >Today</motion.button></div>
                    <div className="w-full"><motion.button className="w-full" whileHover={{scale:1.1 ,backgroundColor:theme=="light"?"#dcdcdc":"#4c604f", transition:{duration:0.5}}} whileTap={{scale:0.9}} >important</motion.button></div>
                    <div className="w-full"><motion.button className={`w-full ${theme=="light"?"text-black":"text-white"}`} whileHover={{scale:1.1 ,backgroundColor:theme=="light"?"#dcdcdc":"#4c604f", transition:{duration:0.5}}} whileTap={{scale:0.9}} >Logout</motion.button></div>
                </div>
                <div className={`add-list-section ${theme=="light"?"bg-white":"bg-[#232323]"} h-[10%] mb-4`}>
                </div>
                <div className={`h-[45%] ${theme=="light"?"bg-white":"bg-[#232323]"} chat-section`}>
                    <div className="no-of-task-section h-[20%]">

                    </div>
                    <div className="chart-section w-[80%] h-[80%] mx-auto pl-2">
                        <DonutChart/> 
                    </div>

                </div>
            </div>
        </div>
    )
}
export default ProfileSection;