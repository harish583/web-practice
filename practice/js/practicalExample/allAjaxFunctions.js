function getSurveys() {
    return httpRequest({
        //url: 'http://localhost:3000/result'
        // url:"http://localhost:8080/db.json?/result",
        url:"http://127.0.0.1:8080/db.json?/result"
    });
}
function getSelectedSurvey(obj) {
    return httpRequest({
        url: obj.url,
        method:"GET",
        data: obj
    });
}
var allSurveys = {
    getSurveys: getSurveys,
    getSelectedSurvey:getSelectedSurvey
}
