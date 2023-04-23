import { getClient } from "@/apollo-client";
import CalloutCard from "@/components/CalloutCard";
import HumidityChart from "@/components/HumidityChart";
import InformationPanel from "@/components/InformationPanel";
import RainChart from "@/components/RainChart";
import StatCard from "@/components/StatCard";
import TempChart from "@/components/TempChart";
import { GET_QUERY } from "@/graphql/queries/fetchWeather";
import { cleanData } from "@/lib/cleanData";
import { basePath } from "@/lib/platform";
import axios from "axios";
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

  const getBasePath = basePath();
  console.log("🚀 ~ file: page.tsx:37 ~ Weather ~ getBasePath:", getBasePath);
  // const dataForSummary = await fetch(`${getBasePath}/api/getWeatherSummary`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     weatherData: cleanData(results, city),
  //   }),
  // });
  // console.log(
  //   "🚀 ~ file: page.tsx:38 ~ dataForSummary ~ dataForSummary:",
  //   dataForSummary
  // );

  // dataForSummary
  //   .json()
  //   .then((res) => {
  //     console.log("🚀 ~ file: page.tsx:50 ~ Weather ~ summaryResponse:");
  //     console.log(res);
  //   })
  //   .catch((e) => {
  //     console.log(e);
  //   });

  return (
    <div className="flex flex-col min-h-screen md:flex-row">
      <InformationPanel city={city} results={results} lat={lat} long={long} />
      <div className="flex-1 p-5 lg:p-10">
        <div className="p-5">
          <div className="pb-5">
            <h2 className="text-xl font-bold">Todays Overview</h2>
            <p className="text-sm text-gray-400">
              Last updated at:
              {new Date(results?.current_weather.time).toLocaleDateString()}
              {results?.timezone}
            </p>
          </div>
          <div className="m-2 mb-10">
            <CalloutCard message={""} />
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 m-2">
            <StatCard
              title="Maximum temperature"
              color="yellow"
              metric={results?.daily?.temperature_2m_max[0].toFixed(1)}
            />
            <StatCard
              title="Minimum temperature"
              color="green"
              metric={results?.daily?.temperature_2m_min[0].toFixed(1)}
            />
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 m-2">
              <StatCard
                title="UV Index"
                color="rose"
                metric={results?.daily.uv_index_max[0].toFixed(1)}
              />
              {Number(results?.daily?.uv_index_max[0]?.toFixed(1)) > 5 && (
                <CalloutCard message={"The UV is high today "} warning />
              )}
            </div>
            <div className="flex space-x-3">
              <StatCard
                title="Wind Speed"
                color="cyan"
                metric={`${results?.current_weather?.windspeed.toFixed(1)}m/s`}
              />
              <StatCard
                title="Wind Direction"
                color="violet"
                metric={`${results?.current_weather?.winddirection.toFixed(
                  1
                )}°`}
              />
            </div>
          </div>
        </div>
        <hr className="mb-5" />
        <div className="spac-y-3">
          <TempChart results={results} />
          <RainChart results={results} />
          <HumidityChart results={results} />
        </div>
      </div>
    </div>
  );
}

export default Weather;
