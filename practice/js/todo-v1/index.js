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
};

function inputChange(event) {
    var keyCode = event.keyCode;
    if (keyCode == 13) {
        var value = event.target.value;
        event.target.value = '';
        appendTodo(value);
    }
    
}

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
    li.setAttribute('onclick', "todoClick(event)");
    span3.setAttribute('onclick', "todoDeleteClick(event)");
    todoList.appendChild(li);
}

function todoClick(event) {
    console.log('todoClick...', event);
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

