export const fetchWeatherData = async (location: string) => {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=9a035fdd69824aa4a59150008231008&q=${location}&aqi=no`,
      { next: { revalidate: 60 } }
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching weather data: ' + error.message);
  }
};
