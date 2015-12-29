function palindrome(str) {
//lower case it
    var stringLowerCase = str.toLowerCase();
//remove all non-alphanumeric characters without .replace
    var alphaNumeric = function(){
      var removeArray = [];  
      var alphaNumericString = "";
      for(i = 0; i < stringLowerCase.length; i++){
        var alphaNumericChar = stringLowerCase.charAt(i);
        var alphaNumericIndex = i;
        
//find the unwanted charactes
        if (alphaNumericChar != /\w/ || /\d/ || /\s/){
          removeArray.push(alphaNumericIndex);
          }
        return removeArray;
      } 
//remove the unwanted characters
      for(i = 0; i < stringLowerCase.length; i++){
        alphaNumericString = stringLowerCase.slice(removeArray[i],removeArray[i]);
        removeArray = removeArray.map(function(num) {return num - 1;});  
       }
    return alphaNumericString;
    };
//reverse the string cleaned of unwanted characters  
  var revAlphaNumeric = function(){
    var alphaNumericArray = alphaNumeric().split(" ");
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
  
  return compare(alphaNumeric(), revAlphaNumeric());
 
}
palindrome("not a palindrome");
