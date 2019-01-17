
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

var content ='',
options='',
buttons='',
fullcontent=''
function QuationHolder(){
    for(var i =0;i<Quations.length;i++){
        content = '<div class="quation-full" data-id="1">'+
        '<h3 class="Quation" data-id="1">'+Quations[i].questions+'</h3>'+
        '<ul class="options" data-id="1">';
        for(var x=0;x<Quations[i].options.length;x++){
            options = options+'<li>'+Quations[i].options[x]+'</li>';
        }
            // '<li>option1</li>'+
            // '<li>option1</li>'+
            // '<li>option1</li>'+
        buttons = '</ul>'+
        '<span class="edit-quation" data-id="1">EDIT</span>'+
        '<span class="delete-quation" data-id="1">DELETE</span>'+
    '</div>';
        fullcontent = fullcontent + content+options+buttons;
    }
var contenttag = document.querySelector(".quations-holder");
contenttag.innerHTML = fullcontent;
}

//QuationHolder();
var content = '',
optns='',fullcontent='';
function QuationDetails(i){
    content = '<div class="popup"></div>'+
    '<div class="popup-content">'+
        '<h4>Quation details...........</h4>'+
        '<div class="close">X</div>'+
        '<h2>'+Quations[i].questions+'</h2>';
        for(var x=0;x<Quations[i].options.length;x++){
            optns = optns+'<div class="showing-options">'+Quations[i].options[x]+'</div>'
        }
        // '<div class="showing-options">options</div>'+
        // '<div class="showing-options">options</div>'+
        // '<div class="showing-options">options</div>'+
    fullcontent = fullcontent+content+optns+'</div>';
    var fullcontent =  document.querySelector(".Quation-details");
    fullcontent.innerHTML = fullcontent;
    fullcontent.style.display="block";
    var closing = document.querySelectorAll(".close");
    for(var i=0;i<closing.length;i++){
        closing[i].addEventListener("click",closeButton);
    }
}
QuationDetails(1);
 function closeButton(){
    var fullcontent =  document.querySelector(".Quation-details");
    fullcontent.style.display="none";
    var fullcontent =  document.querySelector(".Quation-details");
    fullcontent.style.display="none";
    var fullcontent =  document.querySelector(".Quation-details");
    fullcontent.style.display="none";

 }