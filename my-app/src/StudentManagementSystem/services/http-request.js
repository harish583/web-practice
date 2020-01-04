

export function ajaxFunctionCall(object){
    // return new Promise(function(resolve){
    //     var http = new XMLHttpRequest();
            
    //         http.onreadystatechange = function() {
    //             if (this.readyState == 4 && this.status == 200) {
    //                 var response = this.responseText;
    //                 response = JSON.parse(response);
    //                 resolve(response);
    //             }
    //         }
    //     http.open(object.method,object.url,true);
    //     http.setRequestHeader("content-type","application/json");
    //     http.send(JSON.stringify(object.data));
    // });


    return new Promise(function(resolve) {
            var http = new XMLHttpRequest();
            http.onload = function() {
                var response = this.responseText;
                response = JSON.parse(response);
                resolve(response);
            };
            http.open(object.method, object.url, true);
            http.setRequestHeader('Content-Type', 'application/json');
            http.send(JSON.stringify(object.data));
        })
    
}

