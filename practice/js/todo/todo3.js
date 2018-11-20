function listCreate(value){
    var liList = document.getElementById('li-list');
    var li = document.createElement('li');
    var span1 = document.createElement('span');
    var span2 = document.createElement('span');
    var span3 = document.createElement('span');
    liList.appendChild(li);
    li.appendChild(span1);
    li.appendChild(span2);
    li.appendChild(span3);
    li.setAttribute('class','li-elements');
    li.setAttribute('onclick','liList(event)')
    span1.setAttribute('class','check');
    span3.setAttribute('class','close');
    span3.setAttribute('onclick','close(event)');
    span1.textContent = '<span class="checked"></span>';
    span2.textContent = value ;
}
function enter(value){
    var keycode = value.keycode;
    if(keycode == 13){
        var text = document.getElementsByClassName('text-bar');
        console.log(text.value);
    }
    

}