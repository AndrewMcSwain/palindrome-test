function cleanArray(str){
removeArray = [];
for(i = 0; i < str.length; i++){
  var alphaNumericChar = str.charAt(i);
  var alphaNumericIndex = i;a
  var isLetter = /\w/.test(alphaNumericChar);
  var isNumber = /\d/.test(alphaNumericChar);
  if (isLetter === false && isNumber === false){
    	removeArray.push(alphaNumericIndex);
      }
   	}
return removeArray;
}

cleanArray(stringLowerCase)
