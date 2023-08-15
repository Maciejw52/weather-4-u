import React, {FC} from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import { WeatherCardProps } from '@/app/app.interface';

const WeatherCard: FC<WeatherCardProps> = ({ weatherData }) => {
  const { location, current } = weatherData;

  return (
    <Card component='section' className={`bg-gray-100 rounded-lg shadow-md p-4 w-full`}>
      <CardContent>
        <Typography variant="h4" component="h2">
          {location.name}, {location.country}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {current.condition.text}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Image src={`https:${current.condition.icon}`} alt="Weather Icon" width={64} height={64} />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h4">
              {current.temp_c}°C
            </Typography>
            <Typography color="textSecondary">
              Feels like {current.feelslike_c}°C
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" component="p" className="text-gray-600">
          Wind: {current.wind_kph} km/h {current.wind_dir}
        </Typography>
        <Typography variant="body2" component="p" className="text-gray-600">
          Pressure: {current.pressure_mb} mb
        </Typography>
        <Typography variant="body2" component="p" className="text-gray-600">
          Humidity: {current.humidity}%
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
