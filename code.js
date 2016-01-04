// the goal here is to test if a string is a palindrome using as few built-in methods
// as possible.

function palindrome(string){
  var stringVar = string;
  var arrayVar = "";
  var stringLength = string.length;
  
  //string to lower-case
  function toLowerCase(string){
  	return stringVar = string.toLowerCase();
  }
  
  //create an array of characters that meet (or don't meet) a specific criteria 
var removeArray = [];

function cleanArray(string){
      for(i = 0; i < string.length; i++){
          var alphaNumericChar = string.charAt(i);
          var alphaNumericIndex = i;
          var isLetter = /\w/.test(alphaNumericChar);
          var isNumber = /\d/.test(alphaNumericChar);
          if (isLetter === false && isNumber === false){
            removeArray.push(alphaNumericIndex);
          }
        return removeArray;
        }
}
  
  //cut the string according to the array of unwanted characters; returns a string
var newArray = [];
var newString = "";
function sliceAndDice(string, array){
    var arrayLength = array.length;
      for(i=0; i < arrayLength; i++){
            
        	//the part we dont want in our new string
            var before = string.slice(array[i]-1, array[i]);
            
        	//the part we want in our new string
        	var after = string.slice(array[i-1], array[i]-1);
        	newArray.push(after);
        	
        	console.log("\narray[i]: " + array[i]);
          console.log("newArray: " + newArray);
          console.log("before: " + before);
          console.log("after: " + after)
          }
    
      var end = string.slice(array[arrayLength-1],stringLength);
      newArray.push(end);
      console.log(newArray);
      var newString = newArray.join("");
      console.log(newString);
      return newString;
}
  
//reverse a string or array; returns a string
var reverseString;
function reverse(input){
  	if(input.constructor === Array)input.join("");
    var array = input.split("");
  	var reverseArray = array.reverse();
    var reverseString = array.join("");
  	console.log("reverseString: " + reverseString);
    return reverseString;
}

  //compare the value of two strings
  function compare(string, revstring){
    if (string == revstring)
      return true;
    else
      return false;
  }
  
  toLowerCase(stringVar); // make string lowercase
  cleanArray(stringVar); //locate unwanted characters; add them to an array  
  sliceAndDice(stringVar, removeArray); //remove unwanted characters according to array; creates newString and newArray
  reverse(newString); //reverse the string or array
  compare(newString, reverseString)

}

palindrome("thisozjahmasterrace2of gerbil kind");
