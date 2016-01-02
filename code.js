function cleanString(string, array){
  var arrayLength = array.length;
  var stringLength = string.length;
  var concatenated = "";
  for(var i = 0; i < arrayLength; i++){
  	 var beg = string.slice(0, array[i]);
     var next = array[i] + 1;
     var end = string.slice(next, stringLength);
     console.log(end);
  	 concatenated = beg + end;
     /*for(var a = 0; a < arrayLength; i++){
       array[a] = array[a]-1;*/
     }
     
 
  console.log(concatenated);
}
