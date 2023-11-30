import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void; // Define the onClick prop
}

function Button(props: ButtonProps) {
  return (
    <button
      className="w-32 h-8 bg-slate-50 rounded border border-neutral-800 border-opacity-20 text-black text-xs font-normal hover:bg-neutral-100 hover:text-black focus:bg-neutral-100 focus:text-black focus:outline-none"
      onClick={props.onClick} // Attach the onClick handler to the button
    >
      {props.label}
    </button>
  );
}

export default Button;
