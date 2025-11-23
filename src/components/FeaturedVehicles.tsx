import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useNavigate } from "react-router";
import iconPeople from '../images/people.svg'
import iconHuman from '../images/human.svg'
import iconBenzin from '../images/benzin.svg'
import iconLocation from '../images/location.svg'
import image_car from '../images/doyouCar.png';


type postsType = {
  brand: string;
  category: string;
  createdAt: string;
  description: string;
  fuel_type: string;
  image: string;
  isAvaliable: boolean;
  location: string;
  model: string;
  owner: string;
  pricePerDay: number;
  seating_capacity: number;
  transmission: string;
  updatedAt: string;
  year: number;
  __v: number;
  _id: string;
};

const FeaturedVehicles = () => {
  const [cars, setCars] = useState<postsType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getCars = async () => {
      try {
        const { data } = await axios.get("/api/user/cars");
        setCars(data.cars || []);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };
    getCars();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="flex flex-col gap-20 px-6 py-24 bg-white items-center"
    >

      <div className="flex flex-col items-center text-center gap-2">
        <p className="text-[36px] font-semibold sm:text-[40px]">Featured Vehicles</p>
        <p className="text-[14px] sm:text-[16px] text-gray-500">
          Explore our selection of premium vehicles for your next adventure.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:px-40 w-full">
        {cars.slice(0, 6).map((item) => (
          <motion.div
            key={item._id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onClick={() => navigate(`/cars/${item._id}`)}
            className="flex flex-col cursor-pointer overflow-hidden rounded-2xl shadow-xl group bg-white h-full justify-between"
            >
            <div className="relative">
              <img
                src={item.image}
                alt={item.brand}
                className="w-full h-[197px] object-cover rounded-t-2xl group-hover:scale-105 duration-300"
              />

              <p
                className={clsx(
                  "absolute top-4 left-4 px-2 py-1 rounded-2xl text-white text-[12px]",
                  item.isAvaliable ? "bg-[#2563ebe6]" : "bg-[#fb2c36]"
                )}
              >
                {item.isAvaliable ? "Available Now" : "Unavailable"}
              </p>

              <div className="absolute bottom-4 right-4 bg-black/70 px-2 py-1 rounded-md">
                <p className="text-white font-semibold text-[16px]">
                  ${item.pricePerDay}
                  <span className="text-[14px] text-gray-300 font-normal"> /day</span>
                </p>
              </div>
            </div>

            <div className="px-4 py-5 flex flex-col gap-4">
              <div>
                <p className="text-[18px] font-semibold">
                  {item.brand} <span>{item.model}</span>
                </p>
                <p className="text-[14px] text-gray-600">
                  {item.category} • {item.year}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-y-2 text-gray-600 text-[14px]">
                <span className="flex flex-row h-2.5 items-center gap-1 mt-3">
                  <img src={iconPeople} alt="seats" />
                  {item.seating_capacity} Seats
                </span>
                <span className="flex flex-row h-2.5 items-center gap-1 mt-3">
                  <img src={iconBenzin} alt="fuel" />{item.fuel_type}
                </span>
                <span className="flex flex-row h-2.5 items-center gap-1 mt-3">
                  <img src={iconHuman} alt="transmission" />{item.transmission}
                </span>
                <span className="flex flex-row h-2.5 items-center gap-1 mt-3">
                  <img src={iconLocation} alt="location" />{item.location}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <button 
        onClick={() => navigate('/cars')}
        className="flex items-center justify-center gap-2 px-8 py-3 border border-gray-400 hover:bg-gray-50 rounded-md mt-4 cursor-pointer text-[16px] font-medium transition-colors"
      >
        Explore all cars
        <img alt="arrow" src="data:image/svg+xml,%3csvg%20width='15'%20height='12'%20viewBox='0%200%2015%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.999912%205.87109L14.0908%205.87109'%20stroke='%232B3441'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8.94796%200.999381L14.0908%205.86981L8.94796%2010.7402'%20stroke='%232B3441'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e" />
      </button>

    </motion.div>
  );
};

export default FeaturedVehicles;