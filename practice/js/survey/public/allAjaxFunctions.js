function getSurveys() {
    function getQueryVariable(variable)
    {
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
    }
    data={
        _app:getQueryVariable("aid"),
        _user:getQueryVariable("uid"),
        _channel:getQueryVariable("cid")
    }
    return httpRequest({
        //url: 'http://localhost:3000/result'
        // url:"http://localhost:8080/db.json?/result",
        // url:"http://localhost:3000/practicalExample/db.json"
        url:"https://devio.spotcues.com/survey/forchannel",
        method:"POST",
        data:data
        // url:"http://localhost:3000/practicalExample/practicaldemo.html?e=t&e=d&web=true&aid=5afbc7485d74bc61a1058263&cname=Loop&uname=harish&uid=5a379806a68301778a23ca2c&cid=587c56497c3465c078f6f2df#home"
    });
}
function getSelectedSurvey(obj) {
    return httpRequest({
        url: obj.url,
        method:"GET",
        data: obj.data
    });
}
var allSurveys = {
    getSurveys: getSurveys,
    getSelectedSurvey:getSelectedSurvey
}