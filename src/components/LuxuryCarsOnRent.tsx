import React, { useState } from 'react'
import car from '../images/main_car.png'
import { motion } from "framer-motion";


function LuxuryCarsOnRent() {
  const [location, setLocation] = useState("");

  return (
    <div className='min-h-screen flex flex-col gap-10 items-center bg-[#F1F5F9] pt-10 md:pt-[150px] px-4 pb-10'>
        
        <motion.h1 
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className='text-4xl md:text-5xl font-semibold text-[#102a42] mb-8 mt-10 md:mb-16 text-center'>
            Luxury cars on Rent
        </motion.h1>

        <motion.div
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        className='
            bg-white shadow-xl 
            flex flex-col w-full max-w-[360px] rounded-[30px] p-6 gap-6
            md:flex-row md:w-[900px] md:max-w-none md:rounded-full md:h-[100px] md:items-center md:justify-between md:p-0 md:px-10 md:gap-4
        '>
            
            <div className='relative flex flex-col justify-center w-full md:w-[200px] h-full group'>
                
                <div className='flex flex-col z-0 gap-1'>
                    <div className='flex items-center justify-between gap-2'>
                        <label className='font-bold text-lg text-gray-800 truncate'>
                            {location || "Pickup Location"}
                        </label>
                        <span className='md:hidden text-gray-400 text-xs'>▼</span>
                    </div>
                    
                    <span className='text-sm text-gray-400 font-medium truncate'>
                        {location ? location : "Please select location"}
                    </span>
                </div>

                <select 
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className='absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10 appearance-none'>
                    <option value="">Pickup Location</option>
                    <option value="New York">New York</option>
                    <option value="Los Angeles">Los Angeles</option>
                    <option value="Houston">Houston</option>
                    <option value="Chicago">Chicago</option>
                </select>
            </div>

            <div className='hidden md:block w-[1px] h-10 bg-gray-200'></div>

            <div className='flex flex-col gap-1 w-full md:w-auto'>
                <label className='font-bold text-lg text-gray-800 md:text-base md:font-normal md:text-gray-500'>
                    <span className='md:hidden'>Pick-up Date</span>
                    <span className='hidden md:inline'>Pickup Date</span>
                </label>
                <input type="date" className='outline-none text-gray-500 text-sm w-full bg-transparent font-medium'/>
            </div>

            <div className='hidden md:block w-[1px] h-10 bg-gray-200'></div>

            <div className='flex flex-col gap-1 w-full md:w-auto'>
                <label className='font-bold text-lg text-gray-800 md:text-base md:font-normal md:text-gray-500'>
                    <span className='md:hidden'>Return Date</span>
                    <span className='hidden md:inline'>Return Date</span>
                </label>
                <input type="date" className='outline-none text-gray-500 text-sm w-full bg-transparent font-medium'/>
            </div>

            <div className='mt-2 md:mt-0 w-full md:w-auto'>
                <button className='
                    bg-[#2563EB] text-white font-medium hover:bg-[#1F58D8] transition-all duration-200 cursor-pointer
                    flex justify-center items-center gap-2 shadow-lg shadow-blue-500/30
                    w-full py-4 rounded-2xl text-lg
                    md:w-auto md:px-8 md:py-3 md:rounded-full md:text-base
                '>
                    Search
                </button>
            </div>

        </motion.div>

        <div className='mt-12 md:mt-16 w-full flex justify-center'>
            <motion.img
            initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            src={car} alt="Luxury Car" className='w-full max-w-[750px] md:max-w-[864px] object-contain' />
        </div>

    </div>
  )
}

export default LuxuryCarsOnRent