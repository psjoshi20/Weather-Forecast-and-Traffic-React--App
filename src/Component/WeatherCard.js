import React from 'react';
import {Card} from 'react-bootstrap';

const WeatherCard = ({dt, low, high, forecast, icon}) => {
  const date = new Date(dt);
  return (
    <div class="container">
    <div class="row">
      <div class="offset-lg-4 col-lg-4 col-sm-5 col-12">
        <div class="card">
           
            <label class="text-light">Photo</label>
            <label class="text-light date text-center">07 MAR</label>
            <div class="card-block">
                <h4>Singapore Weather</h4>
                <span class="text-danger">This is the  Weather card</span>
                <p> Forecast, low, high ,date </p>
                <button type="button" class="btn btn-warning text-light">Click For More</button>
            </div>
         </div>
      </div>
    </div>
  </div>
  )
}


export default WeatherCard;
