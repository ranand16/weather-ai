interface CurrentWeather {
  is_day: Int!;
  temperature: Float!;
  time: DateTime!;
  weathercode: Int!;
  winddirection: Int!;
  windspeed: Float!;
}

interface Daily {
  apparent_temperature_max: [Float!]!;
  apparent_temperature_min: [Float!]!;
  sunrise: [DateTime!]!;
  sunset: [DateTime!]!;
  temperature_2m_max: [Float!]!;
  temperature_2m_min: [Float!]!;
  time: [Date!]!;
  uv_index_clear_sky_max: [Float!]!;
  uv_index_max: [Float!]!;
  weathercode: [Int!]!;
}

interface DailyUnits {
  apparent_temperature_max: String!;
  apparent_temperature_min: String!;
  sunrise: String!;
  sunset: String!;
  temperature_2m_max: String!;
  temperature_2m_min: String!;
  time: String!;
  uv_index_clear_sky_max: String!;
  uv_index_max: String!;
  weathercode: String!;
}

interface Hourly {
  apparent_temperature: [Float!]!;
  is_day: [Int!]!;
  precipitation: [Float!]!;
  precipitation_probability: [Int!]!;
  rain: [Int!]!;
  relativehumidity_2m: [Int!]!;
  showers: [Float!]!;
  snow_depth: [Int!]!;
  snowfall: [Int!]!;
  temperature_2m: [Float!]!;
  time: [DateTime!]!;
  uv_index: [Float!]!;
  uv_index_clear_sky: [Float!]!;
  windgusts_10m: [Float!]!;
}

interface HourlyUnits {
  apparent_temperature: String!;
  is_day: String!;
  precipitation: String!;
  precipitation_probability: String!;
  rain: String!;
  relativehumidity_2m: String!;
  showers: String!;
  snow_depth: String!;
  snowfall: String!;
  temperature_2m: String!;
  time: String!;
  uv_index: String!;
  uv_index_clear_sky: String!;
  windgusts_10m: String!;
}

interface Root {
  current_weather: CurrentWeather;
  daily: Daily;
  daily_units: DailyUnits;
  elevation: Int;
  generationtime_ms: Float;
  hourly: Hourly;
  hourly_units: HourlyUnits;
  latitude: Float;
  longitude: Float;
  timezone: String;
  timezone_abbreviation: Int;
  utc_offset_seconds: Int;
}