import React from 'react';
import {Card} from 'react-bootstrap';

const WeatherCard = ({dt, low, high, forecast, icon}) => {
  const date = new Date(dt);
  return (
    <Card style={{width: '18rem'}}>
      <Card.Img
        variant="top"
       
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
