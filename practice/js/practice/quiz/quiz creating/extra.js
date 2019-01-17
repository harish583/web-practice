
// var Quations = [
//     {
//         id: 'question1',
//         questions: 'question1',
//         options: [
//             'abc defg hijkl mnop qrst uvwx yz ',
//             'option2',
//             'option3',
//             'option4'
//         ]
//     },
//     {
//         id: 'question2',
//         questions: 'question2a as d asd',
//         options: [
//             'option1',
//             'option2',
//             'option3',
//             'option4'
//         ]
//     },
//     {
//         id: 'question3',
//         questions: 'question3',
//         options: [
//             'option1',
//             'option2',
//             'option3',
//             'option4'
//         ]
//     }
// ]

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         a =this.responseText;
         quats=JSON.parse(a);
        renderingHtmlAllQuations(quats);
      }
    };
    xhttp.open("GET", "http://localhost:3000/questions", true);
    xhttp.send();
  }

function create() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         a =this.responseText;
         quats=JSON.parse(a);
        console.log('quats....', quats)
      }
    };
    xhttp.open("POST", "http://localhost:3000/questions", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    var quat = document.querySelector(".input-quation");
    var optns = document.querySelectorAll(".new-option");
    var count = document.querySelectorAll(".quation-full");
    var correctoption= document.querySelector(".correct-option");
    var data = JSON.stringify({
        id: quat.value.replace(/ /g,''),
        questions: quat.value,
        options: [
            optns[0].value,
            optns[1].value,
            optns[2].value,
            optns[3].value
        ],
        correct : correctoption.value
    })
    xhttp.send(data);
    closing();
    renderingHtmlAllQuations(Quations);
}

loadDoc();




function Deleting(i) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            a =this.responseText;
        a=JSON.parse(a);
        console.log('a....', a)
        }
    };
    var Quation = document.querySelectorAll(".Quation");
    var id = encodeURIComponent(Quation[i].id);
    xhttp.open("DELETE", "http://localhost:3000/questions/" + id, true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    var quat = document.querySelectorAll(".Quation");
    var optns = document.querySelectorAll(".option"+i);
    var correctoption= document.querySelector(".correct-option-holder");
    var data = JSON.stringify({
        id: quat[i].innerHTML.replace(/ /g,''),
        questions:quat[i].innerHTML,
        options: [
            optns[0].innerHTML,
            optns[1].innerHTML,
            optns[2].innerHTML,
            optns[3].innerHTML
        ],
        correct : correctoption.value
    })
xhttp.send(data);
}


//update:
function update(i) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            a =this.responseText;
        a=JSON.parse(a);
        console.log('a....', a)
        }
    };

    var Quation = document.querySelectorAll(".Quation");
    var id = encodeURIComponent(Quation[i].id);
    xhttp.open("PUT", "http://localhost:3000/questions/" + id, true);
    xhttp.setRequestHeader("Content-Type", "application/json");
        var quat = document.querySelector(".edit-quation-input");
        var optns = document.querySelectorAll(".Edit-option");
        var correctoption= document.querySelector(".correct-option");
    var data = JSON.stringify({
        id: quat.value.replace(/ /g,''),
        questions: quat.value,
        options: [
            optns[0].value,
            optns[1].value,
            optns[2].value,
            optns[3].value
        ],
        correct : correctoption.value
    })
xhttp.send(data);
}


var html='';
var total='';
var displayQuations ='';
var totalQuations ='';
function renderingHtmlAllQuations(Quations){
    for(var i=0;i<Quations.length;i++){
        html= '<div class="quation-full" data-id="'+i+'">'+
            '<h3 class="Quation" data-id="'+i+'">'+Quations[i].questions+'</h3>'+
            '<ul class="options" data-id="'+i+'">';
            var Alloptions = ''
            for(var x=0;x<Quations[i].options.length;x++){
                Alloptions = Alloptions+'<li class="option'+i+'">'+Quations[i].options[x]+'</li>'
            }
            var buttons ='';
            buttons ='</ul><div class="correct-option-holder">'+Quations[i].correct+'</div>'+
            '<span class="edit-quation" data-id="'+i+'">EDIT</span>'+
            '<span class="delete-quation" data-id="'+i+'">DELETE</span>'+
        '</div>';
        
        totalQuations = totalQuations + html+Alloptions+buttons;
    }
    var renderingHtmlAllQuations = document.querySelector(".quations-holder");
    renderingHtmlAllQuations.innerHTML = totalQuations;
    var deleteQuation = document.querySelectorAll(".delete-quation");
    for(var i=0;i<deleteQuation.length;i++){
        deleteQuation[i].addEventListener("click",deletingQuation)
    };
    var EditingQuation = document.querySelectorAll(".edit-quation");
    for(var i=0;i<EditingQuation.length;i++){
        EditingQuation[i].addEventListener("click",function(){ renderingHtmlEditingQuation(Quations,event)})
    };
}
function renderingHtmlQuationDetails(event){
    var i = event.currentTarget.dataset.id;
    var displayQuations='';
    var html2 = '<div class="popup"></div>'+
    '<div class="popup-content">'+
        '<h4>Quation details...........</h4>'+
        '<div class="close">X</div>';
        var quary ='';
            quary = '<h2>'+Quations[i].questions+'?</h2>';
            var alloptions='';
            for(var x=0;x<Quations[i].options.length;x++){
                alloptions= alloptions+'<div class="showing-options">'+Quations[i].options[x]+'</div>';
            }    
    displayQuations= displayQuations+html2+quary+alloptions+'</div>' 
    var Quationdetails = document.querySelector(".Quation-details");
    Quationdetails .innerHTML = displayQuations;
    Quationdetails.style.display="block";
    var close = document.querySelectorAll(".close");
    for(var i =0;i<close.length;i++){
        close[i].addEventListener("click",closing)
    };
}

