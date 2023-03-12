import React from "react";
import Home from "./Components/Home";
import { WeatherProvider } from "./Context/weatherContext";
import "./App.css";

const App = () => {
  return (
    <WeatherProvider>
      <Home />
    </WeatherProvider>
  );
};

export default App;
