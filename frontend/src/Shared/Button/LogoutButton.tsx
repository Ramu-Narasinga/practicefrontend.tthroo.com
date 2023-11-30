import React from "react";
import { getToken } from "../Utils";

function LogoutButton() {

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = '/practice';
  }

  return (
    <>
      {
        getToken() &&
        <button
          className="w-32 h-8 bg-slate-50 rounded border border-neutral-800 border-opacity-20 text-black text-xs font-normal hover:bg-neutral-100 hover:text-black focus:bg-neutral-100 focus:text-black focus:outline-none"
          onClick={handleLogout}
        >
          Logout
        </button>
      }
    </>
  );
}

export default LogoutButton;
