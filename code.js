function cleanString(string, array){
  var stringVar = string;
  var arrayVar = array;
  var stringLength = string.length;
  var arrayLength = array.length;
  console.log(string);
  theRestArray = [];
  removeArray = [];
  
  function cleanArray(string, array){
      for(i = 0; i < str.length; i++){
          var alphaNumericChar = str.charAt(i);
          var alphaNumericIndex = i;
          var isLetter = /\w/.test(alphaNumericChar);
          var isNumber = /\d/.test(alphaNumericChar);
          if (isLetter === false && isNumber === false){
            removeArray.push(alphaNumericIndex);
          }
        return removeArray;
        }
  
  function sliceAndDice(string, array){
      for(i=0; i < arrayLength; i++){
        	
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
   cleanArray(stringVar, arrayVar);    
   sliceAndDice(stringVar, arrayVar);
}
cleanString("thisozjahmasterrace of gerbil kind", removeArray);
