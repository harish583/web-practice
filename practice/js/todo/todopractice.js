function checkedAll(event){
    console.log("enter to checkall");
    var classs =  event.currentTarget.classList;
    console.log("class lists");
    if(classs.contains('check')){
        classs.remove("check");
        var todo = document.getElementsByClassName("texted-list");
        for(i = 0 ; i< todo.length ;i++ ){
            console.log("for remove");
        todo[i].classList.remove('check');
        }
    }
    else{{
        classs.add("check");
        var todo = document.getElementsByClassName("texted-list");
        for(i = 0 ; i< todo.length ;i++ ){
            console.log("for add");
        todo[i].classList.add('check');
        }
    }
        
    }


}
function inputField(event){
  //  console.log("enter to fun");
    var keyCode = event.keyCode;
  //  console.log("keycode");
    if(keyCode == 13){
      //  console.log("enter to if condition");
        var input = event.target.value;
        
        event.target.value = '';
        liCreation(input);
    } 
}
function liCreation(input){
    if(input == "")return;
  //  console.log(input);
  //  console.log('enter to line creation');
    var ulValue = document.getElementById('texted-container');
    var li =document.createElement('li');
    var span1 =document.createElement('span');
    var span2 =document.createElement('span');
    var span3 =document.createElement('span');
    li.setAttribute('class','texted-list')
    span1.setAttribute('class','checkbox');
    
    span1.innerHTML = '<span class="checkmark"></span>';
    li.appendChild(span1);
    span2.innerHTML = input ;
    li.appendChild(span2);
    span3.setAttribute('class','cross');
    span3.setAttribute("onclick","cross(event)");
    span3.innerHTML = '<img src="./x-transparent-checkmark.png" alt="cross"> ' ;
    li.appendChild(span3);
    li.setAttribute("onclick","checked()")
  //  console.log('before ul to li');
    ulValue.appendChild(li);
  //  console.log('after ul to li');

}
function cross(event){
  //  console.log("enter to cross");
    var close = event.currentTarget;

  //  console.log("close created");
    var li = close.parentNode;
  //  console.log("li created");

    li.remove();

  //  console.log("li removed");
}
function checked(){
    var classes = event.currentTarget.classList;
    if(classes.contains('check')) {
        classes.remove('check');
    } else {
        classes.add('check');
    }
}
