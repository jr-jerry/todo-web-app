import ProfileSection from "./dashboard/ProfileSection";
import TodoDetail from "./dashboard/TodoDetail";
import TodoSection from "./dashboard/TodoSection";

function DashBoard({visible}){
    return (
        <div className="dash-board grid grid-row-12 flex-1 overflow-y-auto">
            {/* Left sidebar - ProfileSection */}
            <div className={`transition-all duration-300 ${visible ? 'col-span-3' : 'col-start-1'}`}>
                {visible && <ProfileSection/>}
            </div>
            
            {/* Center content - TodoSection */}
            <div className={`transition-all duration-300 ${visible ? 'col-start-4 col-span-6':'col-span-6 col-start-4'}`}>
                <div className={`w-full max-w-3xl mx-auto`}>
                    <TodoSection/>
                </div>
            </div>
            
            {/* Right sidebar - TodoDetail */}
            <div className={`transition-all duration-300 ${visible ? 'col-start-11 col-end-13' : 'col-start-11 col-end-13'}`}>
                <TodoDetail/>
            </div>
        </div>
    )
}
export default DashBoard;