function addQuation(){
    renderingHtmlnewQuation();
    var quationsHolder = document.querySelector(".new-Quation");
    quationsHolder.style.display ="block";
    var close = document.querySelectorAll(".close");
    for(var i =0;i<close.length;i++){
        close[i].addEventListener("click",closing)
    };
    var newQuationSubmit = document.querySelector(".new-quation-submit");
    newQuationSubmit.addEventListener("click",create);
}
var html3 ='';
var newSubmit='';
function renderingHtmlnewQuation(){
     html3 = '<div class="popup"></div>'+
        '<div class="popup-content">'+
        '<h4>Adding a new quation...........</h4>'+
        '<div class="close">X</div>'+
        '<input class="input-quation" type="text" placeholder="Quation" data-id=""><span></span>';
        var newQ ='';
        for(var x=0;x<4;x++){
            newQ=newQ+'<input class="new-option" type="text" placeholder="Option'+parseInt(x+1)+'" data-id="'+x+'"><span></span>'
        }
        newSubmit='<input type="number" class="correct-option" placeholder="correct option number"><button class="new-quation-submit">Submit</button>'+
    '</div>'

    var news = document.querySelector(".new-Quation");
    news.innerHTML = html3+newQ+newSubmit;
}


function renderingHtmlEditingQuation(Quations,event){
    var id = event.target.dataset.id;
    var Edit ='<div class="popup"></div>'+
    '<div class="popup-content">'+
        '<h4>Editing the quation</h4>'+
        '<div class="close">X</div>'+
        '<input type="text"  class="edit-quation-input" placeholder="Quation" value="'+Quations[id].questions+'?"><span></span>';
        var EditNew ='';
        for(var x=0;x<Quations[id].options.length;x++){
        EditNew = EditNew+'<input class="Edit-option" type="text" placeholder="Option1" value="'+Quations[id].options[x]+'"><span></span>'}
        var close = '<input type="number" class="correct-option" value="'+Quations[id].correct+'"><button class="cancel">Cancel</button>'+
        '<button class="Editing-quation-submit">Submit</button>'+
    '</div>';
    var EditingQuations = document.querySelector(".Editing-Quation");
    EditingQuations.innerHTML = Edit+EditNew+close;
    EditingQuations.style.display="block";
    
    var newQuationSubmit = document.querySelector(".Editing-quation-submit");
    newQuationSubmit.addEventListener("click",function(){update(id)});
    var close = document.querySelectorAll(".close");
    for(var i =0;i<close.length;i++){
        close[i].addEventListener("click",closing)
    };
    var cancel = document.querySelectorAll(".cancel");
    for(var i=0;i<cancel.length;i++){
        cancel[i].addEventListener("click",closing)
    };
    var newQuationSubmit = document.querySelector(".Editing-quation-submit");
    newQuationSubmit.addEventListener("click",closing);
    
}



function closing(){
    var QuationDetails = document.querySelector(".Quation-details");
    QuationDetails.style.display="none";
    var newQuation = document.querySelector(".new-Quation");
    newQuation.style.display="none";
    var EditingQuation = document.querySelector(".Editing-Quation");
    EditingQuation.style.display="none";
    var deletingPopup = document.querySelector(".deleting-popup");
    deletingPopup.style.display="none";

}

function editQuation(){
    // var EditingQuations = document.querySelector(".Editing-Quation");
    // EditingQuations.innerHTML = Edit+EditNew+close;
    // EditingQuations.style.display="block";
}


function deletingQuation(event){
    var id = event.currentTarget.dataset.id;
    var quationFull = document.querySelectorAll(".quation-full");
    Deleting(id);
    //quationFull[id].remove();
}

var quationsFull = document.querySelectorAll(".quation-full");
for(var i=0;i<quationsFull.length;i++){
    quationsFull[i].addEventListener("click",renderingHtmlQuationDetails)
}

function BindingEvents(){
    var AddQuationButton = document.querySelector(".Add-quation-button");
    AddQuationButton.addEventListener("click",addQuation);

    var close = document.querySelectorAll(".close");
    for(var i =0;i<close.length;i++){
        close[i].addEventListener("click",closing)
    };

    // var EditingQuation = document.querySelectorAll(".edit-quation");
    // for(var i=0;i<EditingQuation.length;i++){
    //     EditingQuation[i].addEventListener("click",renderingHtmlEditingQuation)
    // };

    var cancel = document.querySelectorAll(".cancel");
    for(var i=0;i<cancel.length;i++){
        cancel[i].addEventListener("click",closing)
    };

    var deleteQuation = document.querySelectorAll(".delete-quation");
    for(var i=0;i<deleteQuation.length;i++){
        deleteQuation[i].addEventListener("click",deletingQuation)
    };

    // var quationsFull = document.querySelectorAll(".quation-full");
    // for(var i=0;i<quationsFull.length;i++){
    //     quationsFull[i].addEventListener("click",renderingHtmlQuationDetails)
    // }
}
BindingEvents();