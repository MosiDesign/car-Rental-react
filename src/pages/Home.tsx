import React from "react";
import { HeaderMobile } from '../components/HeaderMobile'
import HeaderDesktop from "../components/HeaderDesktop";
import Login from "../components/Login";
import LuxuryCarsOnRent from "../components/LuxuryCarsOnRent";
import FeaturedVehicles from "../components/FeaturedVehicles";

export const Home = () => {
  return (
    <>
      <div className="hidden md:block">
        <HeaderDesktop />
        <Login />
        <LuxuryCarsOnRent />
        <FeaturedVehicles />
      </div>

      <div className="block md:hidden">
        <HeaderMobile />
        <Login />
        <LuxuryCarsOnRent />
        <FeaturedVehicles />
      </div>
    </>
  );
};

export default Home;
