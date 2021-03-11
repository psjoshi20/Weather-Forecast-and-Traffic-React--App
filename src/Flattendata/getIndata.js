function get_in2(data1, path1) {
    var ii; var retv1 = data1; var x1;
    for(ii in path1) {
       x1 = path1[ii];
       retv1 = retv1[x1];
    }
    return(retv1);
 }