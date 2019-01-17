
var Quations = [
    {
        id: 'question1',
        questions: 'question1',
        options: [
            'abc defg hijkl mnop qrst uvwx yz ',
            'option2',
            'option3',
            'option4'
        ]
    },
    {
        id: 'question2',
        questions: 'question2a as d asd',
        options: [
            'option1',
            'option2',
            'option3',
            'option4'
        ]
    },
    {
        id: 'question3',
        questions: 'question3',
        options: [
            'option1',
            'option2',
            'option3',
            'option4'
        ]
    }
]

var html='';
var total='';
var displayQuations ='';
var totalQuations ='';
function renderingHtmlAllQuations(){
    for(var i=0;i<Quations.length;i++){
        html= '<div class="quation-full" data-id="'+i+'">'+
            '<h3 class="Quation" data-id="'+i+'">'+Quations[i].questions+'</h3>'+
            '<ul class="options" data-id="'+i+'">';
            var Alloptions = ''
            for(var x=0;x<Quations[i].options.length;x++){
                Alloptions = Alloptions+'<li>'+Quations[i].options[x]+'</li>'
            }
            var buttons ='';
            buttons ='</ul>'+
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
}
var html3 ='';
var newSubmit='';
function renderingHtmlnewQuation(){
     html3 = '<div class="popup"></div>'+
        '<div class="popup-content">'+
        '<h4>Adding a new quation...........</h4>'+
        '<div class="close">X</div>'+
        '<input type="text" placeholder="Quation" data-id=""><span></span>';
        var newQ ='';
        for(var x=0;x<4;x++){
            newQ=newQ+'<input type="text" placeholder="Option'+parseInt(x+1)+'" data-id="'+x+'"><span></span>'
        }
        newSubmit='<button class="new-quation-submit">Submit</button>'+
    '</div>'

    var news = document.querySelector(".new-Quation");
    news.innerHTML = html3+newQ+newSubmit;
}


function renderingHtmlEditingQuation(event){
    var i = event.target.dataset.id;
    var Edit ='<div class="popup"></div>'+
    '<div class="popup-content">'+
        '<h4>Editing the quation</h4>'+
        '<div class="close">X</div>'+
        '<input type="text" placeholder="Quation" value="'+Quations[i].questions+'?"><span></span>';
        var EditNew ='';
        for(var x=0;x<Quations[i].options.length;x++){
        EditNew = EditNew+'<input type="text" placeholder="Option1" value="'+Quations[i].options[x]+'"><span></span>'}
        // '<input type="text" placeholder="Option2"><span></span>'+
        // '<input type="text" placeholder="Option3"><span></span>'+
        // '<input type="text" placeholder="Option4"><span></span>'+
        var close = '<button class="cancel">Cancel</button>'+
        '<button class="Editing-quation-submit">Submit</button>'+
    '</div>';
    //editQuation();
    var EditingQuations = document.querySelector(".Editing-Quation");
    EditingQuations.innerHTML = Edit+EditNew+close;
    EditingQuations.style.display="block";
    var close = document.querySelectorAll(".close");
    for(var i =0;i<close.length;i++){
        close[i].addEventListener("click",closing)
    };
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
    quationFull[id].remove();
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

    var EditingQuation = document.querySelectorAll(".edit-quation");
    for(var i=0;i<EditingQuation.length;i++){
        EditingQuation[i].addEventListener("click",renderingHtmlEditingQuation)
    };

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
renderingHtmlAllQuations();
BindingEvents();