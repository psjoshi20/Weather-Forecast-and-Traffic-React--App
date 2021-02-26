// second component Our goal is to update the state when a user clicks on a button
// usestate - 
import React, { useState } from 'react';

const TownSelector =()=> {
const[town, setTown] = useState('');
return(
    <div className="app-container">
      
      <div className="weather-traffic-wrapper"></div>
    
      <div className="row">
         <div class="col"> 
              <h1>Enter your Location </h1>
         </div>
       </div>
      <div className="row md-3">
          <input 
          type="text"
          name="town"
          className="form-control"
          placeholder="town"
          autoComplete="off" />
      </div>
     
      </div>
)

};
export default TownSelector;

      

      

// We will add Row, Col, FormControl, and Button components from Bootstrap to create our JSX elements. FormControl is for our input element and we need to take its value by passing event.target.value
// We will pass for the Button component one function for now, we will use it soon to display our data.