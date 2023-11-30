import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";

function Practice() {
  return (
    <div className="flex flex-col md:flex-row gap-10">
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default Practice;