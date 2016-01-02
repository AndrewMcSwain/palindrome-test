function cleanString(string, array){
  var arrayLength = array.length;
  var stringLength = string.length;
  var concatenated = "";
  for(var i = 0; i < arrayLength; i++){
     
  	 var beg = string.slice(0, array[i]);
     var next = array[i]
     var end = string.slice(next, stringLength);
     //var newBeginning = end;
   	 concatenated = beg + end;
    
     console.log("\narray: " + array[i]);
     console.log("beg: " + beg);
     console.log("next: " + next);
     console.log("end: " + end);
    
     /*for(var a = 0; a < arrayLength; i++){
       array[a] = array[a]-1;*/
     }
     
 
  console.log("\nconcatenated is: " + concatenated);
}

cleanString("this is the master race of gerbils", [1,3]);
