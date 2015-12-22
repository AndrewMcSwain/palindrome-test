function palindrome(str) {
  
  var stringLowerCase = "";
  
  function processStr(str){
    stringLowerCase = str.toLowerCase();
    return stringLowerCase;
    //remove non-alphanumeric characters
  }

  
  function removeChars(stringLowerCase, str){
     for(i=0; i < str.length; i++){
       index = stringLowerCase.indexOf(i);
       value = stringLowerCase.getValue(index);
       if (value != /\w/){
         strLowerCase.split(index);
       }
   }
  }
  
  
  var strRev = function(str){
    var array = str.split("");
    array.reverse();
    return array.join("");
  };
  
  return true;
}



palindrome("eye");

  
  if(strRev == str){
  return true;}
}



palindrome("eye");

  
