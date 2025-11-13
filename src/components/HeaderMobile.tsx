import React, { useEffect, useState } from "react";
import logoCar from "../images/logo-car.svg";
import iconMenu from "../images/icon-menu.svg";
import iconClose from "../images/icon-close.svg";
import { useNavigate } from "react-router";
import {trueOfFalse} from '../store/trueAndFalse'


export const HeaderMobile = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const {openLogin, setOpenLogin} = trueOfFalse();
  

  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open || !open) {
      document.body.style.overflowX = "hidden";
    } else {
      document.body.style.overflowX = "auto";
    }
  }, [open]);

  return (
    <>
      <header className="flex flex-row justify-between items-center px-6 border-b border-gray-300 bg-[#F1F5F9] h-[65px] relative">
        <img className="h-8" src={logoCar} alt="logo" />

        <button onClick={toggleMenu}>
          <img className={`h-[15px] cursor-pointer ${open ? "hidden" : "block"}`} src={iconMenu} />

          <img className={`h-[15px] cursor-pointer ${open ? "block" : "hidden"}`} src={iconClose} />
        </button>
      </header>

      <div
        className={`absolute top-[65px] left-0 w-full h-[calc(100vh-65px)] bg-[#F1F5F9] p-4 z-10 transition-all duration-500 ease-in-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <ul className="flex flex-col gap-4 *:cursor-pointer">
          <li onClick={() => {
            navigate("/")
          }}>Home</li>
          <li onClick={() => {
            navigate("/Cars")
          }}>Cars</li>
          <li onClick={() => {
            navigate("/MyBooking")
          }}>My Bookings</li>
          <li onClick={() => {
            // navigate()
          }}>List Cars</li>
        </ul>
        <button onClick={() => {setOpenLogin(true)}} className="px-8 py-2 rounded-lg bg-[#2563EB] text-white mt-6 cursor-pointer hover:bg-[#1F58D8] transition-all duration-150 ease-in-out">
          Login
        </button>
      </div>

    </>
  );
};

export default HeaderMobile;