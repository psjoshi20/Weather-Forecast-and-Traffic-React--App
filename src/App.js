import React, { Component}  from 'react';
import TownSelector from './Component/TownSelector.js';
import './App.css';
import {Container} from 'react-bootstrap';
// import UseFetch from './hooks/UseFetch';

import WeatherCard from './Component/WeatherCard.js';
import WeatherList from "./Component/WeatherList";

const  App= () => {
  
  return (
    <Container className="App">
      <TownSelector 
      // onSearch={(town) => 
      // setUrl(`https://api.data.gov.sg/v1/environment/4-day-weather-forecast'`)} 
       />

     
    </Container>

    
  );
};



export default App;



