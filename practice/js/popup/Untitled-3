var students = [];

function readStudentsFromStorage() {
    var data = localStorage.getItem('students');
    if (!data) {
        students = [];
    } else {
        students = JSON.parse(data);
    }
}

function writeStudentsFromStorage() {
    localStorage.setItem('students', JSON.stringify(students));
}


function renderStudentCount() {
    document.getElementById('count').textContent = students.length;
}
function createNewStudent(student) {
    students.push(student);
    writeStudentsFromStorage();
    renderStudentCount();   
}
function bindEvents() {
    document.querySelector('#submit').addEventListener('click', function() {
        var nameNode = document.querySelector('#name');
        var name = nameNode.value;
        if (name) {
            var stu = {
                name: name
            };
            createNewStudent(stu);
        } else {
            alert('Please ennter name');
        }
    });
}

readStudentsFromStorage();
bindEvents()
renderStudentCount();