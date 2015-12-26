function palindrome(str) {
  
  var stringLowerCase = "";
  var alphaString = "";
  var strRev = function(){
    var array = alphaString.split("");
    array.reverse();
    return array.join("");
  };
  
  function processStr(){
    stringLowerCase = str.toLowerCase();
    return stringLowerCase;
    //remove non-alphanumeric characters
  }
  
  
  function removeChars(str){
    var remArray = []; 
    for(i=0; i < str.length; i++){
       index = i;
       value = stringLowerCase.charAt(index); //change getValue() to charAt()
       if (value != /\w/){
           remArray.push(index);
       		}
     }	
     for(i=0; i < remArray.length; i++){
     	alphaString = stringLowerCase.split(remArray[i]);
     }       
}

  if (strRev == str){
  return true;
  }  
  
  processStr(str);  
  removeChars(stringLowerCase, str);
}



palindrome("eye");

  




