"use client";

import { Country } from "country-state-city";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Select from "react-select";
import {GlobeIcon} from "@heroicons/react/solid"
type option = {
  value: {
    latitude: string;
    longitude: string;
    isoCode: string;
  };
  label: string;
} | null;

type cityOption = {
  value: {
    latitude: string;
    longitude: string;
    countryCode: string;
    name: string;
    stateCode: string;
  };
  label: string;
} | null;

const options = Country.getAllCountries().map((c) => ({
  value: {
    latitude: c.latitude,
    longitude: c.longitude,
    isoCode: c.isoCode,
  },
  label: c.name,
}));

const CityPicker = () => {
  const [selectedCountry, setSelectedCountry] = useState<option>(null);
  const [selectedCity, setSelectedCity] = useState<cityOption>(null);

  const router = useRouter();

  const handleSelectedCountry = (selected: option) => {
    setSelectedCountry(selected);
    setSelectedCity(null);
  };

  return (
    <div className="">
      <div>
        <GlobeIcon  />
        <label htmlFor="country">Country</label>
      </div>
      <Select
        className="text-black"
        value={selectedCountry}
        onChange={handleSelectedCountry}
        options={options}
      />
    </div>
  );
};

export default CityPicker;
