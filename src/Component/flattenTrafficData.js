import React from "react";

// #fetch traffic API , store the json data into an object, get the path using get_in() function, flatten the data and then pass it to 
// a component which will disply in UI in the timestap, loation format 
// before passing to UI component conver the long and lat into area name using reverse geocoding service

function get_in2(data1, path1) {
    var ii; var retv1 = data1; var x1;
    for(ii in path1) {
       x1 = path1[ii];
       retv1 = retv1[x1];
    }
    return(retv1);
 }

// var rr1 = [...Array(get_in2(cdata,["items", 0, "cameras"]).length).keys()];

// # Join the  arrays you want, and store the return value in another variable

// eg.
function flattenTrafficData (cdata) {
    var img =["camera_id","timestamp", "image"]; 
    var img2 =[["camera_id"],["timestamp"], ["image"], ["location", "latitude"] , ["location", "longitude"]]; 
    // console.log(img);
    var rr1 = [...Array(get_in2(cdata,["items", 0, "cameras"]).length).keys()];
    // map over it and assign a varible to it
    var images = rr1.map((i1) => { 
                                    return(img2.map((i2) => {
                                    return(
                                            get_in2(cdata,
                                            // ["items", 0 , "cameras", i1,i2]))
                                            ["items", 0 , "cameras", i1, ...i2]))
                                    }))
                                }
    );
    console.log(images);
    
    return(images);
}
function tarfficDataHash(cdata) {
    var images =  flattenTrafficData(cdata);
    var retHash1 = images.reduce(
        (ac1,v1) => { if( ! ac1[v1[1]]) {ac1[v1[1]] = []; }; ac1[v1[1]].push(v1[2] + "---latitude=" + v1[3] + "---longitude=" + v1[4] +"---camid=" + v1[0] + "---"); return(ac1);  },
        {}
    ); 
    return(retHash1);
}


export default  tarfficDataHash ;


// (function(){'use strict';var c=window,d=[];c.aft_counter=d;var e=[],f=0;function _recordIsAboveFold(a){if(!c._isLazyImage(a)&&!a.hasAttribute("data-noaft")&&a.src){var b=(c._isVisible||function(){})(c.document,a);a.setAttribute("data-atf",b);b&&(-1===e.indexOf(a)&&-1===d.indexOf(a)&&d.push(a),a.hasAttribute("data-iml")&&(a=Number(a.getAttribute("data-iml")),a>f&&(f=a)))}}
// c.initAft=function(){f=0;e=Array.prototype.slice.call(document.getElementsByTagName("img")).filter(function(a){return!!a.getAttribute("data-iml")});[].forEach.call(document.getElementsByTagName("img"),function(a){try{_recordIsAboveFold(a)}catch(b){throw b.message=a.hasAttribute("data-iid")?b.message+"\nrecordIsAboveFold error for defer inlined image":b.message+("\nrecordIsAboveFold error for img element with <src: "+a.src+">"),b;}});if(0===d.length)c.onaft(f)};}).call(this);
// initAft()