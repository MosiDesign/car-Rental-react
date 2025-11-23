import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useNavigate } from "react-router";
import iconPeople from "../images/people.svg";
import iconHuman from "../images/human.svg";
import iconBenzin from "../images/benzin.svg";
import iconLocation from "../images/location.svg";

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

// دریافت search از طریق props
const FeaturedVehicles_Cars = ({ search }: { search: string }) => {
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

  // فیلتر کردن ماشین‌ها بر اساس props search
  const filteredCars = cars.filter((item) => {
    if (search === "") return true;
    return (
      item.model.toLowerCase().includes(search.toLowerCase()) ||
      item.brand.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="flex flex-col gap-4 px-6 pb-10 bg-white w-full"
    >
      <p className="text-gray-700 text-start max-w-7xl w-full mx-auto mt-10 sm:px-40">
        Showing {filteredCars.length} Cars
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:px-40 max-w-7xl w-full mx-auto">
        {filteredCars.slice(0, 6).map((item) => (
          <motion.div
            key={item._id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onClick={() => navigate(`/cars/${item._id}`)}
            className="flex flex-col cursor-pointer overflow-hidden rounded-2xl shadow-xl group bg-white h-full justify-between"
          >
             {/* ... محتویات کارت ماشین (تصویر و متن) همان کد قبلی ... */}
            <div className="relative">
              <img src={item.image} alt={item.brand} className="w-full h-[197px] object-cover rounded-t-2xl group-hover:scale-105 duration-300" />
              <p className={clsx("absolute top-4 left-4 px-2 py-1 rounded-2xl text-white text-[12px]", item.isAvaliable ? "bg-[#2563ebe6]" : "bg-[#fb2c36]")}>
                {item.isAvaliable ? "Available Now" : "Unavailable"}
              </p>
              <div className="absolute bottom-4 right-4 bg-black/70 px-2 py-1 rounded-md">
                <p className="text-white font-semibold text-[16px]">${item.pricePerDay}<span className="text-[14px] text-gray-300 font-normal">/day</span></p>
              </div>
            </div>

            <div className="px-4 py-5 flex flex-col gap-4">
              <div>
                <p className="text-[18px] font-semibold">{item.brand} <span>{item.model}</span></p>
                <p className="text-[14px] text-gray-600">{item.category} • {item.year}</p>
              </div>
              <div className="grid grid-cols-2 gap-y-2 text-gray-600 text-[14px]">
                 <span className="flex flex-row h-2.5 items-center gap-1 mt-3"><img src={iconPeople} alt="seats" />{item.seating_capacity} Seats</span>
                 <span className="flex flex-row h-2.5 items-center gap-1 mt-3"><img src={iconBenzin} alt="fuel" />{item.fuel_type}</span>
                 <span className="flex flex-row h-2.5 items-center gap-1 mt-3"><img src={iconHuman} alt="transmission" />{item.transmission}</span>
                 <span className="flex flex-row h-2.5 items-center gap-1 mt-3"><img src={iconLocation} alt="location" />{item.location}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredCars.length === 0 && (
        <div className="text-center text-gray-500 mt-10">
          No cars found matching "{search}"
        </div>
      )}
    </motion.div>
  );
};

export default FeaturedVehicles_Cars;