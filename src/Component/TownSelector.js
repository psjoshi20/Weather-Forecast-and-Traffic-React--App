// second component Our goal is to update the state when a user clicks on a button
// usestate - 
import React, { useState } from 'react';
import {Row,Col,FormControl,Button} from 'react-bootstrap';

const TownSelector =()=> {
const[town, setTown] = useState('');
const [results, setResults] = useState('');

const onSearch =() => {
  fetch (
    // fetch API ''
    // dont use this -> this does not contain temp ' https://api.data.gov.sg/v1/environment/2-hour-weather-forecast'
    'https://api.data.gov.sg/v1/environment/4-day-weather-forecast'
  )
  .then((response) => response.json())
   .then(data => console.log(data));
// update the results
  //  .then((results) => setResults(results));
};

return(
    <div className="app-container">
      
      <div className="weather-traffic-wrapper"></div>
    
      <Row>
         <div class="col"> 
              <h1>Enter your Location </h1>
         </div>
       </Row>
       <Row>
        {/* xs={4} takes the one third  of the page*/}
        <Col xs={4} className="text-center">
          <FormControl
            placeholder="Enter Location"
            // update town value with the user's input
            onChange={(event) => setTown(event.target.value)}
            // value will be the currently selected location or town
            value={town}
          />
        </Col>
      </Row>
      <Row>
        <Col>
                <Button onClick={onSearch}> Check Weather </Button>
        </Col>
      </Row>


      {/* <div className="row md-3">
          <input 
          type="text"
          name="town"
          className="form-control"
          placeholder="town"
          autoComplete="off" />
      </div> 
      */}
      </div>
)

};
export default TownSelector;

      

      

// We will add Row, Col, FormControl, and Button components from Bootstrap to create our JSX elements. FormControl is for our input element and we need to take its value by passing event.target.value
// We will pass for the Button component one function for now, we will use it soon to display our data.