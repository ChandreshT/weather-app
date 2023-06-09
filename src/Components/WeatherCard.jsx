import React from "react";

const WeatherCard = ({ city, temp, weather, country }) => {
  const today = new Date();
  const currentMonth = today.toLocaleString("default", { month: "short" });
  const currentDate = today.getDate();

  return (
    <div className="widget">
      <div className="weatherIcon">
        <i className="wi wi-day-cloudy" />
      </div>
      <div className="weatherInfo">
        <div className="temperature">
          <span>{`${temp}°C`}</span>
        </div>
        <div className="description">
          <div className="weatherCondition">{weather}</div>
          <div className="place">{`${city}, ${country}`}</div>
        </div>
      </div>
      <div className="date">{`${currentDate} ${currentMonth}`}</div>
    </div>
  );
};

export default WeatherCard;
