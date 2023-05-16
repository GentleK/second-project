import React from 'react'
import '../styles/Weather.css';

const WeatherBox = ({weatherData}) => {
    let fahrenheit = weatherData && weatherData.main.temp;
    let celsius = (fahrenheit-32)*5/9;

    return (
        <div className='weather-box'>
            <h2>{weatherData?.name}</h2>
            <h3>{Math.floor(celsius)}℃ / {Math.floor(fahrenheit)}℉</h3>
            <h3>{weatherData?.weather[0].description}</h3>
        </div>
    )
}

export default WeatherBox
