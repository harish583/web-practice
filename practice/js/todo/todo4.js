function allCheckBoxs(event){
    console.log('clicked input');
    var classes = event.currentTarget.classList;
    if (classes.contains("select")){
        classes.remove("select");
        console.log('clicked if input');
        var listContent = document.getElementById("li-content");
        for(var i = 0; i < listContent.length ; i++){
            listContent[i].classList.remove("completed");
            console.log('clicked for foinput');
        }
    }
    else{
        classes.add("select");
        var listContent = document.getElementByIdd("li-content");
        for(var i = 0; i < listContent.length ; i++){
            listContent[i].classList.add("completed");
        }
    }

}
function keyPressed(event){
    var keyCode = event.keyCode;
    if(keyCode == 13){
        var value = event.target.value;
        event.target.value = "";
        createLI(value);
    }

}
function createLI(value){
    var liList = document.getElementById('li-list');
    var li = document.createElement('li');
    var span1 = document.createElement('span');
    var span2 = document.createElement('span');
    var span3 = document.createElement('span');
    li.setAttribute('class','li-content');
    li.setAttribute('onclick','checkmark(event)')
    li.appendChild(span1);
    li.appendChild(span2);
    li.appendChild(span3);
    
    span1.setAttribute('class','check-box');
    span1.innerHTML = '<span class="check-mark"></span>';
    span2.innerHTML = value;
    span3.textContent = 'X';
    span3.setAttribute('class','cross');
    span3.setAttribute('onclick','closeid(event)');
    liList.appendChild(li);

}
function checkmark(event){
    var liList = event.currentTarget.classList;
    if( liList.contains('completed')){
        liList.remove('completed');
    }
    else{
        liList.add('completed');
    
    }
}
function closeid(event){
    console.log('remove enter');
    var val = event.currentTarget;
    var li = val.parentNode;
    console.log('remove');
    li.remove();

}