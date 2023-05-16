import React from 'react'
import '../styles/Weather.css';
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities, setCity, city}) => {
    return (
        <div className='weather-button-group'>
            <Button onClick={()=>setCity('Current Location')} className='weather-button' variant={`${city == null || city == 'Current Location' ? "primary" : "outline-primary"}`} size="sm" >Current Location</Button>
            <Button onClick={()=>setCity('Hanoi')} className='weather-button' variant={`${city == 'Hanoi' ? "primary" : "outline-primary"}`} size="sm">Hanoi</Button>
            <Button onClick={()=>setCity('Hallstatt')} className='weather-button' variant={`${city == 'Hallstatt' ? "primary" : "outline-primary"}`} size="sm">Hallstatt</Button>
            <Button onClick={()=>setCity('Santorini')} className='weather-button' variant={`${city == 'Santorini' ? "primary" : "outline-primary"}`} size="sm">Santorini</Button>
            <Button onClick={()=>setCity('Hawaii')} className='weather-button' variant={`${city == 'Hawaii' ? "primary" : "outline-primary"}`} size="sm">Hawaii</Button>
            <Button onClick={()=>setCity('Seoul')} className='weather-button' variant={`${city == 'Seoul' ? "primary" : "outline-primary"}`} size="sm">Seoul</Button>
        </div>
    );
};

export default WeatherButton;
