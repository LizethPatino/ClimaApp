import React from 'react';
import WeatherLocation from './WeatherLocation';
import './styles.css';


const LocationList = ({cities, onSelectedLocation}) =>{
    const handleWeatherLocationClick = city =>{
        console.log("handleWeatherLocationClick");
        onSelectedLocation(city);
    };
    const strToComponents = cities =>(
        cities.map(city => (
        <WeatherLocation 
             key = {city}
              city={city}
              onWeatherLocationClick = {()=>handleWeatherLocationClick(city)}/>))
    );
    
   return( <div className="locationList">
        {strToComponents(cities)}
   </div> );
};

export default LocationList;
