"use client";

import React from "react";
import { AreaChart, Card, Title } from "@tremor/react";

interface TempChartProps {
  results: Root;
}
const TempChart: React.FC<TempChartProps> = ({ results }) => {
  const hourly = results?.hourly.time
    .map((time) =>
      new Date(time).toLocaleString("en-US", {
        hour: "numeric",
        hour12: false,
      })
    )
    .slice(0, 24);

  const data = hourly.map((hour, i) => ({
    time: Number(hour),
    "UV Index": results?.hourly.uv_index[i],
    "Temperature (C)": results?.hourly.temperature_2m[i],
  }));

  return (
    <Card>
      <Title>Temperature & UV Index</Title>
      <AreaChart
        data={data}
        className="mt-6"
        showLegend
        index="time"
        categories={["Temperature (C)", "UV Index"]}
        colors={["yellow", "rose"]}
        minValue={0}
        valueFormatter={(number: number) => `${number} °C`}
        yAxisWidth={40}
      />
    </Card>
  );
};

export default TempChart;
