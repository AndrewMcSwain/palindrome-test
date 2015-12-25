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
    var remArray = []; 
    for(i=0; i < str.length; i++){
       index = i;
       value = stringLowerCase.charAt(index); //change getValue() to charAt()
       if (value != /\w/){
           remArray.push(index);}
       }
     for(i=0; i < remArray.length; i++){
      alphaString = stringLowerCase.split(remArray[i]);
       }
         //add position to an array, then slice all values in the array from the string;
       
    }
  if (strRev == str){
  return true;
  }  
  
  processStr(str);  
  removeChars(stringLowerCase, str);
}



palindrome("eye");

  




