export const weatherCodeToString: {
  [key: number]: {
    icon: string;
    label: string;
  };
} = {
  0: {
    icon: "c01d",
    label: "Clear sky",
  },
  1: {
    icon: "c02d",
    label: "Few clouds",
  },
  2: {
    icon: "c02d",
    label: "Scattered clouds",
  },
  3: {
    icon: "c03d",
    label: "Broken clouds",
  },
  4: {
    icon: "c04d",
    label: "Overcast clouds",
  },
  10: {
    icon: "c01n",
    label: "Clear sky (night)",
  },
  11: {
    icon: "c02n",
    label: "Few clouds (night)",
  },
  12: {
    icon: "c02n",
    label: "Scattered clouds (night)",
  },
  13: {
    icon: "c03n",
    label: "Broken clouds (night)",
  },
  14: {
    icon: "c04n",
    label: "Overcast clouds (night)",
  },
  20: {
    icon: "d01d",
    label: "Mist",
  },
  21: {
    icon: "d02d",
    label: "Fog",
  },
  22: {
    icon: "d03d",
    label: "Freezing fog",
  },
  30: {
    icon: "r01d",
    label: "Drizzle",
  },
  31: {
    icon: "r02d",
    label: "Rain",
  },
  32: {
    icon: "r03d",
    label: "Heavy rain",
  },
  33: {
    icon: "r04d",
    label: "Thunderstorm",
  },
  40: {
    icon: "s01d",
    label: "Snow",
  },
  41: {
    icon: "s02d",
    label: "Heavy snow",
  },
  42: {
    icon: "s03d",
    label: "Sleet",
  },
  43: {
    icon: "s04d",
    label: "Rain and snow",
  },
};
