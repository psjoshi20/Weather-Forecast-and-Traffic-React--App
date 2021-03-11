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

  // function flattenData2 (cdata, bpath, img2) {
  //       // var img2 =[["camera_id"],["timestamp"], ["image"], ["location", "latitude"] , ["location", "longitude"]]; 
  //       // bpath = ["items", 0 , "cameras"]
  //       var rr1 = [...Array(get_in2(cdata,bpath).length).keys()];
  //       // map over it and assign a varible to it
  //       var images = rr1.map((i1) => { 
  //                                       return(img2.map((i2) => {
  //                                            return(get_in2(cdata, [...bpath, i1, ...i2]))
  //                                       }))
  //                                   }
  //       );
  //       console.log(images);
        
  //       return(images);
  //   }
    
    