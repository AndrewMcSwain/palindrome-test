function palindrome(str) {
//lower case it
    var stringLowerCase = str.toLowerCase();
//remove all non-alphanumeric characters without .replace
    var removeArray = [];  
    var alphaNumericString = "";
//find the unwanted characters
    for(i = 0; i < stringLowerCase.length; i++){
      var alphaNumericChar = stringLowerCase.charAt(i);
      var alphaNumericIndex = i;
      if (alphaNumericChar != /\w/ || /\d/ || /\s/){
          removeArray.push(alphaNumericIndex);
          }
      return removeArray;
      } 
//remove the unwanted characters
      for(i = 0; i < stringLowerCase.length; i++){
        var alphaNumericString = stringLowerCase.slice(removeArray[i], removeArray[i]);
        removeArray = removeArray.map(function(num) {return num - 1;});  
       }
//reverse the string cleaned of unwanted characters  
    var alphaNumericArray = alphaNumericString.split("");
    var reverseAlphaNumericArray = alphaNumericArray.reverse();
    var reverseAlphaNumericString = reverseAlphaNumericArray.join();
//compare the value of two strings
  function compare(string, revstring){
    if (string === revstring)
      return true;
    else
      return false;
  }
 
  return compare(alpha(), revAlphaNumeric());

}
palindrome("eye");
