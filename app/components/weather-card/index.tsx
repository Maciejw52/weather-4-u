import React from 'react';
import { Card, CardContent, Typography, Grid, makeStyles } from '@mui/material';
import Image from 'next/image';
import styles from "./weather-card.module.css";

const WeatherCard = ({ weatherData }) => {

  const { location, current } = weatherData;

  return (
    <Card className={styles.card}>
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
        <Typography variant="body2" component="p">
          Wind: {current.wind_kph} km/h {current.wind_dir}
        </Typography>
        <Typography variant="body2" component="p">
          Pressure: {current.pressure_mb} mb
        </Typography>
        <Typography variant="body2" component="p">
          Humidity: {current.humidity}%
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;

