import { HeaderMobile } from '../components/HeaderMobile'
import HeaderDesktop from "../components/HeaderDesktop";
import Login from "../components/Login";
import Footer from "../components/footer";

import CarsPage from "../components/CarsPage";

export const Cars = () => {
  return (
    <>
      <div className="hidden md:block">
        <HeaderDesktop />
        <Login />
        <CarsPage />
        <Footer />
      </div>

      <div className="block md:hidden">
        <HeaderMobile />
        <Login />
        <CarsPage />
        <Footer />
      </div>
    </>
    
  );
};

export default Cars;
