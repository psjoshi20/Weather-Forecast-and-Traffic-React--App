import React from 'react';

function WeatherRow (props) {
     return(
     <tr>
         <td>{props.name}</td>
        <td>{props.forecast}</td>
        <td>{props.latitude}</td>
        <td>{props.longitude}</td>
    </tr>);
   }
  
function WeatherTable(props) {
    console.log("WeatherTable");console.log(props);
    return(
        <div>
            <h3>able</h3>T
            <table border="1" xyz="10">
                { props.warr1 && props.warr1.length > 0 && 
                    props.warr1.map((fdd1) => {
                        return(<WeatherRow name={fdd1.name} 
                                    forecast={fdd1.forecast} 
                                    latitude={fdd1.label_location.latitude} 
                                    longitude={fdd1.label_location.longitude}
                        >
                        </WeatherRow>)
                    }
            )}
            </table>
        <br/>
        </div>);
  }

  export { WeatherRow, WeatherTable }
