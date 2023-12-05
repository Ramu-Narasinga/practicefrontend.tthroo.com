import React, { useState } from 'react';
import TThroo from '../../assets/img/tthroo.svg';
import { NavLink } from 'react-router-dom';
import LoginButton from '../Button/LoginButton';
import SignupButton from '../Button/SignupButton';
import LogoutButton from '../Button/LogoutButton';

import "./index.css";

function Header(props: { title: string; unit?: string; unitId?: number }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full bg-slate-50">
      <div className="flex items-center justify-between bg-white h-16 px-4 sm:px-6 md:px-8">
        <div className="flex items-center">
          <a href="https://tthroo.com"><img className="w-8 h-8" src={TThroo} alt="Logo" /></a>
          <div className="ml-2 flex">
            <div className="text-black text-base font-medium">{props.title}</div>
          </div>
        </div>
        <div className="hidden sm:flex sm:items-center space-x-4">
          <NavLink
            to="/practice"
            className="text-base font-normal text-black hover:text-violet-700"
          >
            Practice
          </NavLink>
          <NavLink
            to="/challenges"
            className="text-base font-normal text-black hover:text-violet-700"
          >
            Challenges
          </NavLink>
          <LoginButton />
          <SignupButton />
          <LogoutButton />
        </div>
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-black hover:text-violet-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="sm:hidden">
          <div className="flex flex-col space-y-4 px-4 py-2 items-center">
            <NavLink
              to="/practice"
              className="text-base font-normal text-black hover:text-violet-700"
            >
              Practice
            </NavLink>
            <NavLink
              to="/challenges"
              className="text-base font-normal text-black hover:text-violet-700"
            >
              Challenges
            </NavLink>
            <LoginButton />
            <SignupButton />
            <LogoutButton />
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
