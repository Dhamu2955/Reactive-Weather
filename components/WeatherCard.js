import React from "react";
import { getWeatherIcon } from "./GetWeatherIcon";


function WeatherCard({cities}) {
  const image = getWeatherIcon(cities.forecast)

  return (
    <div className = "card">
        <div className = "img-container">
            <img className="card-img-top" src = {image} alt="Card image cap" id = "icon"/>
        </div>
        <div class="card-body">
            <h3 className="card-title">{cities.city}</h3>
            <h5 className="card-text">{cities.temperature}</h5>
            <h5 className="card-text">{cities.forecast}</h5>
        </div>
    </div>
  );
};

module.exports = WeatherCard;