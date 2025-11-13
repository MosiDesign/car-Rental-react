import React from "react";
import { HeaderMobile } from '../components/HeaderMobile'
import HeaderDesktop from "../components/HeaderDesktop";
import Login from "../components/Login";

function MyBooking() {
  return (
    <>
      <div className="hidden md:block">
        <HeaderDesktop />
        <Login />
      </div>

      <div className="block md:hidden">
        <HeaderMobile />
        <Login />
      </div>
    </>
  );
}

export default MyBooking;
