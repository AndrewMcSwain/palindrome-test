function cut(string, array){
  var stringVar = string;
  var arrayVar = array;
  var stringLength = string.length;
  var arrayLength = array.length;
  console.log(string);
  theRestArray = [];
  
  function sliceAndDice(string, array){
      for(i=0; i < arrayLength; i++){
        	//slice and dice
            var beg = string.slice(array[i]-1, array[i]);
            var rest = string.slice(array[i-1], array[i]-1);
        	theRestArray.push(rest);
        	
        	

        	console.log("\narray[i]: " + array[i]);
          	console.log("theRestArray: " + theRestArray);
            console.log("beg: " + beg);
            console.log("rest: " + rest)
            }
    var end = string.slice(array[arrayLength],stringLength);
    console.log(arrayLength);
    theRestArray.push(end);
  }
  return sliceAndDice(stringVar, arrayVar);
}
cut("thisozjahmasterrace of gerbil kind", [4, 8, 15]);
