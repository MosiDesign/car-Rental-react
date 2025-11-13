import React from 'react'
import iconSearch from '../images/icon-search-white.svg'
import car from '../images/main_car.png'

function LuxuryCarsOnRent() {
  return (
    <div className='min-h-screen flex flex-col items-center bg-[#F1F5F9] gap-16 pt-50'>
        <h1 className='text-5xl font-semibold'>Luxury cars on Rent</h1>
        <div className='w-200 h-25 flex flex-col bg-white rounded-full shadow-[0px_8px_20px_rgba(0,0,0,0.1)]'>
            <div className='flex flex-row items-center gap-10 p-6 pl-15'>
                <div className='flex flex-col gap-1'>
                    <select>
                        <option>Pickup Location</option>
                        <option value="New York">New York</option>
                        <option value="Los Angeles">Los Angeles</option>
                        <option value="Houston">Houston</option>
                        <option value="Chicago">Chicago</option>
                    </select>
                    <p className='px-1 text-sm text-gray-500 flex flex-row'>Please select location </p>
                </div>
                <div className='flex flex-col gap-1'>
                    <label form='pickup-date'>Pickup-Date</label>
                    <input id="pickup-date" min="2025-11-13" className="text-sm text-gray-500" type="date"></input>
                </div>
                <div className='flex flex-col gap-1'>
                    <label form='return-date'>Return Date</label>
                    <input id="return-date" className="text-sm text-gray-500" type="date"></input>
                </div>
                <div className='flex flex-row ml-15'>
                    <button className="flex flex-row gap-2 px-9 py-3 rounded-full bg-[#2563EB] font-medium text-white cursor-pointer hover:bg-[#1F58D8] transition-all duration-150 ease-in-out">
                        <img className='brightness-300' src={iconSearch} />
                        Search
                    </button>
                </div>
            </div>
            <div className='flex flex-col w-full h-full mt-15'>
                <img className='w-[864px] h-74' src={car} />
            </div>
        </div>
    </div>
  )
}

export default LuxuryCarsOnRent