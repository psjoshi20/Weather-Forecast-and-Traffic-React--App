import React, { useState , useEffect }  from 'react';
import './App.css';
import flattenData from './Component/JoinArray';
import {  WeatherTable } from './Component/WeatherDisp';

function flatHelper (data) {
  if(data && 
       data["items"] && data["items"].length > 0 && 
       data["items"][0]["forecasts"] && data["items"][0]["forecasts"].length > 0 ) { 
        // const aa1 = flattenData(data["items"][0]["forecasts"], data["area_metadata"], "name","area");
        const aa1 = data["items"].map((xx1) => { return(flattenData(xx1["forecasts"], data["area_metadata"]));});
        console.log("Joined data");console.log(aa1);
        console.log(aa1.length); console.log(aa1[0].length);
        return(aa1);
       }
}




function  App() {
   const [flatData, setFlatData] = useState([]);

   const getData =() => {
        fetch('data2.json',
        {
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
         }
   )            
    .then(function(response) {
      // console.log(response);
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson)
      setFlatData(flatHelper(myJson));
     });

  }
   
// console.log("step3")
useEffect(() => {
  getData()
 },[])


 return (
   
  <div className="App">
      <h1>  here is json in table format  </h1>
      <div >
        {
              
            flatData && flatData.length > 0 && 
            flatData.map((fd1) => { return(<WeatherTable warr1={fd1}></WeatherTable>) } )
        }
        <h2>End of table sect</h2>
      </div>
 </div>
  );
}

export default App;

