function cleanString(string, array){
  var arrayLength = array.length;
  var stringLength = string.length;
  var concatenated = "";
  for(var i = 0; i < l; i++){
  	 var beg = string.slice(0, array[i]);
     var next = array[i] + 1;
     var end = string.slice(next, stringLength);
  	 concatenated = beg + end;
  }
  console.log(concatenated);
}

cleanString("this is the master race of gerbils", [3,5,7,10]);
