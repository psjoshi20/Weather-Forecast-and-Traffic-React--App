import React, { useState } from 'react';
import {Row,Col, Form , FormControl, Button  } from 'react-bootstrap';
// import BootstrapDate from './Component/Date.js';

const LocationTraffic =()=> {
const[loc, setLoc] = useState('');
const [results, setResults] = useState('');

// const onSearch =() => {
//   fetch (
   
//     'https://api.data.gov.sg/v1/transport/traffic-images'
//   )
//     .then((response) => response.json())
  
//     .then((result) => console.log(result));
//     // .then((results) => setResults(results));
// };
const getTrafficData = async (query) => {
  const res = await fetch(`'https://api.data.gov.sg/v1/transport/traffic-images'`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
  
    },
  });
  const data = await res.json();
  return data;
};




// const fetchTrafficImages = async () => {
//   const res = await fetch(`https://api.data.gov.sg/v1/transport/traffic-images`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
     
//     },
//   });
//   const data = res.json();
//   return data;
// };

// const onKeyDown = (event) => {
//   if (event.keyCode === 13) {
//     onSearch();
//   }
// };

return(
    <div className="app-container">
      
      <div className="weather-traffic-wrapper"></div>
    
      <Row>
         <div className="col"> 
              {/* <h1>Choose your Date </h1> */}
              {/* <BootstrapDate /> */}
              <div>
                <div className="row">
                    <div className="col-md-4">
                        <Form.Group controlId="dob">
                            <Form.Label>Select Date</Form.Label>
                            <Form.Control type="date" name="date" placeholder="Date " />
                        </Form.Group>
                    </div>
                </div>
            </div>

         </div>
       </Row>
       <Row>
  
         {/* <Col xs={4} className="text-center">
          <FormControl
            placeholder="Enter Location"

            onChange={(event) => setLoc(event.target.value)}

            value={loc} 
             onKeyDown={onKeyDown}
          />
        </Col> */}
      </Row>
      <Row>
        <Col>
                {/* <Button onClick={() => fetchTrafficImages(loc)}> Get Traffic Image</Button> */}
                <Button onClick={() => getTrafficData(loc)}> Get Traffic Image</Button>
        </Col>
      </Row>


      </div>
)

};
export default LocationTraffic;