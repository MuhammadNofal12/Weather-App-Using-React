import React from "react";
import "./WeatherApp.css"; // Import the CSS file

function WeatherResult({ weather }) {
  const { name, main, weather: weatherData, wind } = weather;

  return (
    <div id="weatherResult">
      <h2>Weather in {name}</h2>
      <p>Temperature: {main.temp}°C</p>
      <p>Weather: {weatherData[0].description}</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Wind Speed: {wind.speed} m/s</p>
    </div>
  );
}

export default WeatherResult;
