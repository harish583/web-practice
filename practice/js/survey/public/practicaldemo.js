var removingClick = null; 
function singleServay(singleSurvey){
    var holder = document.querySelector(".total-container");
    var div1 = document.createElement("div");
    var span1 = document.createElement("span");
    var span2 = document.createElement("span");
    var image = document.createElement("img");
    var div2 = document.createElement("div");
    var link = document.createElement("a");
    span2.appendChild(image);
    span2.appendChild(div2);
    span2.appendChild(link);
    div1.appendChild(span1);
    div1.appendChild(span2);
    div1.setAttribute("class","single-container");
    span1.setAttribute("class","icon-survey");
    image.setAttribute("class","monkey-image")
    link.setAttribute("class","surveyButton");
    //var path = window.location.href;
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
    
    link.setAttribute("href",(singleSurvey.url+"?uname="+getQueryVariable("uname")));
    link.setAttribute("target","_blank");
    span2.setAttribute("class","images-holder");
    div2.textContent=singleSurvey.title;
    link.innerHTML = "Take the survay";
    var tr = holder.appendChild(div1);

    //var singleSurveyButton = surveryButtonClicked(singleSurvey.title);
    // tr.querySelector(".surveyButton").addEventListener("click",function(){
    //     surveryButtonClicked(singleSurvey);
    // });
    // tr.querySelector(".surveyButton").removeEventListener("click",removingClick);
    // removingClick = singleSurveyButton;
    
    
}
// function surveryButtonClicked(singleSurvey){
//     allSurveys.getSelectedSurvey(singleSurvey)
//     .then(function(response){
//         console.log(response);
//     })
// }
// function gettingData(){
//     allSurveys.getSurveys()
//     .then(function(response){
//         for(singleSurvey of response){
//             singleServay(singleSurvey);
//         }
    
// })
//}

function gettingData(){
    allSurveys.getSurveys()
    .then(function(response){
        console.log(response.result);
        for(singleSurvey of response.result){
            singleServay(singleSurvey);
        }
    
})
}
gettingData();