import React, { useState}  from 'react';
import TownSelector from './Component/TownSelector.js';
import SelectBox from './Component/City.js';
import './App.css';
import {Container} from 'react-bootstrap';
import LocationTraffic from './Component/LocationTraffic';
import WeatherCard from './Component/WeatherCard.js';
import WeatherList from "./Component/WeatherList";
import BootstrapDate from "./Component/Date.js";
import Footer from "./Component/Footer.js";
import Header from "./Component/Header.js";

function  App() {
const[ weather, setWeather ] =useState([]);
  

  return (
    <Container className="App">
        <Header />
      <BootstrapDate />
      <SelectBox />
      <WeatherList />
       {/* <TownSelector/> */}
     <LocationTraffic/>
     <WeatherCard />
     <Footer />
  
    </Container>

    
  );
};



export default App;



