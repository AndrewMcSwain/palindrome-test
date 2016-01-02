function cleanString(string, array){
  var arrayLength = array.length;
  var stringLength = string.length;
  var concatenated = "";
  for(var i = 0; i < arrayLength; i++){
     console.log("array: " + array[i]);
  	 var beg = string.slice(0, array[i]);
     console.log("beg: " + beg);
     var next = array[i]
     console.log("next: " + next);
     var end = string.slice(next, stringLength);
     console.log("end: " + end);
  	 concatenated = beg + end;
     /*for(var a = 0; a < arrayLength; i++){
       array[a] = array[a]-1;*/
     }
     
 
  console.log("concatenated is: " + concatenated);
}

cleanString("this is the master race of gerbils", [1,3]);
