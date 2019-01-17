// var answers = [
//     {
//         id: 'question1',
//         answer: '0'
//     }
// ]

var answers = [0, 3, 1,2,3,2,1,2,0];

// var quiz = [
//     {
//         id: 'question1',
//         questions: 'question1',
//         options: [
//             'abc defg hijkl mnop qrst uvwx yz abc defg hijkl mnop qrst uvwx yz abc defg hijkl mnop qrst uvwx yz abc defg hijkl mnop qrst uvwx yz abc defg hijkl mnop qrst uvwx yz abc defg hijkl mnop qrst uvwx yz',
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
//     },
//     {
//         id: 'question1',
//         questions: 'question1',
//         options: [
//             'abc defg hijkl mnop qrst uvwx yz abc defg hijkl mnop qrst uvwx yz abc defg hijkl mnop qrst uvwx yz abc defg hijkl mnop qrst uvwx yz abc defg hijkl mnop qrst uvwx yz abc defg hijkl mnop qrst uvwx yz',
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
//     },
//     {
//         id: 'question1',
//         questions: 'question1',
//         options: [
//             'abc defg hijkl mnop qrst uvwx yz abc defg hijkl mnop qrst uvwx yz abc defg hijkl mnop qrst uvwx yz abc defg hijkl mnop qrst uvwx yz abc defg hijkl mnop qrst uvwx yz abc defg hijkl mnop qrst uvwx yz',
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
// ];

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        //var a ='';
      if (this.readyState == 4 && this.status == 200) {
        //document.getElementById("demo").innerHTML =
         a =this.responseText;
        a=JSON.parse(a);
        var quats=[];
        var Alloption=[];
        for(var i =0;i<a.length;i++){
             quats.push(a[i].questions);
             Alloption.push(a[i].options);
        }
        quats.push(Alloption);
        rendering(quats,Alloption);
      }
    };
    xhttp.open("GET", "http://localhost:3000/questions", true);
    xhttp.send();
  }
loadDoc();
var html ='';
var html2 ='';
var html3 ='';
var html4 ='';
var html6 ='';
var final ='';
var id =0;
var quation;
var activeQuation = 0;
function rendering(quiz){
     quation = document.querySelectorAll(".quation");
    for(var i = 0;i<quiz.length;i++){
        html4 = '<div class="quation">'+
        '<h3>'+parseInt(i+1)+'.'+quiz[i].questions+'?</h3>';
        var html5 ='';
        for(var x =0;x<quiz[i].options.length;x++){
            html5 = html5+'<div class="xyz"><label> <input type="radio" name= "'+i+'" class="Q'+i+'"><span class="optionsSort">'+quiz[i].options[x]+'</span> </label></div>';
        }
        html6 = '<div>'+parseInt(i+1)+'/'+quiz.length+'</div>';
        final = final+html4 + html5 +html6+'</div>' ;
        html6 ='<button class="forPrevQuation"><< Prev</button>'+
        '<button class="forNextQuation">Next >></button>'+
        '<button class="submiting">Submit</button>';
        // if(i==quiz.length-1){
        //     html='<h1>Are you wanted to submit the answers?';}
    }
    // html6 =
    // '<button class="forNextQuation">Next</button>';
    
    var holder = document.querySelector(".all-quations");
    holder.innerHTML = final+html6+html;
    // if(i==quiz.length){
    //     var last = document.querySelector(".forNextQuation");
    //     last.textContent = 'Submit';
    // }
    var next = document.querySelector(".forNextQuation");
    next.addEventListener("click",function(){
        if(activeQuation==quiz.length-1){
            //collectingSelectedValues();
            
        }
        if(activeQuation<quiz.length-1){
            var id = activeQuation + 1;
            forNextQuation(id);
            activeQuation = id;
        }
        
        if(activeQuation==quiz.length-1){
            var id = activeQuation;
            //forNextQuation(id);
        }
        
            
    });
    var prev = document.querySelector(".forPrevQuation");
    prev.addEventListener("click",function(){
        // if(activeQuation==quiz.length-1){
        //     collectingSelectedValues();
            
        // }
        if(activeQuation>0){
            var id = activeQuation - 1;
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
    if(id>0){
        var prv = document.querySelector(".forPrevQuation");
            prv.style.display ="block";
    }
    if(id==quiz.length-1){
        // collectingSelectedValues();

        // var prev = document.querySelector(".forPrevQuation");
        // prev.style.display = "none";
        var next = document.querySelector(".forNextQuation");
            next.style.display ="none";
        var submitting = document.querySelector(".submiting");
        submitting.style.display ="block";
        submitting.addEventListener("click",function(){
            collectingSelectedValues();
        });

    }
    
}
function collectingSelectedValues(){
    var selectedOptions = [false, false, false,false, false, false,false, false, false];
    for(var a=0;a<=quiz.length;a++){
        var options = document.querySelectorAll(".Q"+a);
        for(var x = 0 ;x<options.length;x++){
            if(!options[x].checked){
                options[x].checked =false; 
            }
            else {
            checkedValue = options[x].value;
                selectedOptions[a]= x;
            }
        }
        
    }
    for(var a=0;a<=quiz.length;a++){
        if (selectedOptions[a] === false) {
            alert('Please answer all questions');
            var nextQuary = document.querySelector(".quation");
            nextQuary.style.marginLeft = -100*a-1+'%';
            return;
        }
           
        
        
    }
    showingAnswers(selectedOptions);
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
            xml = xml+'<div class="xyz"><label> <input type="radio" class="Option'+i+'" name= "Q'+i+'" ><span class="optionsSort">'+quiz[i].options[x]+'</span></label></div>';
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
//rendering(questions);



