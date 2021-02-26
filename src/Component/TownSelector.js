import React, { useState } from 'react';
import {Row,Col,FormControl,Button} from 'react-bootstrap';

const TownSelector =()=> {
const[town, setTown] = useState('');
const [results, setResults] = useState('');

const onSearch =() => {
  fetch (
   
    'https://api.data.gov.sg/v1/environment/4-day-weather-forecast'
  )
    .then((response) => response.json())
   
    .then((results) => setResults(results));
};

const onKeyDown = (event) => {
  if (event.keyCode === 13) {
    onSearch();
  }
};

return(
    <div className="app-container">
      
      <div className="weather-traffic-wrapper"></div>
    
      <Row>
         <div className="col"> 
              <h1>Enter your Location </h1>
         </div>
       </Row>
       <Row>
  
        <Col xs={4} className="text-center">
          <FormControl
            placeholder="Enter Location"

            onChange={(event) => setTown(event.target.value)}

            value={town}
             onKeyDown={onKeyDown}
          />
        </Col>
      </Row>
      <Row>
        <Col>
                <Button onClick={() => onSearch(town)}> Check Weather </Button>
        </Col>
      </Row>


      </div>
)

};
export default TownSelector;

      

      

