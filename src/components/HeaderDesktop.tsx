import React from 'react'
import logoCar from "../images/logo-car.svg";
import iconSearch from "../images/icon-search.svg"
import { Navigate, useNavigate } from 'react-router';
import {trueOfFalse} from '../store/trueAndFalse'
import { motion } from "framer-motion";




function HeaderDesktop() {
    const Navigate = useNavigate();
    const {openLogin, setOpenLogin} = trueOfFalse();
    
  return (
    <motion.header 
    initial={{ y: -20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    className="flex flex-row justify-between items-center px-32 border-b border-gray-300 bg-[#F1F5F9] h-[73px] ">
        <img className="h-8" src={logoCar} alt="logo" />
        <div className='flex flex-row items-center gap-5'>
            <ul className="flex flex-row items-center gap-7 *:cursor-pointer">
              <li onClick={() => {
                Navigate("/")
              }}>Home</li>
              <li onClick={() => {
                Navigate("/Cars")
              }}>Cars</li>
              <li onClick={() => {
                Navigate("/MyBooking")
              }}>My Bookings</li>
              <div className='flex flex-row items-center relative'>
                <input type="text" placeholder='Search cars' className='border border-gray-300 placeholder-gray-500 rounded-full px-3 py-1 outline-none cursor-text' />
                <img className='absolute right-3 top-2 cursor-default' src={iconSearch} />
              </div>
              <li>List Cars</li>
            </ul>
            <button onClick={() => {setOpenLogin(true)}} className="px-8 py-2 rounded-lg bg-[#2563EB] text-white cursor-pointer hover:bg-[#1F58D8] transition-all duration-150 ease-in-out">
              Login
            </button>
        </div>
    </motion.header>
  )
}

export default HeaderDesktop