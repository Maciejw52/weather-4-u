export interface WeatherData {
  location: {
    name: string;
    country: string;
  };
  current: {
    condition: {
      text: string;
      icon: string;
    };
    temp_c: number;
    feelslike_c: number;
    wind_kph: number;
    wind_dir: string;
    pressure_mb: number;
    humidity: number;
  };
}

export interface WeatherCardProps {
  weatherData: WeatherData;
}

export interface RecentlySearchedProps {
  recentSearches: Array<string>; 
  onSearch: (location: string) => Promise<void>;
}

export interface SearchBoxProps {
  onSearch: (location: string) => Promise<void>, 
  isError: boolean, 
  isSuccess: boolean
}
