
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
function flattenTrafficData (cdata) {
    // var img =["camera_id","timestamp", "image"]; 
    var img2 =[["camera_id"],["timestamp"], ["image"], ["location", "latitude"] , ["location", "longitude"]]; 
    var rr1 = [...Array(get_in2(cdata,["items", 0, "cameras"]).length).keys()];
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

// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
function tarfficDataHash(cdata) {
    var images =  flattenTrafficData(cdata);
    var retHash1 = images.reduce(
        (ac1,v1) => { if( ! ac1[v1[1]]) {ac1[v1[1]] = []; }; ac1[v1[1]].push(v1[2] + "---latitude=" + v1[3] + "---longitude=" + v1[4] +"---camid=" + v1[0] + "--timestamp=" + v1[5] +v1[6]); return(ac1);  },
        {}
    ); 
    return(retHash1);
}

export default  tarfficDataHash ;
