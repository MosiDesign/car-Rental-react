import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useNavigate } from "react-router";
import iconPeople from '../images/people.svg'
import iconHuman from '../images/human.svg'
import iconBenzin from '../images/benzin.svg'
import iconLocation from '../images/location.svg'

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
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getCars = async () => {
        const { data } = await axios.get("/api/user/cars"); 
        setCars(data.cars || []); 
    };
    getCars();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="flex flex-col gap-20 px-6 py-24 bg-white"
    >

      <div className="flex flex-col items-center text-center gap-2">
        <p className="text-[36px] font-semibold sm:text-[40px]">Featured Vehicles</p>
        <p className="text-[14px] sm:text-[16px] text-gray-500">
          Explore our selection of premium vehicles for your next adventure.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:px-40">
        {cars.slice(0, 6).map((item) => (
          <motion.div
            key={item._id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col cursor-pointer overflow-hidden rounded-2xl shadow-xl group bg-white"
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
                    <img src={iconPeople} />
                    {item.seating_capacity} Seats
                </span>
                <span className="flex flex-row h-2.5 items-center gap-1 mt-3"><img src={iconBenzin} />{item.fuel_type}</span>
                <span className="flex flex-row h-2.5 items-center gap-1 mt-3"><img src={iconHuman} />{item.transmission}</span>
                <span className="flex flex-row h-2.5 items-center gap-1 mt-3"><img src={iconLocation} />{item.location}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default FeaturedVehicles;
