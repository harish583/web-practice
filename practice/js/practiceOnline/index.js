function persistence(number) {
    var newNumber = number.toString(); 
    var c = 0;
   for(;newNumber.length>1;newNumber){
   var product =1;
     for(var i=0;i<newNumber.length;i++){
       product *= newNumber[i]
     }
     newNumber= product;
     c++
   }
   return c;
   
}