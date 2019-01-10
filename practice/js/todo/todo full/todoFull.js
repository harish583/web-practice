 
 
 
function listCreating(){ 
    var lis = '';
 for(i=0;i<Text.length;i++){
 var lis = lis +'<div class="check-mark"></div>'+
 '</div>'+
 '<div class="name">harish</div>'+
 '<div class="cross-wraper"><img class="cross" src="../x-transparent-checkmark.png"></div>'
}

var uls = document.querySelector(".list-container");
uls.innerHTML = lis;
}
var submit = document.querySelector(".submit");
submit.addEventListener("click",listCreating);