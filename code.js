function map(){
  removeArray = [4, 4, 4];
   for(i = 0; i < removeArray.length; i++){
       removeArray = removeArray.map(
        function(num){
            return (num - 1);
            }
         );  
       }
  return removeArray;
}
map();
