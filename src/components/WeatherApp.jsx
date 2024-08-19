import React, { useState, useEffect } from "react";
import "./WeatherApp.css";
import WeatherResult from "./WeatherResult"; // A new component to display the weather

function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const getWeather = () => {
    if (!city) {
      alert("Please enter a city name");
      return;
    }

    const apiKey = "7068d2aa184698e8a91ada2afb094069";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("City not found");
        }
        return response.json();
      })
      .then((data) => {
        setWeather(data);
        setError("");
      })
      .catch((err) => {
        setError(err.message);
        setWeather(null);
      });
  };

  return (
    <div className="container">
      <h1>Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={handleCityChange}
        placeholder="Enter city name"
      />
      <button onClick={getWeather}>Get Weather</button>
      {error && <p>{error}</p>}
      {weather && <WeatherResult weather={weather} />}
    </div>
  );
}

export default WeatherApp;
