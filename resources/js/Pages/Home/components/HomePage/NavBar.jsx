import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/HomePage/Logo.svg";
import PrimaryButton from "../Button/PrimaryButton";

const NavBar = () => {
  const handleSignIn = () => {
    console.log("Sign In...");
  };

  return (
    <div className="navbar bg-[#0D1B2A] shadow-md">
      <div className="w-1/6 flex justify-start ml-[3.5%]">
        <NavLink to="/" className="btn btn-ghost normal-case text-xl">
          <img src={Logo} alt="Logo" className="h-[33px] w-[197px] mr-2" />
        </NavLink>
      </div>

      <div className="w-2/3 flex justify-center">
        <ul className="menu menu-horizontal px-1 font-bold">
          <li>
            <NavLink
              to="/appointments"
              className={({ isActive }) =>
                `text-base ${isActive ? 'text-white' : 'text-[#22AAA1]'}`
              }
              activeClassName="text-white"
            >
              My Appointments
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/bookings"
              className={({ isActive }) =>
                `text-base ${isActive ? 'text-white' : 'text-[#22AAA1]'}`
              }
              activeClassName="text-white" 
            >
              My Bookings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ads"
              className={({ isActive }) =>
                `text-base ${isActive ? 'text-white' : 'text-[#22AAA1]'}`
              }
              activeClassName="text-white"
            >
              Pet Selling Ads
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="w-1/6 flex justify-end mr-[4.5%]">
        <PrimaryButton
          onClick={handleSignIn}
          text="Sign In"
          bgColor="bg-teal-500"
          hoverColor="hover:bg-teal-600"
          additionalClasses="rounded-[24px] w-[109px] h-[46px]"
        />
      </div>
    </div>
  );
};

export default NavBar;
