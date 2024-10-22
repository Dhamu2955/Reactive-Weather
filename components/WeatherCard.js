import React from "react";
import Sunny from "../assets/Sunny.svg"
import Cloudy from "../assets/Cloudy.svg"
import Rainy from "../assets/Rainy.svg"
import PartlyCloudy from "../assets/PartlyCloudy.svg"


function WeatherCard({cities}) {
  let image;
  switch(cities.forecast){
    case "Sunny" :
      image = Sunny
      break;
    case "Cloudy" :
      image = Cloudy
      break; 
    case "Rainy" :
      image = Rainy
      break;
    case "Partly cloudy" :
      image = PartlyCloudy
      break; 

  }

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