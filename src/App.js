import React, {Component} from 'react';
// import WeatherCard from './Component/Weather.js';

import TownSelector from './Component/TownSelector.js';
// import LocationTraffic from './Component/LocationTraffic.js';
import './App.css';
import {Container} from 'react-bootstrap';
import UseFetch from './hooks/UseFetch'

const  App= () => {
// destructure the returned values
  const {data, error, isLoading, setUrl} = UseFetch();
  return (
    <Container className="App">
    <TownSelector onSearch={(town) => 
      setUrl(`https://api.data.gov.sg/v1/environment/4-day-weather-forecast'`)} />
</Container>


    // <>
    //    <div className="header">
    //       <h1>welcome - header</h1>
    //   </div>
    //   <>
    //    <p> Date and Time</p>
    //   </>
    // <div>
    //    <WeatherCard
    //       dt={1602104400 * 1000}
    //       low="22.67"
    //       high="24.39"
    //       forecast="Clear"
    //       icon="01d"
          //  date = "2021-02-27"
          // forecast ="Fair."
          //   timestamp = "2021-02-26T05:18:00+08:00"
    //    />
    //  <TownSelector/>
    //  <LocationTraffic /> 
    //  <>
    //  <p> Footer</p>
    //  </>
    // </div>
    // </>
  );
};

export default App;

// fetch api (https://data.gov.sg/dataset/traffic-images) traffic 
// https://data.gov.sg/dataset/weather-forecast  weather 
//  24 hour weather and 4 day weather 
//  https://api.data.gov.sg/v1/environment/2-hour-weather-forecast
//  real time datafrom https:data.gov.sg/developer#realtime.
// Get API keys


// Features:
// 1. Allow the user to choose a date and time, then show a list of locations with traffic cam
// photos for the specified date and time. (API 1: Traffic Images)

// 2. Show the list of locations from API 1 (Traffic Images) only has lat/long without name, use a
// reverse geocoding service (API 2: Weather Forecast) to display more user friendly location
// names
// 3. When the user selects a location from the list, show the traffic cam photo, and also the
// weather info for that location from API 2 (Weather Forecast) (or the nearest available
// weather info depending on what API 2 can return)
// As the location information are returned in latitude and longitude format, you are required to look for
// an API that does reverse geo-coding to show its human readable names instead.

// What are you supposed to do?
// ● Create a frontend application based on the requirements and mock-up above
// ● Create proper UI components for the application
// ● Handle the responsiveness of the UI in the application
// ● Create the necessary CSS styling ensure the interface is aesthetically pleasing
// ● Develop an application with good user-experience (UX)
// ● Feel free to change the design of the application if you have a better idea
// ● You will be asked to showcase and explain to us some of your development