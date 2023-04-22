import { gql } from "@apollo/client";

export const GET_QUERY = gql`
  query MyQuery(
    $current_weather: String
    $daily: String
    $hourly: String
    $latitude: String!
    $longitude: String!
    $timezone: String!
  ) {
    myQuery(
      hourly: $hourly
      daily: $daily
      current_weather: $current_weather
      latitude: $latitude
      longitude: $longitude
      timezone: $timezone
    ) {
      current_weather {
        time
        is_day
        temperature
        weathercode
        winddirection
        windspeed
      }
      daily {
        apparent_temperature_max
        apparent_temperature_min
        sunrise
        sunset
        temperature_2m_max
        temperature_2m_min
        time
        uv_index_clear_sky_max
        uv_index_max
        weathercode
      }
      daily_units {
        apparent_temperature_max
        sunrise
        apparent_temperature_min
        sunset
        temperature_2m_max
        temperature_2m_min
        time
        uv_index_clear_sky_max
        uv_index_max
        weathercode
      }
      elevation
      generationtime_ms
      hourly {
        apparent_temperature
        is_day
        precipitation
        precipitation_probability
        rain
        showers
        relativehumidity_2m
        snow_depth
        snowfall
        temperature_2m
        time
        uv_index
        uv_index_clear_sky
        windgusts_10m
      }
      hourly_units {
        apparent_temperature
        is_day
        precipitation
        precipitation_probability
        rain
        relativehumidity_2m
        showers
        snow_depth
        snowfall
        temperature_2m
        time
        uv_index
        uv_index_clear_sky
        windgusts_10m
      }
      latitude
      timezone
      timezone_abbreviation
      longitude
      utc_offset_seconds
    }
  }
`;
