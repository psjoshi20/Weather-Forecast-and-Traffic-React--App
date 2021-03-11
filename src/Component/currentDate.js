import React from 'react';

function currentDate() {
   
 const currentTime = (
    <div>
       <h1>Welcome !</h1>
       <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
 )
 }
 setInterval(getCurrentTime, 1000);
 export default currentDate;