import { getClient } from "@/apollo-client";
import { GET_QUERY } from "@/graphql/queries/fetchWeather";
import React from "react";

interface WeatherProps {
  params: {
    city: string;
    lat: string;
    long: string;
  };
}

async function Weather({ params: { city, lat, long } }: WeatherProps) {
  const client = getClient();
  const { data } = await client.query({
    query: GET_QUERY,
    variables: {
      current_weather: "true",
      longitude: long,
      latitude: lat,
      timezone: "GMT",
    },
  });
  const results: Root = data.myQuery;
  console.log("🚀 ~ file: page.tsx:30 ~ results:", results);

  return (
    <div>
      Welcome to weather page {city} -- {lat} -- {long}
    </div>
  );
}

export default Weather;
