function cleanString(string){
  var stringVar = string;
  var arrayVar = "";
  var stringLength = string.length;
  var theRestArray = [];
  var removeArray = [];
  console.log(string);
  
  function cleanArray(string){
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
    var arrayLength = removeArray.length;
    var end = string.slice(array[arrayLength-1],stringLength);
    theRestArray.push(end);
    console.log(theRestArray);
    var newString = theRestArray.join("");
    console.log(newString);
    return newString;
  }
   console.log(cleanArray(stringVar));   
   console.log(sliceAndDice(stringVar, removeArray));
}
}
cleanString("thisozjahmasterrace2of gerbil kind");
