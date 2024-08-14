import React from 'react';

function WeatherDisplay({ data }) {
    if (!data) {
        return <div>Loading weather data...</div>;
    }

    const { name: city_name, sys, main, weather, wind } = data;

    return (
        <div className="weather-display">
            <h2>
                {city_name}, {sys.country}
            </h2>
            <div className="temperature">
                <img
                    src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                    alt={weather[0].description}
                />
                <span>{main.temp} K</span>
            </div>
            <p>Feels like: {main.feels_like} K</p>
            <p>Min Temp: {main.temp_min} K</p>
            <p>Max Temp: {main.temp_max} K</p>
            <p>{weather[0].description}</p>

            <div className="details">
                <p>Humidity: {main.humidity}%</p>
                <p>Wind Speed: {wind.speed} m/s</p>
            </div>
        </div>
    );
}

export default WeatherDisplay;