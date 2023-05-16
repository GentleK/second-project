import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Weather.css';
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import WeatherBox from './components/WeatherBox';
import WeatherButton from './components/WeatherButton';
import ClipLoader from "react-spinners/ClipLoader";

const Weather = () => {
    const navigatePage = useNavigate();
    const goToHomepage = ()=>{
        navigatePage('/');
    }

    const openWeatherMapApiKey = '045892373f4124ae850f5e8030b16f0c';
    const [ weatherData, setWeatherData ] = useState(null);
    const cities = ['Current Location', 'Hanoi', 'Hallstatt', 'Santorini', 'Hawaii', 'Seoul'];
    const [ city, setCity ] = useState(null);
    const [ loading, setLoading ] = useState(false);

    const getWeatherByCurrentLocation = ()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            let currentPosition = {
                lat : position.coords.latitude,
                lon : position.coords.longitude
            }
            getWeatherByLocation(currentPosition);
        });
    }    

    const getWeatherByLocation = async (targetPosition)=>{
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${targetPosition.lat}&lon=${targetPosition.lon}&appid=${openWeatherMapApiKey}&units=imperial&lang=kr`;
        setLoading(true);
        let response = await fetch(url);
        setWeatherData(await response.json());
        setLoading(false);
    }

    const getWeatherByCity = async ()=>{
        if( "Current Location" == city ){
            getWeatherByCurrentLocation();
        }else{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeatherMapApiKey}&units=imperial&lang=kr`;
            setLoading(true);
            let response = await fetch(url);
            setWeatherData(await response.json());
            setLoading(false);
        }
    }


    useEffect(()=>{
        if( city != null ){
            getWeatherByCity();
        }else{
            getWeatherByCurrentLocation();
        }
    }, [city])

    return (
        <div>
            <div className='titleBoxDiv'>
                <h1>날씨앱</h1>
                <button onClick={goToHomepage} className='homeButton'>Go Home</button>
            </div>
            {loading ? (
                <div className='weatherContainer'>
                    <ClipLoader color="#ff88c6" loading={loading} size={150} aria-label="Loading Spinner" data-testid="loader" />
                </div>
            ):(
                <div className='weatherContainer'>
                    <WeatherBox weatherData={weatherData} />
                    <WeatherButton cities={cities} setCity={setCity} city={city}/>
                </div>
            )}
        </div>
    )
}

export default Weather
