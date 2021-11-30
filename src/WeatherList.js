   
import React, {useState, useEffect} from 'react';
import './App.css';
import {getWeatherData} from './data/weatherapi';

function WeatherList() {
  const [weatherdata, setWeatherData] = useState(null);
  const city = "Toronto"

  const getData = async () => {
    try{
        const data = await getWeatherData(city);
        setWeatherData(data);
        console.log(setWeatherData)

    }catch(error) {
      console.log(error.message);
    }
  }



  useEffect(() => {
    getData();
  }, []);
  
  return (
    <div className="App">
      <div className="card">
        {(
          <>
          {weatherdata !== null ? (
          <div className="main-container">
            <h1>Toronto Live Weather Condition</h1>
            <div className="location">
              <h2><i className="fa fa-street-view"></i>{weatherdata.name} | {weatherdata.sys.country}</h2>
            </div>
            <div className="weather-icon">
              <img src={`http://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`} alt="imgicon"/>
            </div>
            <h3 style={{fontSize:25}}>{weatherdata.weather[0].main}</h3>
            <div className="temprature">
              <h1>{parseFloat(weatherdata.main.temp - 273.15).toFixed(1)}&deg;C</h1>
            </div>
            
            <div className="temprature-range">
              <h4>
                Min: {parseFloat(weatherdata.main.temp_min - 273.15).toFixed(1)}&deg;C 
              | Max: {parseFloat(weatherdata.main.temp_max - 273.15).toFixed(1)}&deg;C 
              | Humidity: {weatherdata.main.humidity}%
              | Wind Speed : {weatherdata.wind.speed}%
              
              </h4>
            </div>
        </div>
        ) : null}
          </>
        ) }       
      </div>
    </div>
  );
}

export default WeatherList;

