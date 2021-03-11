import React, { useState , useEffect }  from 'react';
import './App.css';
import tarfficDataHash from "./Component/flattenTrafficData";
import Address from "./Component/Address.js";
// import flattenData from './Component/JoinArray';
//  this temp App fotr getting traffic images from api 1 

// #fetch traffic API , store the json data into an object, get the path using get_in() function, flatten the data and then pass it to 
// a component which will disply in UI in the timestap, loation format 
// before passing to UI component conver the long and lat into area name using reverse geocoding service


function  App() {
  const [data3, setData3] = useState([]);
  
  console.log("step1");

  const getData3 =() => {
        fetch('data3.json',
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
      // flatHelper(myJson);
      setData3(tarfficDataHash(myJson))
    });

  }
 
// console.log("step3");
useEffect(() => {
  getData3()
 
 },[])

  // convert location in to formated address

 return (
  <div className="App">
      
      <h1>  json object- table  </h1>
    <table border="1">
  
   {
      // data && data.length>0 && data.map((areametadata)=><p>{areametadata.name.label_location.longitude}</p>)
    //   data3 && 
    //       data3["items"] && data3["items"].length > 0 && 
    //       data3["items"][0]["cameras"] && data3["items"][0]["cameras"].length > 0 && 
    //       data3["items"][0]["cameras"].map((vc1)=><tr><td>{vc1[0]}</td><td>{vc1[2]}</td></tr>)
          data3 && 
          Object.keys(data3).length > 0 && 
          Object.keys(data3).map(
            (vc1) => 
                <tr>
                      <td>{vc1}</td>
                      <td>{data3[vc1]}</td>
                </tr>
          )         
   }
  
  </table>
  <Address />
 </div>
  );
}

export default App;

