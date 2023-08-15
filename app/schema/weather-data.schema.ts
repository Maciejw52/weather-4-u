import Ajv, { JSONSchemaType } from "ajv";

// Define the JSON schema for the weather data
const weatherDataSchema: JSONSchemaType<WeatherData> = {
  type: "object",
  properties: {
    location: {
      type: "object",
      properties: {
        name: { type: "string" },
        region: { type: "string" },
        country: { type: "string" },
        lat: { type: "number" },
        lon: { type: "number" },
        tz_id: { type: "string" },
        localtime_epoch: { type: "number" },
        localtime: { type: "string" },
      },
      required: ["name", "country"],
    },
    current: {
      type: "object",
      properties: {
        last_updated_epoch: { type: "number" },
        last_updated: { type: "string" },
        temp_c: { type: "number" },
        temp_f: { type: "number" },
        is_day: { type: "number" },
        condition: {
          type: "object",
          properties: {
            text: { type: "string" },
            icon: { type: "string" },
            code: { type: "number" },
          },
          required: ["text", "icon", "code"],
        },
        wind_mph: { type: "number" },
        wind_kph: { type: "number" },
        wind_degree: { type: "number" },
        wind_dir: { type: "string" },
        pressure_mb: { type: "number" },
        pressure_in: { type: "number" },
        precip_mm: { type: "number" },
        precip_in: { type: "number" },
        humidity: { type: "number" },
        cloud: { type: "number" },
        feelslike_c: { type: "number" },
        feelslike_f: { type: "number" },
        vis_km: { type: "number" },
        vis_miles: { type: "number" },
        uv: { type: "number" },
        gust_mph: { type: "number" },
        gust_kph: { type: "number" },
      },
      required: ["condition", "temp_c", "feelslike_c", "wind_kph", "wind_dir", "pressure_mb", "humidity"],
    },
  },
  required: ["location", "current"],
};

export const validateWeatherData = (data: any): data is WeatherData => {
  const ajv = new Ajv();
  const validate = ajv.compile(weatherDataSchema);
  return validate(data);
};

interface WeatherData {
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
  };
  current: {
    last_updated_epoch: number;
    last_updated: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    vis_km: number;
    vis_miles: number;
    uv: number;
    gust_mph: number;
    gust_kph: number;
  };
}

export default weatherDataSchema;
