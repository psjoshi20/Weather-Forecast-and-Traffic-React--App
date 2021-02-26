import React, { useState } from 'react';
import {Row,Col,FormControl,Button} from 'react-bootstrap';

const LocationTraffic =()=> {
const[loc, setLoc] = useState('');
const [results, setResults] = useState('');

const onSearch =() => {
  fetch (
   
    'https://api.data.gov.sg/v1/transport/traffic-images'
  )
    .then((response) => response.json())
  
    .then((result) => console.log(result));
    // .then((results) => setResults(results));
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

            onChange={(event) => setLoc(event.target.value)}

            value={loc}
             onKeyDown={onKeyDown}
          />
        </Col>
      </Row>
      <Row>
        <Col>
                <Button onClick={() => onSearch(loc)}> Get Traffic Image</Button>
        </Col>
      </Row>


      </div>
)

};
export default LocationTraffic;