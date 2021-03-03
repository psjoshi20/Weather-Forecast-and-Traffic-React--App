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
            <label class="text-light date text-center">{date}</label>
            <div class="card-block">
                <h4>Singapore Weather</h4>
                <span class="text-danger">This is the  Weather card</span>
                <p> Forecast, low, high ,date </p>
                 <p>{date.toLocaleDateString()}</p>

                <button type="button" class="btn btn-warning text-light">Click For More</button>
                 <p> Low: {low}</p>
                 <p> High : {high}</p>
                 <p> Forecast: {forecast}</p>
            </div>
         </div>
      </div>
    </div>
  </div>
  )
}


export default WeatherCard;
