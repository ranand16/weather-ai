"use client";

import React from "react";
import { AreaChart, Card, Title } from "@tremor/react";

interface HumidityChartProps {
  results: Root;
}
const HumidityChart: React.FC<HumidityChartProps> = ({ results }) => {
  const hourly = results.hourly.time
    .map((time) =>
      new Date(time).toLocaleString("en-US", {
        hour: "numeric",
        hour12: false,
      })
    )
    .slice(0, 24);

  const data = hourly.map((hour, i) => ({
    time: Number(hour),
    "Humidity (%)": results.hourly.relativehumidity_2m[i],
  }));

  return (
    <Card>
      <Title>Humidity Levels</Title>
      <AreaChart
        data={data}
        className="mt-6"
        showLegend
        index="time"
        categories={["Humidity (%)"]}
        colors={["green"]}
        minValue={0}
        maxValue={100}
        valueFormatter={(number: number) => `${number} %`}
        yAxisWidth={40}
      />
    </Card>
  );
};

export default HumidityChart;
