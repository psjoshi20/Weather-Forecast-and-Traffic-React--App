// First component card component
import React from 'react';
import {Card} from 'react-bootstrap';

const WeatherCard = ({dt, low, high, forecast, icon}) => {
  // create a date object with Date class constructor
  const date = new Date(dt);
  return (
    <Card style={{width: '18rem'}}>
      <Card.Img
        variant="top"
        // get the src from example url and pass the icon prop for icon code
        // src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
      />
      <Card.Body>
        <Card.Title>{forecast}</Card.Title>
        {/*  datetime is received in milliseconds, let's turn into local date time */}
        <p>
          {date.toLocaleDateString()} - {date.toLocaleTimeString()}
        </p>
        {/* minimum temperature */}
        <p>Min: {low}</p>
        {/* maximum temperature */}
        <p>Max: {high}</p>
      </Card.Body>
    </Card>
  );
};


export default WeatherCard;

// https://dev.to/hulyakarakaya/create-a-weather-app-with-react-hooks-part-1-4055