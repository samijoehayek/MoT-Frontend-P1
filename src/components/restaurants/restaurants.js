import React from "react";
import RestaurantBox from "../restaurant-box/restaurant-box";
import CirclesImage from "../circles-image/circles-image";

const Restaurants = () => {
  return (
    <div className="relative">
      <CirclesImage />
      <RestaurantBox />
    </div>
  );
};

export default Restaurants;
