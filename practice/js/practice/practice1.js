
var html ='';
function htmlBinding(values){
    var ul = document.querySelector(".list-container");

    var values = document.querySelector(".inputtext").value;
    if(values){
     html = html + '<li class="list" data-id="0">'+
    '<div class="checkBox">'+
        '<div class="checkMark"></div>'+
    '</div>'+
    '<div class="text">'+values+'</div>'+
    '<div class="cross">X</div>'+
'</li>';
        // changeCheckState();
        // changeCrossState();
ul.innerHTML = html;
    }
}
function keyPressed(event){
    keyCode = event.keyCode;
    if(keyCode == 13){
        var text = event.currentTarget.value;
        
        htmlBinding(text);
        event.currentTarget.value = '';
    }
}
function allSelect(event){
    var x = event.currentTarget.classList;
    var checkBox = document.querySelectorAll(".checkBox");
    if(x.contains("checked")){
        for(i=0;i<checkBox.length;i++){
        checkBox[i].classList.add("checked");
        }
    }
    else{
        for(i=0;i<checkBox.length;i++){
            checkBox[i].classList.remove("checked");
            }
    }
    
}

function forClose(event){
    var closing = event.currentTarget;
    closing.parentNode.remove();
}

function forcheckBox(event){
    var forChecked = event.currentTarget.classList;
    if(forChecked.contains("checked")){
        forChecked.remove("checked");

    }
    else forChecked.add("checked");
    // var checkBox = document.querySelectorAll(".checkBox");
    // for(i=0;i<checkBox.length;i++){
    // if(checkBox[i].classList.contains("checked")){
    // }
    // else{
    //     allSelect();
    // }
    //}
}

var inputtext = document.querySelector(".inputtext");
inputtext.addEventListener("keypress",keyPressed);
htmlBinding();
// function changeCheckState(){
var checkBox = document.querySelectorAll(".checkBox");
for(i=0;i<checkBox.length;i++){
checkBox[i].addEventListener("click",forcheckBox);
}
//}
// function changeCrossState(){

var cross = document.querySelectorAll(".cross");
for(i=0;i<cross.length;i++){

cross[i].addEventListener("click",forClose);
}
//}

var ulSelect = document.querySelector(".ulSelect");
ulSelect.addEventListener("click",allSelect);