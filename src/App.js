import React, { useState}  from 'react';
import TownSelector from './Component/TownSelector.js';
import SelectBox from './Component/City.js';
// import WeatherCard from './WeatherCard';
import './App.css';
import {Container} from 'react-bootstrap';
// import UseFetch from './hooks/UseFetch';
import LocationTraffic from './Component/LocationTraffic';
import WeatherCard from './Component/WeatherCard.js';
// import WeatherList from "./Component/WeatherList";
import BootstrapDate from "./Component/Date.js"

function  App() {
const[ weather, setWeather ] =useState([]);
  

  return (
    <Container className="App">
      <BootstrapDate />
      <SelectBox />
       {/* <TownSelector/> */}
     <LocationTraffic/>
     
    </Container>

    
  );
};



export default App;



