import React from 'react';
import { getWeatherIcon } from "./GetWeatherIcon";

function Location({data, location, setLocation}){
    const cityData = data.find(item => item.city.toLowerCase() === location.toLowerCase());
    const image = getWeatherIcon(cities.forecast)
    
    if (!cityData) {
        return <div>No data found for the specified location.</div>;
    }


    return (
        <div className="card">
            <div className="img-container">
                <img className="card-img-top" src={image} alt="Weather icon" id="icon" />
            </div>
            <div className="card-body">
                <h3 className="card-title">{cityData.city}</h3>
                <h5 className="card-text">{cityData.temperature}°C</h5>
                <h5 className="card-text">{cityData.forecast}</h5>
            </div>
        </div>
    );
}

module.exports = Location;