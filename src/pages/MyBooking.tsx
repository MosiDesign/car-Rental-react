import React from "react";
import { HeaderMobile } from '../components/HeaderMobile'
import HeaderDesktop from "../components/HeaderDesktop";
import Login from "../components/Login";
import Footer from "../components/footer";

function MyBooking() {
  return (
    <>
      <div className="hidden md:block">
        <HeaderDesktop />
        <Login />
        <div className="flex flex-col justify-center items-center text-center  md:items-start md:text-left pl-32 pt-15">
          <h1 className="font-semibold text-4xl md:text-[40px]">My Bookings</h1>
          <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-156">View and manage your all car bookings</p>
        </div>
        <Footer />
      </div>

      <div className="block md:hidden">
        <HeaderMobile />
        <Login />
        <div className="flex flex-col justify-center items-center text-center mt-15 md:items-start md:text-left">
          <h1 className="font-semibold text-4xl md:text-[40px]">My Bookings</h1>
          <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-156">View and manage your all car bookings</p>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default MyBooking;
