import React, { useContext } from "react";
import WeatherCard from "./WeatherCard";
import SearchBar from "./SearchBar";
import Spinner from "./Spinner";
import weatherContext from "../Context/weatherContext";

const Home = () => {
  const { city, temp, country, isLoading, errorMessage, weather, onSearch } =
    useContext(weatherContext);
  return (
    <>
      <SearchBar onSearch={onSearch} />

      {isLoading ? (
        <>
          <Spinner />
        </>
      ) : errorMessage ? (
        <>
          <h2 className="error_msg">{errorMessage}❌</h2>
        </>
      ) : (
        <WeatherCard
          city={city}
          temp={temp}
          weather={weather}
          country={country}
        />
      )}
    </>
  );
};

export default Home;
