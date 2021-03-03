

function flattenData(data1, data2, key1, key2) {
    if( true ) {
        const a1 = data1;
        const b1 = data2;
        // const t1 = a1.map((a1d) => { return([a1d, b1.filter((f1) => { return(f1.name === a1d.area);})[0]["label_location"] ] ) ; });
        const t1 = a1.map((a1d) => 
               {   const tt1 = b1.filter((f1) =>  { return(f1[key1] === a1d[key2]);});
                   if( tt1.length > 0 ) {
                    return( {...a1d, ...tt1[0] }  );
                   } else {
                     return(a1d);
                   }

               });
         return(t1);
      } else {
        return([]);
      }
  }

  export default flattenData;
