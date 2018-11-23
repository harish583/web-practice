var html = "<div>Hii Dude...<button>popup</button></div>";

function headerCheckBoxChecked(event) {
    var classes = event.currentTarget.classList;
    if(classes.contains('checked')) {
        classes.remove('checked');
        var todos = document.getElementsByClassName('todo-item');
        for(var i = 0;i <todos.length; i++) {
            todos[i].classList.remove('completed');
        }
    } else {
        classes.add('checked');
        var todos = document.getElementsByClassName('todo-item');
        for(var i = 0;i <todos.length; i++) {
            todos[i].classList.add('completed');
        }
    }
}

document.getElementById('header-checkbox').addEventListener('click', headerCheckBoxChecked)

function inputChange(event) {
    var keyCode = event.keyCode;
    if (keyCode == 13) {
        var value = event.target.value;
        event.target.value = '';
        appendTodo(value);
    }
    
}

document.getElementById('todo-input').addEventListener('keypress', inputChange);

function appendTodo(value) {
    if(!value) {
        return;
    }
    var todoList = document.getElementById('todo-list');
    var li = document.createElement('li');
    var span1 = document.createElement('span');
    var span2 = document.createElement('span');
    var span3 = document.createElement('span');
    span1.setAttribute('class', 'checkbox');
    span1.innerHTML = '<span class="checkbox-tick"></span>';
    li.appendChild(span1);
    span2.innerHTML = value;
    li.appendChild(span2);
    span3.innerHTML = 'x';
    span3.setAttribute('class', 'delete');
    li.appendChild(span3);
    li.setAttribute('class', 'todo-item');
    li.addEventListener('click', todoClick);
    span3.addEventListener('click', todoDeleteClick);
    // li.setAttribute('onclick', "todoClick(event)");
    // span3.setAttribute('onclick', "todoDeleteClick(event)");
    todoList.appendChild(li);
}

function todoClick(event) {
    var classes = event.currentTarget.classList;
    if(classes.contains('completed')) {
        classes.remove('completed');
    } else {
        classes.add('completed');
    }
}



// function todoCheckClick(event) {
//     event.stopPropagation();
//     console.log('todoCheckClick...', event)   
// }

function todoDeleteClick(event) {
    var node = event.currentTarget;
    var li = node.parentNode;
    li.remove(); 
}

document.getElementById('dump').innerHTML = html;

// code starts here

//function{
//var div = document.createElement('div');
//var btn = document.createElement('button');
//div.appendChild(btn);
//div.value = 'hello......';
//btn.value = 'try once';
//btn.setAttribute('onclick','doOperations()');
//btn.setAttribute('class','btn');
//dump.appendChild(div);

//}
var buttons = document.getElementsByTagName("button");
function abc(){
    alert("welcome");
}

 buttons[0].addEventListener("click", abc);

// setTimeout(function() {
//     buttons[0].addEventListener('click', abc)
// }, 5000);

setTimeout(function() {
    buttons[0].removeEventListener('click', abc)
}, 5000);