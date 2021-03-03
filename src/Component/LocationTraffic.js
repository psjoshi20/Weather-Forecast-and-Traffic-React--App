import React , { useState } from 'react';

import {Row,Col, Form , FormControl, Button  } from 'react-bootstrap';
//  city / are selector 
// import SelectBox from './Component/City.js';

// const data = [
//   {
//           "name": "Ang Mo Kio",
//           "label_location": {
//             "latitude": 1.375,
//             "longitude": 103.839
//           }
//         },
//         {
//           "name": "Bedok",
//           "label_location": {
//             "latitude": 1.321,
//             "longitude": 103.924
//           }
//         }
// ]



const onSearch = () => {
 fetch('https://api.data.gov.sg/v1/environment/2-hour-weather-forecast ')
    .then((response) => response.json())
    .then((result) => console.log(result));
};
const  LocationTraffic = ()=> {
  const[state, setState] = useState();
  const[name, setName] = useState('Bedok');

  const handleClick  =()=> {
    setName("Tuas");
  }
    return (
      <>
            <div>
            <h2>{name}</h2>
            <Button onClick={handleClick} >Change Name</Button>
            </div>
         <div>
         {/* <FormControl placeholder ="area/city"
            onChange={(event) => setName(event.target.value)}
            // value will be the currently selected city
            value={name} /> */}

      {/* event handler for button click */}
      {/* <Button onClick={onSearch} >Check Weather</Button> */}
         </div>
            
</>
    );

  };
export default LocationTraffic;





