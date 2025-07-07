import ProfileSection from "./dashboard/ProfileSection";
import TodoDetail from "./dashboard/TodoDetail";
import TodoSection from "./dashboard/TodoSection";

function DashBoard({ visible }) {
  return (
    <div className="dash-board grid grid-cols-[250px_2fr_200px] overflow-y-auto h-full p-4">
      
      {/* Left sidebar - ProfileSection */}
      <div className="col-span-1">
        <div className={`${visible ? "block" : "invisible"} w-full h-full`}>
          <ProfileSection />
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
