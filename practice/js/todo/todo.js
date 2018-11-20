function fun(){

    var input1 = document.getElementById('text');
   
  //  document.getElementById('demo').innerHTML = input1.value;
  //  document.createElement('LI');
   // li.appendChild(input1.value);

    var x = document.createElement("UL");
    x.setAttribute("id", "demo");
    document.body.appendChild(x);

    var y = document.createElement("LI");
    
    var t = document.createTextNode(input1.value);
    y.appendChild(t);
    
        document.getElementById("demo").appendChild(y);
    
    
    
}