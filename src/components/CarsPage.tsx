import React, { useState } from "react";
import AvailableCars from "./AvailableCars";
import FeaturedVehicles_Cars from "./FeaturedVehicles_Cars";

const CarsPage = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="w-full">
      <AvailableCars search={search} setSearch={setSearch} />

      <FeaturedVehicles_Cars search={search} />
    </div>
  );
};

export default CarsPage;