

export default function ajaxFunctionCall(object){
     return new Promise(function(resolve){
    //     var http = new XMLHttpRequest();
    //     http.onload=function(){
    //         var response = this.responseText;
    //         response = JSON.parse(response);debugger;
    //         resolve(response);
    //     }
    //     http.open(object.method,object.url,true);
    //     http.setRequestHeader("content-type","application/json");
    //     http.send();
    // });

    // function loadDoc() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          var a ='';
          if (this.readyState == 4 && this.status == 200) {debugger;
            //document.getElementById("demo").innerHTML =
             a=this.responseText;
            JSON.parse(a);
            resolve(a);
          }
        };
        xhttp.open(object.method, object.url , true);
        xhttp.setRequestHeader("content-type","application/json");
        xhttp.send();
     })  
    
}