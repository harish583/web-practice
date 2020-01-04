function httpRequest(obj) {
    // return new Promise(function(resolve) {
    //     var http = new XMLHttpRequest();
    //     http.onload = function() {
    //         var response = this.responseText;
    //         response = JSON.parse(response);
    //         resolve(response);
    //     };
    //     http.open(obj.method || 'GET', obj.url, true);
    //     http.setRequestHeader('Content-Type', 'application/json');
    //    // http.withCredentials = true;
    //     http.send(JSON.stringify(obj.data));
    // })

    // fetch(obj.url+"/result").then(function(response) {
    //     return response.text()
    //   }).then(function(text) {
    //     return text;
    //   });

    data={
        body:obj.data,
        method:"POST",
        headers:new Headers({
            "content-type":"application/json"
        })
    }
    fetch(obj.url,data)
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        return response;
    });
}
//http://localhost:3000/practicalExample/practicaldemo.html?e=t&e=d&web=true&aid=5afbc7485d74bc61a1058263&cname=Loop&uname=harish&uid=5a379806a68301778a23ca2c&cid=587c56497c3465c078f6f2df#home