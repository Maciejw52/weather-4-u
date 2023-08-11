  'use client'

  import React, { useState } from 'react';
import { Box, Container, CircularProgress, Alert } from '@mui/material';
import SearchBox from './components/search-box';
import WeatherCard from './components/weather-card';
import RecentlySearched from './components/recently-searched';
import { fetchWeatherData } from './api/api';

const Home = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [recentSearches, setRecentSearches] = useState<Array<string>>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Search function to be executed on enter or press of submit
  const handleSearch = async (location: string) => {
    setIsLoading(true);
    setIsError(false);
    setWeatherData(null);

    try {
      const data = await fetchWeatherData(location);
      setWeatherData(data);
      // Check if the location already exists in recentSearches
      if (!recentSearches.includes(location)) {
        setRecentSearches(prevSearches => [location, ...prevSearches]);
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" className="min-h-screen">
      <SearchBox onSearch={handleSearch} isError={isError} isSuccess={!!weatherData}/>
      <Box className="py-4 flex justify-center items-center max-w-full">
        {isLoading && <CircularProgress /> }
        {isError && <Alert severity="error">No matching location found. Please try a different Location.</Alert>}
        {weatherData && <WeatherCard weatherData={weatherData} />}
      </Box>
      {recentSearches.length !== 0 && <RecentlySearched recentSearches={recentSearches} onSearch={handleSearch}/>}
    </Container>
  );
}

export default Home