import React, { useState } from "react";
import WeatherCard from "./Components/WeatherCard";
import SearchBar from "./Components/SearchBar";
import AccuWeather from "./api/AccuWeather";

const App = () => {
  const [city, SetCity] = useState("___");
  const [temp, SetTemp] = useState("___");
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [weather, setWeather] = useState("___");

  const onSearch = async (term) => {
    try {
      const response = await AccuWeather.get("/locations/v1/cities/search", {
        params: {
          q: term,
        },
      });
      const locationKey = response.data[0].Key;
      const weatherData = await AccuWeather.get(
        `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}`
      );
      setIsLoading(false);
      SetCity(response.data[0].EnglishName);
      SetTemp(weatherData.data[0].Temperature.Metric.Value);
      setWeather(weatherData.data[0].WeatherText);
      setErrorMessage("");
    } catch (error) {
      setIsLoading(false);
      setErrorMessage("Please enter a valid city name");
    }
  };

  return (
    <>
      <SearchBar onSearch={onSearch} />

      {isLoading ? (
        <div>Loading...</div>
      ) : errorMessage ? (
        <div>{errorMessage}</div>
      ) : (
        <WeatherCard city={city} temp={temp} weather={weather} />
      )}
    </>
  );
};

export default App;
