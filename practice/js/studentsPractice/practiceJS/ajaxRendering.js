function httpRequest(obj){
    return new Promise(function(resolve){
        var http = new XMLHttpRequest();
        http.onload=function(){
            var response = this.responseText;
            response = JSON.parse(response);
            resolve(response);
        }
        http.open(obj.method,obj.url,true);
        http.setRequestHeader("content-type","application/json");
        http.send(JSON.stringify(obj.data));
    });
    

}