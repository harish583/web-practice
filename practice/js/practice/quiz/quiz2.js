// for  input type range 
// function rendering(){
//     var holder = document.querySelector(".holder");
//     var html = '<span>ranging from : 0</span>'+
//     '<input class="input-range" type="range" min="0" max="100" value="90">'+
//     '<span>(</span><span class="demo"></span><span>)</span>'+
//     '<span>100</span>';
//     holder.innerHTML = html;
// }
// function ranging(){
//     var inputRange = document.querySelector(".input-range");
//     console.log(inputRange.value);
//     document.querySelector(".demo").innerHTML = inputRange.value;
// }
// rendering();
// var inputRange = document.querySelector(".input-range");
// inputRange.addEventListener("change",ranging);


 
// for questions
var html = '';
var options = '';
var quations = '';
var Qholders = '';
var next = '';
function quationsRendering(quations){
    
    var allQuations = document.querySelector(".all-quations");
    if(quations.length>0){
        html =  html +next+Qholders +'<div class="quation">'+
        '<h3>'+quations[0]+'</h3>';
        for(var a = 1;a<quations.length;a++){
         options = options +'<label> <input type="radio" name= "vha" ><span>'+quations[a]+'</span> <img src="x-transparent-checkmark.png" class="verify" ></label><br>';
        }
    
         next ='<span class="add-options">&nbsp; &nbsp;+ add options</span>'+
        '</div>'+
        '</div>';
    }
    var Qholders = '<div class="collecting-data">';
    // '<h2>Adding a quation</h2>';
    allQuations.innerHTML = Qholders;
    if(quations){
    allQuations.innerHTML =  html + options  ;
    }
    AddQuation();
    // rendering();
}
function AddQuation(){
    var holdingData = document.querySelector(".collecting-data");
    var html2 = '<div>ADDING A QUATION'+
    '<input class="text-field-quation" type="text" placeholder="quation">'+
    '<div class="input-holder"><input class="text-field-option" type="text" placeholder="option 1">'+
    '<input class="text-field-option" type="text" placeholder="option 2">'+
    '<input class="text-field-option" type="text" placeholder="option 3"></div>'+
    '<span class="add-options">&nbsp; &nbsp;+ add options</span>'+
    '<div class="submit-quation">Submit</div>'+
    '</div>';
    holdingData.innerHTML = html2;
    // rendering();
}
//adding option
function addingOption(){
    var options = document.querySelector(".input-holder");

    options.innerHTML = options.innerHTML+
    '<input class="text-field-option" type="text" placeholder="option">';
    var ids = document.querySelectorAll(".text-field-option");
    for(var i =0;i<ids.length;i++){
        ids[i].setAttribute("data-id",i);
        ids[i].setAttribute("placeholder","option "+parseInt(i+1));
    }
    //rendering();
}

function submitingQuations(){
    var lengthOptions = document.querySelectorAll(".text-field-option");
    var forQuation = document.querySelector(".text-field-quation");
    var options = [];
    if(forQuation.value){
    options.push(forQuation.value);
    }
    for(var i = 0;i<lengthOptions.length;i++){
        if(lengthOptions[i].value){
        option = lengthOptions[i].value;
        options.push(option);
        }
    }
    // var html3 = forQuation.value + options;
    quationsRendering(options);
    // rendering();
}


function rendering(){
quationsRendering('');
//AddQuation();
var addOption = document.querySelectorAll(".add-options");
for(var i = 0;i<addOption.length;i++){
    addOption[i].addEventListener("click",addingOption);
}

var submiting = document.querySelector(".submit-quation");
submiting.addEventListener("click",submitingQuations);
}
rendering();