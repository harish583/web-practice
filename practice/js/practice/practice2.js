




// var li ='';
function htmlBinding(values){
    if(values){
    var ul = document.querySelector(".list-container");
    var li = document.createElement("li");
    li.setAttribute("class","list");
    // li.setAttribute("data-id",i);
    var div1 = document.createElement("div");
    var div11 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    div1.setAttribute("class","checkBox");
    div11.setAttribute("class","checkMark");
    div2.setAttribute("class","text");
    div3.setAttribute("class","cross");
    div3.addEventListener("click",forClose);
    div1.addEventListener("click",forcheckBox)
    div1.appendChild(div11);
    div2.innerHTML = values;
    div3.innerHTML = 'X';
    li.appendChild(div1);
    li.appendChild(div2);
    li.appendChild(div3);
    ul.appendChild(li);
    createNewStudent(li);
    }   
}

function keyPressed(event){
    keyCode = event.keyCode;
    if(keyCode == 13){
        var text = event.currentTarget.value;
        
        event.currentTarget.value = ''
        htmlBinding(text);;
    }
}
function allSelect(event){
    var x = event.currentTarget.classList;
    var checkBox = document.querySelectorAll(".checkBox");
    if(!(x.contains("checked"))){
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
    var checkBox = document.querySelectorAll(".checkBox");
    for(i=0;i<checkBox.length-1;i++){
        if(!(checkBox[i+1].classList.contains("checked"))){
            checkBox[0].classList.remove("checked");
            return;
        }
        // else checkBox[0].classList.add("checked");
        
     }
     checkBox[0].classList.add("checked");
}

function forcheckBox(event){
    var forChecked = event.target.classList;
    if(forChecked.contains("checked")){
        forChecked.remove("checked");

    var checkBox = document.querySelector(".checkBox");
    checkBox.classList.remove("checked");

    }
    else forChecked.add("checked");

    var checkBox = document.querySelectorAll(".checkBox");
    for(i=0;i<checkBox.length-1;i++){
        if(!(checkBox[i+1].classList.contains("checked"))){
            checkBox[0].classList.remove("checked");
            return;
        }
        // else checkBox[0].classList.add("checked");
        
     }
     checkBox[0].classList.add("checked");
     
}

var inputtext = document.querySelector(".inputtext");
inputtext.addEventListener("keypress",keyPressed);
htmlBinding();
// function changeCheckState(){
// var checkBox = document.querySelectorAll(".checkBox");
// for(i=0;i<checkBox.length;i++){
// checkBox[i].addEventListener("click",forcheckBox);
// }
// //}
// // function changeCrossState(){

// var cross = document.querySelectorAll(".cross");
// for(i=0;i<cross.length;i++){

// cross[i].addEventListener("click",forClose);
// }
//}

var ulSelect = document.querySelector(".ulSelect");
ulSelect.addEventListener("click",allSelect);