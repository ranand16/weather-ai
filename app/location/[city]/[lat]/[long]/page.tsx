"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface WeatherProps {
  params: {
    city: string;
    lat: string;
    long: string;
  };
}

const Weather: React.FC<WeatherProps> = ({ params: { city, lat, long } }) => {
  return (
    <div>
      Welcome to weather page {city} -- {lat} -- {long}
    </div>
  );
};

export default Weather;
