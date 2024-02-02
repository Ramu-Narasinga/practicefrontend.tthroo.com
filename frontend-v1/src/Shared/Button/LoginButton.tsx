import React from "react"
import { getToken } from "../Utils";

function LoginButton() {

  return (
    <>
      {
        !getToken() &&
        <button 
          className="w-32 h-8 bg-slate-50 rounded border border-neutral-700 text-black text-xs font-normal hover:bg-neutral-100 hover:text-black focus:bg-neutral-100 focus:text-black focus:outline-none"
          onClick={() => {
            window.location.href = '/login';
          }}
        >
          Login
        </button>
      }
    </>
  )
}

export default LoginButton;