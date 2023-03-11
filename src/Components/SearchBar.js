import React, { useState } from "react";
import "./WeatherCard.css";

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const inputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onInputSubmit = (e) => {
    e.preventDefault();
    onSearch(inputValue);
  };

  return (
    <div className="container">
      <form onSubmit={onInputSubmit}>
        <div className="searchInputWrapper">
          <input
            className="searchInput"
            type="text"
            placeholder="Search Place"
            value={inputValue}
            onChange={inputChange}
          />
          <i className="searchInputIcon fa fa-search" />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
