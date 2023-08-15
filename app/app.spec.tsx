import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Home from './page';
import { fetchWeatherData } from './api/api';

// Mock the API module
jest.mock('./api/api'); 

let mockWeatherData = {
  "location": {
      "name": "London",
      "country": "United Kingdom",
  },
  "current": {
      "last_updated_epoch": 1692095400,
      "last_updated": "2023-08-15 11:30",
      "temp_c": 19.0,
      "temp_f": 66.2,
      "condition": {
          "text": "Partly cloudy",
          "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
          "code": 1003
      },
      "wind_mph": 8.1,
      "wind_kph": 13.0,
      "wind_degree": 280,
      "wind_dir": "W",
      "pressure_mb": 1016.0,
      "pressure_in": 30.0,
      "precip_mm": 0.0,
      "precip_in": 0.0,
      "humidity": 73,
      "cloud": 25,
      "feelslike_c": 19.0,
  }
}

describe('Home Component', () => {
  it('renders the home page component', () => {
    render(<Home />);
    
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('fetches weather data on search', async () => {
    fetchWeatherData.mockResolvedValue(mockWeatherData);

    render(<Home />);

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Mock Location' } });
    fireEvent.click(screen.getByRole('button'));
    
    expect(fetchWeatherData).toHaveBeenCalledWith('Mock Location');
    
    await waitFor(() => expect(screen.queryByRole('progressbar')).not.toBeInTheDocument());

    expect(screen.getByText(/Mock Location/i)).toBeInTheDocument();
    expect(screen.getByText(/Partly cloudy/i)).toBeInTheDocument();
  });

  it('displays error message on fetch failure', async () => {
    fetchWeatherData.mockRejectedValue(new Error('Test Error'));

    render(<Home />);
    
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Invalid Location' } });
    fireEvent.click(screen.getByRole('button'));

    expect(fetchWeatherData).toHaveBeenCalledWith('Invalid Location');
    
    await waitFor(() => expect(screen.queryByRole('progressbar')).not.toBeInTheDocument());

    expect(screen.getByText(/No matching location found/i)).toBeInTheDocument();
  });

  it('displays error message if received data does not include necessary attributes', async () => {
    // @ts-ignore
    mockWeatherData.location.name = undefined
    fetchWeatherData.mockResolvedValue(mockWeatherData);

    render(<Home />);
    
    fireEvent.change( screen.getByRole('textbox'), { target: { value: 'Invalid Location' } });
    fireEvent.click(screen.getByRole('button'));

    expect(fetchWeatherData).toHaveBeenCalledWith('Invalid Location');
    
    await waitFor(() => expect(screen.queryByRole('progressbar')).not.toBeInTheDocument());

    expect(screen.getByText(/No matching location found/i)).toBeInTheDocument();
  });
});
