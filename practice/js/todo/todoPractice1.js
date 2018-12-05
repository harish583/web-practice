function inputField(event){
    var keyCode = event.keyCode;
    if(keyCode == 13){
        var input = event.currentTarget.value;
        console.log(input);
        liCreation(input);
        event.currentTarget.value = "";

    }
    
    
}
function liCreation(input){
    var ul = document.getElementById("texted-info");
    var li = document.createElement("li");
    var span1 = document.createElement("span");
    var span2 = document.createElement("span");
    var span3 = document.createElement("span");
    li.setAttribute("class","listed-info");
    span1.setAttribute("class","checkbox");
    span1.innerHTML = '<span class="checkmark"></span>';
    span2.innerHTML = input ;
    span3.setAttribute("class","cross");
    li.setAttribute("onclick","list(event)");
    span3.setAttribute("onclick","cross(event)")
    span3.innerHTML = '<img src="./x-transparent-checkmark.png" alt="cross">';
    li.appendChild(span1);
    li.appendChild(span2);
    li.appendChild(span3);
    ul.appendChild(li);
}

function cross(event){
    var span = event.currentTarget;
    var li = span.parentNode;
    li.remove();
}
function list(event){
    var li = event.currentTarget.classList;


//***************** 
//    var classesList = document.getElementsByClassName("listed-info").classList;

    if(li.contains("check")){
        li.remove("check");

//***************** 
 //       classesList.remove("check");
    }
    else{
        li.add("check");
    
    }
    
 }
// function checkAll(event){
//     var classes = event.currentTarget.classList;
//     if(classes.contains("check")){
//         classes.remove("check");
//         var list = document.getElementsByClassName("listed-info");
//         for(i = 0;i < list.length;i++){
//             list[i].classList.remove("check");
//         }
//     }
//     else {
//         classes.add("check");
//         var list = document.getElementsByClassName("listed-info");
//         for(i=0;i<list.length;i++){
//             list[i].classList.add("check");
//         }
//     }
// }
function checkAll(event){
    var classes = event.currentTarget.classList;
    if(classes.contains("check")){
        classes.remove("check");
        var list = document.getElementsByClassName("listed-info");
        for(i = 0;i < list.length;i++){
            list[i].classList.remove("check");
        }
    }
    else if(classes.contains("check")){
        var list =document.getElementsByClassName("listed-info");
        var classesList = document.getElementsByClassName("listed-info").classList;
       // var classList = event.getAttribute("data-uim");
        for(i=0;i<list.length;i++){
            if(!(classesList.contains("check"))){
        
        classes.remove("check");
            }
        }
    }
    else {
        classes.add("check");
        var list = document.getElementsByClassName("listed-info");
        for(i=0;i<list.length;i++){
            list[i].classList.add("check");
        }
    }
}















