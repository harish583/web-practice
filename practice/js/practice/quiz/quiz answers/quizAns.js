// var answers = [
//     {
//         id: 'question1',
//         answer: '0'
//     }
// ]

var answers = [0, 3, 1];

var quiz = [
    {
        id: 'question1',
        questions: 'question1',
        options: [
            'abc defg hijkl mnop qrst uvwx yz abc defg hijkl mnop qrst uvwx yz abc defg hijkl mnop qrst uvwx yz abc defg hijkl mnop qrst uvwx yz abc defg hijkl mnop qrst uvwx yz abc defg hijkl mnop qrst uvwx yz',
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
];


var html ='';
var html2 ='';
var html3 ='';
var html4 ='';
var html6 ='';
var final ='';
var id =0;
var quation;
var activeQuation = 0;
function rendering(quiz,id){
     quation = document.querySelectorAll(".quation");
    for(var i = 0;i<quiz.length;i++){
        html4 = '<div class="quation">'+
        '<h3>'+parseInt(i+1)+'.'+quiz[i].questions+'?</h3>';
        var html5 ='';
        for(var x =0;x<quiz[i].options.length;x++){
            html5 = html5+'<div class="xyz"><label> <input type="radio" name= "'+i+'" class="Q'+i+'">'+quiz[i].options[x]+' </label></div>';
        }
        html6 = '<div>'+parseInt(i+1)+'/'+quiz.length+'</div>';
        final = final+html4 + html5 +html6+'</div>' ;
        html6 =
        '<button class="forNextQuation">Next</button>';
        // if(i==quiz.length-1){
        //     html='<h1>Are you wanted to submit the answers?';}
    }
    // html6 =
    // '<button class="forNextQuation">Next</button>';
    
    var holder = document.querySelector(".all-quations");
    holder.innerHTML = final+html6+html;
    if(i==quiz.length){
        var last = document.querySelector(".forNextQuation");
        last.textContent = 'Submit';
    }
    var next = document.querySelector(".forNextQuation");
    next.addEventListener("click",function(){
        if(activeQuation==quiz.length-1){
            collectingSelectedValues();
            
        }
        if(activeQuation<quiz.length-1){
            var id = activeQuation + 1;
            forNextQuation(id);
            activeQuation = id;
        }
        
        if(activeQuation==quiz.length-1){
            var id = activeQuation;
            forNextQuation(id);
        }
        
            
    });
    
}


function forNextQuation(id){
    var nextQuary = document.querySelector(".quation");
    nextQuary.style.marginLeft = -100*id+'%';
    // if(id==quiz.length-1){
    //     collectingSelectedValues();
    // }
    
}
function collectingSelectedValues(){
    var selectedOptions = [-1, -1, -1];
    for(var a=0;a<=quiz.length;a++){
        var options = document.querySelectorAll(".Q"+a);
        for(var x = 0 ;x<options.length;x++){
            if(options[x].checked){
                checkedValue = options[x].value;
                selectedOptions.push(x);
            
            }
            // else selectedOptions.push(-1);
        }
        if (selectedOptions[x] === -1) {
            alert('Please answer all questions');
            return;
        }
    }
    showingAnswers(selectedOptions);
    alert(selectedOptions);
}
var showingAnswer1='';
var finale='';
var finle ='';
var html7 ='';
function showingAnswers(selectedOptions){
    showingAnswer1 = '<h1>CORRECT ANSWERS:<mark><span class="count"></span></mark></h1>'+
    '<h1>Quations and Answers</h1>'+
    '<div class="popup"></div>';
    '<div class="all-quations-answers">';
    for(var i = 0;i<quiz.length;i++){
        showingAnswer2= '<div class="quations">'+
        '<h3>'+parseInt(i+1)+'.'+quiz[i].questions+'?</h3>';
        var xml = '';
        for(var x =0;x<quiz[i].options.length;x++){
            xml = xml+'<span class="xyz"><label> <input type="radio" class="Option'+i+'" name= "Q'+i+'" >'+quiz[i].options[x]+'</label></span><br>';
        }
        finale = finale+showingAnswer2+xml+'</div>'+
        '<h1 class="abc correctAnswers'+i+'"></h1><hr>';
                   
    }
    var finle = document.querySelector(".all-quations-answers-holder")
    finle.innerHTML = showingAnswer1+finale;
    finle.style.display="block";
    var correctValue = 0;
    for(var i = 0;i<quiz.length;i++){
        allOptions = document.querySelectorAll(".Option"+i);
        allOptions[selectedOptions[i]].checked = true;
        allOptions[selectedOptions[i]].parentNode.parentNode.setAttribute("class","worngOption");
        allOptions[answers[i]].parentNode.parentNode.setAttribute("class","correctOption");
        
        if(selectedOptions[i]==answers[i]){
            correctValue = correctValue+1;
        }
        var count = document.querySelector(".count");
        count.innerHTML = correctValue;
        var correct = '';
        if(selectedOptions[i]==answers[i]){
            correct = "correct";
        }
        else correct = "worng";
        var correctcount = document.querySelector(".correctAnswers"+i);
    correctcount.innerHTML = correct; 
    }
    
    
}
rendering(quiz,id);



