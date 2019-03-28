
export default  function httpRequest(obj){
    return fetch(obj.url)
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        return response;
    });
}