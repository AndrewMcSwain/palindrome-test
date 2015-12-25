function palindrome(str) {
  
  var stringLowerCase = "";
  var alphaString = "";
  var strRev = function(str){
    var array = alphaString.split("");
    array.reverse();
    return array.join("");
  };
  
  function processStr(str){
    stringLowerCase = str.toLowerCase();
    return stringLowerCase;
    //remove non-alphanumeric characters
  }
  
  
  function removeChars(stringLowerCase, str){
     for(i=0; i < str.length; i++){
       index = i;
       var remArray = [];
       value = stringLowerCase.getValue(index);
       if (value != /\w/){
           remArray.push(index);}
       }
     for(i=0; i < remArray.length; i++){
      alphaString = stringLowerCase.split(remArray[i]);
       }
         //add position to an array, then slice all values in the array from the string;
       
    }
    
  return removeChar(stringLowerCase, str);
  return processStr(str);
  
  if(strRev == str){
  return true;
  };
};



palindrome("eye");

  

}



palindrome("eye");

  
//in production version change to array and reverse it, then run removeChar process on reversed array then replace str with unreversed and processed version, then compare to see if it's a palindrome.
