function palindrome(str){
stringLowerCase = str.toLowerCase();
removeArray = [];
for(i = 0; i < stringLowerCase.length; i++){
  var alphaNumericChar = stringLowerCase.charAt(i);
  var alphaNumericIndex = i;
  var isLetter = /\w/.test(alphaNumericChar);
  var isNumber = /\d/.test(alphaNumericChar);
  if (isLetter === false && isNumber === false){
    	removeArray.push(alphaNumericIndex);
      }
   	}
return console.log(removeArray);
  
}

palindrome("this is the master race of gerbil fuckers");
