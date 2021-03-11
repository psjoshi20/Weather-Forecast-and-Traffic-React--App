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