
var students =[{
    firstName:"harish",
    lastName:"kyatham",
    email:"kyat",
    phoneNumber:12344
},{
    firstName:"harish",
    lastName:"kyatham",
    email:"kyat",
    phoneNumber:12344

}]

function renderingHTML(){   
   var content = 
    '<div>'+
        '<div class="header">Inforamtion</div>'+
        '<div class="input-boxes">'+
        '<input class="first-Name" type="text" placeholder="first Name">'+
        '<input class="last-Name" type="text" placeholder="last Name">'+
        '<input class="Email" type="email" placeholder="Email">'+
        '<input class="phone-number" type="number" placeholder="phone number">'+
        '<span class="Add-student">Add student</span>'+
        '</div>'+
    '</div>'+
    '<div class="list">'+
        // '<span class="sno">S.No</span>'+
        '<span class="list-headers">First-Name</span>'+
        '<span class="list-headers">Last-Name</span>'+
        '<span class="list-headers">Email</span>'+
        '<span class="list-headers">Phone-Number</span>'+
    '</div>';
    var header = '';
    for(var i = 0;i<students.length;i++){
    header= header+'<div class="input-boxes">'+
        // '<span class="SNo">'+i+'</span'+
        '<input class="changable" type="text" placeholder="first Name" value="'+students[i].firstName+'" disabled id="'+i+'">'+
        '<input class="changable" type="text" placeholder="last Name"  value="'+students[i].lastName+'" disabled id="'+i+'">'+
        '<input class="changable" type="email" placeholder="Email" value="'+students[i].email+'" disabled id="'+i+'>'+
        '<input class="changable" type="number" placeholder="phone number" value="'+students[i].phoneNumber+'" disabled id="'+i+'>'+
        '<span class="Edit" id="'+i+'>edit</span>'+
        '<span class="Delete" id="'+i+'>Delete</span>'+
    '</div>';
    }

    document.querySelector(".head").innerHTML = content + header;
}


function collectOldData(){
    var data = localStorage.getItem("students");
    if(!data){
        alert("form is empty");
        students = [];
    }
    else students = JSON.parse(data)
}

function newStudent(student){
    students.push(student);
    insertData();
}

function insertData(){
    localStorage.setItem("students",JSON.stringify(students));
}

function AddbuttonClicked(){
    var fname = document.querySelector(".first-Name");
    var lname = document.querySelector(".last-Name");
    var email = document.querySelector(".Email");
    var phnum = document.querySelector(".phone-number");
    if((fname.value&&lname.value&&email.value&&phnum.value)){
    var students={
        firstName:fname.value,
        lastName:lname.value,
        email:email.value,
        phoneNumber:phnum.value
    }
    
    newStudent(students);
    renderingHTML();
    }
    else
    alert("enter all the fields");
}

function forAddButton(){
    var button = document.querySelector(".Add-student");
    button.addEventListener("click",AddbuttonClicked);
}
function EditButton(event){
    var i = event.currentTarget.dataset.id;

    var fname = document.querySelectorAll(".changable");
    var lname = document.querySelectorAll(".changable");
    var email = document.querySelectorAll(".changable");
    var phnum = document.querySelectorAll(".changable");
    // var fname = document.querySelector(".first-Name");
    // var lname = document.querySelector(".last-Name");
    // var email = document.querySelector(".Email");
    // var phnum = document.querySelector(".phone-number");
    fname[i].disabled = false;
    lname[i].disabled = false;
    email[i].disabled = false;
    phnum[i].disabled = false;
}
function forEditButton(){
    for(var i=0;i<students.length;i++){
    var edit = document.querySelectorAll(".Edit");
    edit[i].addEventListener("click",EditButton);
    }
}




collectOldData();
renderingHTML();
forAddButton();
forEditButton();