

function table(){
    var tab = document.querySelector(".table-start");
    var times = document.querySelector(".times").value;
    var values = document.querySelector(".values").value;
    var operators = document.querySelector(".operators").value;
    var table = '';
    
    if((operators.charCodeAt(0)==43)||(operators.charCodeAt(0)==45)||(operators.charCodeAt(0)==42)||(operators.charCodeAt(0)==47)){
        for(var i =1;i<=times;i++){
            table = table + values + operators + i +"="+eval(values + operators + i) +"<br>";
        }
        tab.innerHTML = table;
    }
    else {
        alert("enter correct values")
    }
    document.querySelector(".times").value = '';
    document.querySelector(".values").value = '';
    document.querySelector(".operators").value ='';
    document.querySelector(".table-start").value = '';
}
var sub = document.querySelector(".submit");
sub.addEventListener("click",table);