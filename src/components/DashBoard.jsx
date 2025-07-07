import ProfileSection from "./dashboard/ProfileSection";
import TodoDetail from "./dashboard/TodoDetail";
import TodoSection from "./dashboard/TodoSection";
import { AnimatePresence,motion } from "framer-motion";

function DashBoard({ visible }) {
  return (
    <div className="dash-board grid grid-cols-[250px_2fr_200px] overflow-y-auto h-full p-4">
      
      {/* Left sidebar - ProfileSection */}
      <div className="col-span-1">
        <div className="w-full h-full">
            <AnimatePresence>
                {!visible && <motion.div initial={{x:-250,opacity:0}}
                            animate={{opacity:1,x:0}}
                            exit={{opacity:0,x:-250}}
                            transition={{duration:0.5}}>
                                <ProfileSection />
                            </motion.div>
                }
            </AnimatePresence>
        
        </div>
      </div>

      {/* Center content - TodoSection */}
      <div className="col-span-1">
        <div className="w-full max-w-3xl mx-auto">
          <TodoSection />
        </div>
      </div>

      {/* Right sidebar - TodoDetail */}
      <div className="col-span-1">
        <TodoDetail />
      </div>
    </div>
  );
}

export default DashBoard;
