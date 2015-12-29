function palindrome(str) {
//lower case it
    var stringLowerCase = str.toLowerCase();
//remove all non-alphanumeric characters without .replace
    var alphaNumeric = function(){
      for(i = 0; i < stringLowerCase.lengh; i++){
        var alphaNumericChar = stringLowerCase.charAt(i);
        var alphaNumericIndex = i;
        removeArray = [];
//find the unwanted charactes
        if (alphaNumericChar != /\w/ || /\d/){
          removeArray.push(alphaNumericIndex);
          }
        return removeArray;
      } 
//remove the unwanted characters
      for(i = 0; i < stringLowerCase.length; i++){
        var alphaNumericSting = stringLowerCase.slice(removeArray[i],removeArray[i]);
        removeArray = removeArray.map(function(num) {return num - 1;});  
       }
    return alphaNumericString;
    };
//reverse the string cleaned of unwanted characters  
  var revAlphaNumeric = function(){
    var alphaNumericArray = alphaNumericString.split(" ");
    var reverseAlphaNumericArray = alphaNumericArray.reverse();
    var reverseAlphaNumericString = reverseAlphaNumericArray.join();
    return reverseAlphaNumericString;
  };
  
  function compare(string, revstring){
    if (string == revstring)
      return true;
    else
      return false;
  }
  
  return compare(alphaNumeric, revAlphaNumeric);
 
}
palindrome("WHAT");
