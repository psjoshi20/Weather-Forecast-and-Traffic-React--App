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
  const [data, setData] = useState([]);
  const [flatData, setFlatData] = useState([]);
  const [name, setName] =useState(null);
  const [timestamp, setTimestamp]=useState();
  const [selectedDate , setSelectedDate] = useState(null);
  let handleColor = time => {
    return time.getHours() > 12 ? "text-success" : "text-error";

  };
  // console.log("step1");

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
      setFlatData(flatHelper(myJson));
      // flatData
    });

  }
  
 
// console.log("step3")
useEffect(() => {
  getData()
 },[])
 return (
  <div className="App">
      <p>Press click to Select date and Time  </p>
      <DatePicker 
      showTimeSelect
      onChange={date => setSelectedDate(date)} 
      dateFormat ='dd/MM/yyyy'
      isClearable
      showYearDropdown
      scrollableMonthYearDropdown
      timeClassName={handleColor}
  
         />     
      <h1>  here is json in table format  </h1>
      <div >
        {
              // data && data.length>0 && data.map((areametadata)=><p>{areametadata.name.label_location.longitude}</p>)
              // data && 
              //     data["items"] && data["items"].length > 0 && 
              //     data["items"][0]["forecasts"] && data["items"][0]["forecasts"].length > 0 && 
              //     data["items"][0]["forecasts"].map((forecast)=><tr><td>{forecast["area"]}</td><td>{forecast["forecast"]}</td></tr>)
            flatData && flatData.length > 0 && 
            flatData.map((fd1) => { return(<WeatherTable warr1={fd1}></WeatherTable>) } )
        }
        <h2>End of table sect</h2>
      </div>
 </div>
  );
}

export default App;

