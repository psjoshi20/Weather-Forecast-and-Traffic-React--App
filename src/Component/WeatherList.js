import React from 'react'
import { Col, Row } from 'react-bootstrap'


function WeatherList() {
  return (
    <div>
      
       <p>get weather list for given date, given traffic cam location</p>
    </div>
  )
}

export default WeatherList

// getWeather = async (lat, lon) => {
//   const api_call = await fetch(
//     `${apiKeys.base}weather?lat=${lat}&lon=${lon}&units=metric&APPID=${apiKeys.key}`
//   );
//   const data = await api_call.json();
//   this.setState({
//     lat: lat,
//     lon: lon,
//     city: data.name,
//     temperatureC: Math.round(data.main.temp),
//     temperatureF: Math.round(data.main.temp * 1.8 + 32),
//     humidity: data.main.humidity,
//     main: data.weather[0].main,
//     country: data.sys.country,
//   });
// };
