import React from "react";

function flattenTrafficData(data3) {


    return (
        <div>
            <h1>traffic images</h1>
            
        </div>
    )
}

export default flattenTrafficData


// #fetch traffic API , store the json data into an object, get the path using get_in() function, flatten the data and then pass it to 
// a component which will disply in UI in the timestap, loation format 
// before passing to UI component conver the long and lat into area name using reverse geocoding service

// function get_in2(data1, path1) {
//     var ii; var retv1 = data1; var x1;
//     for(ii in path1) {
//        x1 = path1[ii];
//        retv1 = retv1[x1];
//     }
//     return(retv1);
//  }

// var rr1 = [...Array(get_in2(cdata,["items", 0, "cameras"]).length).keys()];

// # Join the  arrays you want, and store the return value in another variable

// eg.

// var img =["camera_id","timestamp", "image"]; console.log(img);
// # map over it and assign a varible to it
// var images = rr1.map((i1) => { 
//                                 return(img.map((i2) => {
// 								  return(
//                                         get_in2(cdata,
//                                         ["items", 0 , "cameras", i1,i2]))
// 								}))
//  							}
// );
// console.log(images);
