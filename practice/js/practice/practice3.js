
function collecting(){
    var data = localStorage.getItem("list");
    if(!(data)){
        list = [];
        alert("list is empty");
    }
    else JSON.parse("list");
}
function pushing(newlist){
    list.push(newlist);
    localStorage.setItem("list",JSON.stringify(list));
}
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
    pushing(li);
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


collecting();
