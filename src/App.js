import React, { useState } from 'react';
import axios from 'axios';
import WeatherSearch from './components/WeatherSearch';
import WeatherDisplay from './components/WeatherDisplay';
import './App.css';

function App() {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    const fetchWeather = async (searchLocation) => {
        const options = {
            method: 'GET',
            url: `https://open-weather13.p.rapidapi.com/city/${searchLocation}/en`,
            headers: {
                'x-rapidapi-key': process.env.REACT_APP_API_KEY,
                'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            setWeatherData(response.data);
            setError(null); // Clear any previous errors
        } catch (err) {
            if (err.response && err.response.status === 404) {
                setError(`Invalid city name: ${searchLocation}. Please try again.`);
            } else {
                setError('City not found or API error. Please try again.');
            }
            setWeatherData(null);
            console.error(err);
        }
    };

    return (
        <div className="app-container">
            <h1>WeatherWise</h1>
            <WeatherSearch onSearch={fetchWeather} />
            {error && <div className="error-message">{error}</div>}
            {weatherData && <WeatherDisplay data={weatherData} />}
        </div>

    );
}

export default App;