import React, { useState } from 'react';

const locationData = [
  {
        "name": "Ang Mo Kio",
        "label_location": {
          "latitude": 1.375,
          "longitude": 103.839
        }
      },
        "name": "Bedok",
        "label_location": {
          "latitude": 1.321,
          "longitude": 103.924
        }
      }
];

function TownSelector() => {


  return (
    <div>
    </div>
  )
 
}


export default TownSelector;

      
// const [query, setQuery] = useState("");
//     const [error, setError] = useState("");
//     const [weather, setWeather] = useState({});
                  
//     <input
//     type="text"
//     className="search-bar"
//     placeholder="Search any city"
//     onChange={(e) => setQuery(e.target.value)}
//     value={query}
//   />
//   <div className="img-box">
//     {" "}
//     <img
//       src="https://images.avishkaar.cc/workflow/newhp/search-white.png"
//       onClick={search}
//     />
                            
//                             const search = (city) => {
//       alert(city);
//       axios
//         .get(
//           `${apiKeys.base}weather?q=${
//             city != "[object Object]" ? city : query
//           }&units=metric&APPID=${apiKeys.key}`
//         )
//         .then((response) => {
//           setWeather(response.data);
//           setQuery("");
//         })
//         .catch(function (error) {
//           console.log(error);
//           setWeather("");
//           setQuery("");
//           setError({ message: "Not Found", query: query });
//         });
//     };
                  
