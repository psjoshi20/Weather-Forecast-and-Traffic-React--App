import React, { useState , useEffect }  from 'react';
import './App.css';
import flattenData from './Component/JoinArray';

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
  const [data, setData] = useState([]);
  const [name, setName] =useState(null);
  const [timestamp, setTimestamp]=useState();
  const [timestampImage, setTimeStampImage] =useState([])  
  // timestampImage --> this state is to store flatten data with  timestamp, cameraId , image 
  console.log("step1");

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
      console.log(response);
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson)
      flatHelper(myJson);
      setData(myJson)
    });

  }
 
console.log("step3");
useEffect(() => {
  getData()
 },[])
 return (
  <div className="App">
      
      <h1>  here is json in table format  </h1>
    <table border="1">
  
   {
      // data && data.length>0 && data.map((areametadata)=><p>{areametadata.name.label_location.longitude}</p>)
      data && 
          data["items"] && data["items"].length > 0 && 
          data["items"][0]["forecasts"] && data["items"][0]["forecasts"].length > 0 && 
          data["items"][0]["forecasts"].map((forecast)=><tr><td>{forecast["area"]}</td><td>{forecast["forecast"]}</td></tr>)
   }
  
  </table>
 </div>
  );
}

export default App;

