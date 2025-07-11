import ProfileSection from "./dashboard/ProfileSection";
import TodoDetail from "./dashboard/TodoDetail";
import TodoSection from "./dashboard/TodoSection";
import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";


function DashBoard({ visible }) {
    const {theme}=useContext(ThemeContext);
  return (

    <div className="dash-board grid lg:grid-cols-[250px_2fr_200px] overflow-y-auto h-[90%] p-4">

      {/* Left sidebar - ProfileSection */}
      <div className={`${visible ? 'block' : 'hidden'} lg:block col-span-1`}>
        <div className="w-full h-full">
          <AnimatePresence>
            {visible && <motion.div
              initial={{ x: -250, opacity: 0 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -250 }}
              transition={{ duration: 0.5 }}
              className="h-full">
              <ProfileSection />
            </motion.div>
            }
          </AnimatePresence>

        </div>
      </div>

      {/* Center content - TodoSection */}
      <div className="col-span-1 h-full">
        <div className="w-full max-w-3xl mx-auto h-full">
          <TodoSection />
        </div>
      </div>

      {/* Right sidebar - TodoDetail */}
      <div className={`hidden lg:block col-span-1 h-full p-5 ${theme == "light" ? "bg-white" : "bg-[#2f3630]"}`}>
        <TodoDetail />
      </div>
    </div>
  );
}

export default DashBoard;
