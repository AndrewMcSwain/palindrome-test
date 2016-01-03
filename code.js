function cleanString(string, array){
  var arrayLength = array.length;
  var stringLength = string.length;
  var concatenated = "";
  var newBeginning = 0;
  var theRestArray = [];
  for(var i = 0; i < arrayLength; i++){
    
  	 var beg = string.slice(newBeginning, array[i]);
     var slice = beg.length - 1;
     var theRest = beg.slice(newBeginning, slice);
     theRestArray.push(theRest);
     var next = array[i];
     var end = string.slice(next, stringLength);
     concatenated = theRest + end ;
    
     if (array[i] !== 0) newBeginning = array[i] - 1;
     else newBeginning = 0;
    
     console.log("\narray: " + array[i]);
     console.log("beg: " + beg);
     console.log("theRest: " + theRest);
     console.log("theRestArray: " + theRestArray);
     console.log("next: " + next);
     console.log("end: " + end);
     console.log("conca; " + concatenated);
    
     /*for(var a = 0; a < arrayLength; i++){
       array[a] = array[a]-1;*/
     }
     
 
  console.log("\nconcatenated is: " + concatenated);
}

cleanString("this is the master race of gerbils", [3,8]);
