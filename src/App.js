import React, {Component} from 'react';
import TownSelector from './Component/TownSelector.js';
import './App.css';
import {Container} from 'react-bootstrap';
import UseFetch from './hooks/UseFetch';
import WeatherCard from './Component/WeatherCard.js';
// import LocationTraffic from './Component/LocationTraffic.js';
import WeatherList from "./Component/WeatherList";

const  App= () => {
// destructure the returned values
  const {data, error, isLoading, setUrl} = UseFetch();
  console.log(data);
  const getContent = () => {
    if(error) return <h2>Error when fetching: {error}</h2>
    if(!data && isLoading) return <h2>LOADING...</h2>
    if(!data) return null;
    return <WeatherList weathers={data.list} />
  };

  return (
    <Container className="App">
      <TownSelector onSearch={(town) => 
        setUrl(`https://api.data.gov.sg/v1/environment/4-day-weather-forecast'`)} />

            {data && <WeatherList weathers={data.list} />}
    </Container>

    /
  );
};

export default App;



