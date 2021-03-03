import React, { useState , useEffect }  from 'react';
import './App.css';
function flattenData(data) {
  if(data && 
    data["items"] && data["items"].length > 0 && 
    data["items"][0]["forecasts"] && data["items"][0]["forecasts"].length > 0 ) {
      const a1 = data["items"][0]["forecasts"];
      const b1 = data["area_metadata"];
      // const t1 = a1.map((a1d) => { return([a1d, b1.filter((f1) => { return(f1.name === a1d.area);})[0]["label_location"] ] ) ; });
      const t1 = a1.map((a1d) => { return({...a1d, ...b1.filter((f1) => { return(f1.name === a1d.area);})[0]["label_location"] } ) ; });
      console.log("Joined data");console.log(t1);
      return(t1);
    } else {
      return([]);
    }
}

function  App() {
  const [data, setData] = useState([]);
  const [name, setName] =useState(null);
  const [timestamp, setTimestamp]=useState();
  // console.log("step1");

  const getData =() => {
        fetch('data1.json',
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
      flattenData(myJson);
      setData(myJson)
    });

  }
 
console.log("step3");
useEffect(() => {
  getData()
 },[])
 return (
  <div className="App">
    <h1>  here is json </h1>
    <table border="1">
  
   {
      // data && data.length>0 && data.map((areametadata)=><p>{areametadata.name.label_location.longitude}</p>)
      data && 
          data["items"] && data["items"].length > 0 && 
          data["items"][0]["forecasts"] && data["items"][0]["forecasts"].length > 0 && 
          data["items"][0]["forecasts"].map((forecast)=><tr><td>{forecast["area"]}</td><td>{forecast["forecast"]}</td></tr>)
   }
    {/* {
      data && data.length>0 && data.map((items))=><p>{items.forecasts.forecast}</p>)
    }  */}

{/* {
       data && data.length>0 && data.map((item)=><p>{item.about}</p>)
     } */}
  
  </table>
 </div>
  );
}

export default App;

