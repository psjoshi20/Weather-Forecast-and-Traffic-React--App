function flattenData2 (cdata, bpath, img2) {
    // var img2 =[["camera_id"],["timestamp"], ["image"], ["location", "latitude"] , ["location", "longitude"]]; 
    // bpath = ["items", 0 , "cameras"]
    var rr1 = [...Array(get_in2(cdata,bpath).length).keys()];
    // map over it and assign a varible to it
    var images = rr1.map((i1) => { 
                                    return(img2.map((i2) => {
                                         return(get_in2(cdata, [...bpath, i1, ...i2]))
                                    }))
                                }
    );
    console.log(images);
    
    return(images);
}


