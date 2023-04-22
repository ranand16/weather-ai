"use client";

import { Card, Color, Metric, Text } from "@tremor/react";
import React from "react";

interface StatCardProps {
  title: string;
  metric: string;
  color?: Color;
}

function StatCard({ metric, title, color }: StatCardProps) {
  return (
    <Card decoration="top" decorationColor={color}>
      <Text>{title}</Text>
      <Metric>{metric}</Metric>
    </Card>
  );
}

export default StatCard;
