function httpRequest(obj) {
    var http = new XMLHttpRequest();
    // http.onreadystatechange = function(event) {
    //     console.log('onreadystatechange', this, event);
    // };
    http.onload = function() {
        var response = this.responseText;
        response = JSON.parse(response);
        obj.onload(response);
    };
    // http.onloadend = function(event) {
    //     console.log('onloadend', this, event)
    // };
    // http.onloadstart = function(event) {
    //     console.log('onloadstart', this, event)
    // };
    // http.onprogress = function(event) {
    //     console.log('onprogress', this, event)
    // };
    // http.onabort = function(event) {
    //     console.log('onabort', this, event)
    // };
    // http.onerror = function(event) {
    //     console.log('onerror', this, event)
    // };
    
    http.open(obj.method || 'GET', obj.url, true);
    http.send();
}