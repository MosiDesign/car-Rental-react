import { motion } from "framer-motion";

const MyBookingsHeader = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-48 mt-16 text-sm max-w-7xl mx-auto mb-20 md:mb-40" 
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex flex-col justify-center items-center text-center md:items-start md:text-left"
      >
        <h1 className="font-semibold text-4xl md:text-[40px]">
          My Bookings
        </h1>

        <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-lg">
          View and manage all your car bookings
        </p>
      </motion.div>
    </motion.section>
  );
};

export default MyBookingsHeader;