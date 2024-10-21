import React from 'react';
const WeatherCard = require('./components/WeatherCard');
const cities = require('./data')

function App() {
    return (
        <>
            <h1 className = "title">REACTIVE WEATHER</h1>
            <h3 className = "subtitle">Up to the minute weather news</h3>
            <div className = "app">
                {cities.map((city,index) => (
                    <WeatherCard key={index} cities={city} />
                ))}
            </div>
            
        </>
    )
}

export default App;