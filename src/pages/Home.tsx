import React from "react";
import { HeaderMobile } from '../components/HeaderMobile'
import HeaderDesktop from "../components/HeaderDesktop";
import Login from "../components/Login";
import LuxuryCarsOnRent from "../components/LuxuryCarsOnRent";
import FeaturedVehicles from "../components/FeaturedVehicles";
import DoyouOwnCar from "../components/DoyouOwnCar";
import Costomers from "../components/costomers";
import Input from "../components/input";
import Footer from "../components/footer";

export const Home = () => {
  return (
    <>
      <div className="hidden md:block">
        <HeaderDesktop />
        <Login />
        <LuxuryCarsOnRent />
        <FeaturedVehicles />
        <DoyouOwnCar />
        <Costomers />
        <Input />
        <Footer />
      </div>

      <div className="block md:hidden">
        <HeaderMobile />
        <Login />
        <LuxuryCarsOnRent />
        <FeaturedVehicles />
        <DoyouOwnCar />
        <Costomers />
        <Input />
        <Footer />
      </div>
    </>
  );
};

export default Home;
