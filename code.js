function cleanString(string, array){
  var stringVar = string;
  var arrayVar = array;
  var stringLength = string.length;
  var arrayLength = array.length;
  console.log(string);
  theRestArray = [];
  
  function sliceAndDice(string, array){
      for(i=0; i < arrayLength; i++){
        	//slice and dice
            var beg = string.slice(array[i]-1, array[i]);
            var rest = string.slice(array[i-1], array[i]-1);
        	theRestArray.push(rest);
        	
        	console.log("\narray[i]: " + array[i]);
          	console.log("theRestArray: " + theRestArray);
            console.log("beg: " + beg);
            console.log("rest: " + rest)
            }
    var end = string.slice(array[arrayLength-1],stringLength);
    theRestArray.push(end);
    console.log(theRestArray);
    var newString = theRestArray.join("");
    console.log(newString);
    return newString;
  }
  return sliceAndDice(stringVar, arrayVar);
}
cleanString("thisozjahmasterrace of gerbil kind", [1, 8, 15]);
