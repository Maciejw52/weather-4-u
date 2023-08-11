  'use client'

  import React, { useState } from 'react';
import { Box, Container, CircularProgress, Alert } from '@mui/material';
import { SearchBox } from './components/search-box';
import WeatherCard from './components/weather-card';
import { fetchWeatherData } from './api/api';

export default function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (location: string) => {
    setIsLoading(true);
    setIsError(false);
    setWeatherData(null);

    try {
      const data = await fetchWeatherData(location);
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <SearchBox onSearch={handleSearch} isError={isError} isSuccess={!!weatherData}/>
      <Box 
        sx={{
          paddingTop: '1em',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '100%',
        }}
      >
        {isLoading && <CircularProgress /> }
        {isError && <Alert severity="error">No matching location found. Please try a different Location.</Alert>}
        {weatherData && <WeatherCard weatherData={weatherData} />}
      </Box>
    </Container>
  );
}
