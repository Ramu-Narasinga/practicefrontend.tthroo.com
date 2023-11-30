import React from "react"
import { getToken } from "../Utils";

function SignupButton() {

  return (
    <>
      {
        !getToken() &&
        <button 
          className="w-32 h-8 bg-violet-700 rounded border border-neutral-800 border-opacity-20 text-white text-xs font-normal hover:bg-violet-800 hover:text-white focus:bg-violet-800 focus:text-white focus:outline-none"
          onClick={() => {
            window.location.href = '/signup';
          }}
        >
          Signup
        </button>
      }
    </>
  )
}

export default SignupButton;