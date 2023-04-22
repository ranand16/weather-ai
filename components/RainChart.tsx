"use client";

import React from "react";
import { AreaChart, Card, Title } from "@tremor/react";

interface RainChartProps {
  results: Root;
}
const RainChart: React.FC<RainChartProps> = ({ results }) => {
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
    "Rain (%)": results.hourly.precipitation_probability[i],
  }));

  return (
    <Card>
      <Title>Chances of Rain</Title>
      <AreaChart
        data={data}
        className="mt-6"
        showLegend
        index="time"
        categories={["Rain (%)"]}
        colors={["blue"]}
        minValue={0}
        maxValue={100}
        valueFormatter={(number: number) => `${number} °C`}
        yAxisWidth={40}
      />
    </Card>
  );
};

export default RainChart;
