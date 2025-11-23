import { motion } from "framer-motion"; 
import image_car from '../images/doyouCar.png';

function DoyouOwnCar() {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className="flex flex-col md:flex-row md:items-start items-center justify-between px-8 md:pl-14 pt-10 bg-linear-to-r from-[#0558FE] to-[#A9CFFF] max-w-6xl mx-3 md:mx-auto rounded-2xl overflow-hidden overflow-x-hidden">
        
        <div className="text-white z-10 relative">
            <h2 className="text-3xl font-medium">Do You Own a Luxury Car?</h2>
            <p className="mt-2">Monetize your vehicle effortlessly by listing it on CarRental.</p>
            <p className="max-w-lg">We take care of insurance, driver verification and secure payments — so you can earn passive income, stress-free.</p>
            <button className="px-6 py-2 bg-white hover:bg-slate-100 transition-all text-[#2574EF] rounded-lg text-sm mt-6 cursor-pointer font-semibold">List your car</button>
        </div>
        
        <motion.img 
            alt="car" 
            src={image_car} 
            className="mt-10 md:mt-0 w-full max-w-[700px] md:max-w-[400px] object-contain z-0 relative" 

            initial={{ x: 200, opacity: 0 }}

            animate={{ x: 0, opacity: 1 }}

            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        />
    </motion.div>
  )
}

export default DoyouOwnCar