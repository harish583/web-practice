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
    //     http.send(JSON.stringify(obj.data));
    // })

    // fetch(obj.url+"/result").then(function(response) {
    //     return response.text()
    //   }).then(function(text) {
    //     return text;
    //   });


    fetch(obj.url).then(function(response) {
        response.text().then(function(text) {
          return text;
        });
      });
}
