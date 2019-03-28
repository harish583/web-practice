export default function httpRequest(obj) {
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

    const data = {
        body: JSON.stringify(obj.data),
        method:"POST",
        headers:new Headers({
            "content-type":"application/json"
        })
    }
    return fetch(obj.url,data)
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        console.log('response....', response);
        return response;
    });
}
