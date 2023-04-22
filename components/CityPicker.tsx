"use client";

import { City, Country } from "country-state-city";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Select from "react-select";
import { GlobeIcon } from "@heroicons/react/solid";
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

const cityOptions = (country: option) =>
  City.getCitiesOfCountry(country?.value.isoCode || "")?.map((state) => ({
    value: {
      latitude: state?.latitude || "",
      longitude: state?.longitude || "",
      countryCode: state?.countryCode || "",
      name: state?.name || "",
      stateCode: state?.stateCode || "",
    },
    label: state?.name || "",
  }));

const countryOptions = Country.getAllCountries().map((c) => ({
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

  const handleSelectedCity = (cityOption: cityOption) => {
    setSelectedCity(cityOption);
    router.push(
      `/location/${cityOption?.value.name}/${cityOption?.value.latitude}/${cityOption?.value.longitude}`
    );
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-white/80">
          <GlobeIcon className="h-5 w-5 text-white" />
          <label htmlFor="country">Country</label>
        </div>
        <Select
          className="text-black"
          value={selectedCountry}
          onChange={handleSelectedCountry}
          options={countryOptions}
        />
      </div>

      {selectedCountry && (
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-white/80">
            <GlobeIcon className="h-5 w-5 text-white" />
            <label htmlFor="city">City</label>
          </div>
          <Select
            className="text-black"
            value={selectedCity}
            onChange={handleSelectedCity}
            options={cityOptions(selectedCountry)}
          />
        </div>
      )}
    </div>
  );
};

export default CityPicker;
