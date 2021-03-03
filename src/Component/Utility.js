
// map longitude and lattitude to  areaname

// if (navigator.geolocation) {
//     this.getPosition()
//     .then((position) => {
//       this.getWeather(position.coords.latitude, position.coords.longitude);
//     });
// } else {
//   alert("Geolocation not available");
// }
        // -------------        
// convert timestamp into date
// import React from "react";
// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";

// // CSS Modules, react-datepicker-cssmodules.css
// // import 'react-datepicker/dist/react-datepicker-cssmodules.css';

//   return (
//     // <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
//     <DatePicker
//   selected={date}
//   onChange={handleDateChange}
//   showTimeSelect
//   dateFormat="Pp"
// />
//   );
// };
// export default tsConverter;



// Convert a Unix Timestamp to a Date in Vanilla JavaScript
// Convert the unix timestamp into milliseconds by multiplying it by 1000.
// Use the newly created milliseconds value to create a date object with 
// the new Date() constructor method.
// Use the . toLocaleString() function to convert the date object 
// into human-friendly date strings.
// 25 Oct 2019

// const unixTimestamp = 1575909015

// const milliseconds = 1575909015 * 1000 // 1575909015000

// const dateObject = new Date(milliseconds)

// const humanDateFormat = dateObject.toLocaleString() //2019-12-9 10:30:15

// dateObject.toLocaleString("en-US", {weekday: "long"}) // Monday
// dateObject.toLocaleString("en-US", {month: "long"}) // December
// dateObject.toLocaleString("en-US", {day: "numeric"}) // 9
// dateObject.toLocaleString("en-US", {year: "numeric"}) // 2019
// dateObject.toLocaleString("en-US", {hour: "numeric"}) // 10 AM
// dateObject.toLocaleString("en-US", {minute: "numeric"}) // 30
// dateObject.toLocaleString("en-US", {second: "numeric"}) // 15
// dateObject.toLocaleString("en-US", {timeZoneName: "short"}) // 12/9/2019, 10:30:15 AM CST