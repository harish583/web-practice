function inputField(event){
    console.log("enter to fun");
    var keyCode = event.keyCode;
    console.log("keycode");
    if(keyCode == 13){
        console.log("enter to if condition");
        var input = event.target.value;
        alert("hello");
        event.target.value = '';
        liCreation(input);
    } 
}
function liCreation(input){
    console.log("enter to line creation");
    var ulValue = document.getElementById("texted-container");
    var li =document.createElement('li');
    var span1 =document.createElement('span');
    var span2 =document.createElement('span');
    var span3 =document.createElement('span');
    li.setAttribute("class","texted-list")
    span1.setAttribute("class","checkbox");
    span1.innerHTML = '<span class="checkmark"></span>';
    li.appendChild(span1);
    span2.innerHTML = input ;
    li.appendChild(span2);
    span3.setAttribute("class","cross");
    span3.innerHTML = '<img src="./x-transparent-checkmark.png" alt="cross" >';
    li.appendChild(span3);
    console.log("before ul to li");
    ulValue.appendChild(li);
    console.log("after ul to li");

}