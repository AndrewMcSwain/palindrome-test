function palindrome(str) {
 
  //make the string lower case
  var stringLowerCase = function processStr(){
    stringLowerCase = str.toLowerCase();
    return stringLowerCase;
    };
  //remove all non alpha characters
  var alphaString = function removeChars(str){
    var remArray = []; 
    for(i=0; i < stringLowerCase.length; i++){
      index = i;
      value = stringLowerCase.charAt(index); 
      if (value !== /\w/ === true){
        remArray.push(index);
       }
    }	
    for(i=0; i < remArray.length; i++){
      alphaString = stringLowerCase.split(remArray[i]);
    }       
  };
  //reverse the formatted string
  var strRev = function(){
    var array = alphaString.split("");
    array.reverse();
    return array.join("");
  };
  
  //need to compare strRev to str and if they are the same return true.
  
palindrome("eye");
