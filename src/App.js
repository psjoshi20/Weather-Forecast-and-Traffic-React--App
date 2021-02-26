import React, {Component} from 'react';
// import { render } from 'react-dom';
import WeatherTraffic from './Component/WeatherTraffic.js';
import WeatherCard from './Component/Weather.js';
import './App.css';

function App() {
  return (
    <div>
      <WeatherTraffic/>
     <WeatherCard/>
    </div>
  )
}

export default App

