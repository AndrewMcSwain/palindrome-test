function palindrome(str) {
    //lower case it
    var stringLowerCase = str.toLowerCase();
    //remove all non-alphanumeric characters without .replace
    var alphaNumeric = function(){
      for(i = 0; i < stringLowerCase.lengh; i++){
        var alphaNumericChar = stringLowerCase.charAt(i);
        var alphaNumericIndex = i;
        var removeArray = [];
      //find the unwanted charactes
        if (alphaNumericChar != /\w/ || /\d/){
          removeArray.push(alphaNumericIndex);
          }
        return removeArray;
      } 
      //remove the unwanted characters
      for(i = 0; i < stringLowerCase.length; i++){
        var alphaNumericSting = stringLowerCase.split(removeArray[i]);
        //may need to subtract one(1) from the following item on removeArray each time the for         loop runs.
       // removeArray.forEach(/*subtract 1*/);
        
      }
    }
};
palindrome("WHAT");
