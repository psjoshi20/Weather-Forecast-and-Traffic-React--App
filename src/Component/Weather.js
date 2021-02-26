// First component card component
import React from 'react';
import {Card} from 'react-bootstrap';

const WeatherCard = (props) => {
  return (
    <Card style={{width: '18rem'}}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;