import { createContext, useState } from "react";
import AccuWeather from "../api/AccuWeather";

const weatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [city, SetCity] = useState("");
  const [country, SetCountry] = useState("");
  const [temp, SetTemp] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [weather, setWeather] = useState("");

  const onSearch = async (term) => {
    try {
      const response = await AccuWeather.get("/locations/v1/cities/search", {
        params: {
          q: term,
        },
      });
      const getData = response.data[0];
      const locationKey = getData.Key;
      const weatherData = await AccuWeather.get(
        `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}`
      );
      const getWeatherData = weatherData.data[0];
      setIsLoading(false);
      SetCountry(getData.Country.EnglishName);
      SetCity(getData.EnglishName);
      SetTemp(getWeatherData.Temperature.Metric.Value);
      setWeather(getWeatherData.WeatherText);
      setErrorMessage("");
    } catch (error) {
      setIsLoading(false);
      setErrorMessage("Please enter a valid city name");
    }
  };

  return (
    <weatherContext.Provider
      value={{
        city,
        temp,
        country,
        isLoading,
        errorMessage,
        weather,
        onSearch,
      }}
    >
      {children}
    </weatherContext.Provider>
  );
};

export default weatherContext;
