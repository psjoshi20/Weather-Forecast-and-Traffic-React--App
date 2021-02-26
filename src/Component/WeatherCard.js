import React from 'react';
import {Card} from 'react-bootstrap';

const WeatherCard = ({dt, low, high, forecast, icon}) => {
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
      
        <p>
          {date.toLocaleDateString()} - {date.toLocaleTimeString()}
        </p>
   
        <p>Min: {low}</p>

        <p>Max: {high}</p>
      </Card.Body>
    </Card>
  );
};


export default WeatherCard;

// https://dev.to/hulyakarakaya/create-a-weather-app-with-react-hooks-part-1-4055