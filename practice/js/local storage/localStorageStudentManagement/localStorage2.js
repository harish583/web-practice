
var Employees;
function renderingHtml(){
    var ulOfList = document.querySelector(".Students-wraper");
    var htmlForHead = '<li class="Students-heading-wraper">'+
        '<span class="students-heading-text">profile</span>'+
        '<span class="students-heading-text">first-name</span>'+
        '<span class="students-heading-text">last-name</span>'+
        '<span class="students-heading-text">Email</span>'+
        '<span class="students-heading-text">phone number</span>'+
    '</li>'
    
    var htmlStudentList = '';
    for(var i =0;i<Employees.length;i++){
        var htmlStudentList = htmlStudentList +'<li class="student-info" data-id ="'+Employees[i].id+'">'+
        '<div class="inline profile">'+ Employees[i].firstName.charAt(0)+'</div>'+
        '<div class="inline">'+ Employees[i].firstName+'</div>'+
        '<div class="inline">'+ Employees[i].lastName+'</div>'+
        '<div class="inline">'+ Employees[i].email+'</div>'+
        '<div class="inline">'+ Employees[i].phoneNumber+'</div>'+
        '<div class="inline View-details" data-id ="'+Employees[i].id+'">view details'+i+'</div>'+
        '<div class="inline Edit-button" data-id ="'+Employees[i].id+'">edit'+i+'</div>'+
        '<div class="inline Delete-button" data-id ="'+Employees[i].id+'">delete'+i+'</div>'+
    '</li>'
    
    
    }
    var popupContainer = '<div class="popup-background"></div>'+
                    '<div class="student-input-form">'+
                        '<div class="closing-mark">X</div>'+'<div class="insertContent"></div>'+
                        '</div>';
    //popupContentInserted();
    ulOfList.innerHTML = htmlForHead + htmlStudentList + popupContainer;
    
}
//var content = '';
function popupContentInserted(){
    var popupContainer = '<div class="popup-background"></div>'+
                    '<div class="student-input-form">'+
                        '<div class="closing-mark">X</div>'+'<div class="insertContent"></div>'+
                        '</div>';
    // + popupContainer;
    //return popupContainer;
}

function crossMark(){
    var popup = document.querySelector(".popup-background");
    var contentBlock = document.querySelector(".student-input-form");
    popup.style.display = "none";
    contentBlock.style.display = "none";
}

function AddStudentButtonClicked(){
    //popupContentInserted();
    var popup = document.querySelector(".popup-background");
    var contentBlock = document.querySelector(".student-input-form");
    popup.style.display = "block";
    contentBlock.style.display = "block";
    addStudent();

}
 
function addStudent(){
    var content ='';
    content = '<div class="form-details">'+
        '<h1>fill the student info.....</h1>'+
        '<div class="input-header">first-name :<input type="text" class="firstName-textField"></div>'+
        '<div class="input-header">last-name: <input type="text" class="lastName-textField"></div>'+
        '<div class="input-header">Email: <input type="email" class="email-textField"></div>'+
        '<div class="input-header">phone-number: <input type="number" class="phoneNumber-textField"></div>'+
        '<div class="submit-button">SUBMIT</div>'+
    '</div>'
    //popupContentInserted(content);
    document.querySelector(".insertContent").innerHTML = content;
    var submitDetails = document.querySelector(".submit-button");
    submitDetails.addEventListener("click",dataInsert);
}

function dataInsert(){
    var fName = document.querySelector(".firstName-textField");
    firstName = fName.value;
    var lName = document.querySelector(".lastName-textField");
    lastName = lName.value;
    var email = document.querySelector(".email-textField");
    email = email.value;
    var phoneNumber = document.querySelector(".phoneNumber-textField");
    phoneNumber = phoneNumber.value;
    var Employees ={
        firstName: firstName,
        lastName:lastName,
        email:email,
        phoneNumber:phoneNumber,
        id:Date.now()
    }
    newStudent(Employees);
    renderingHtml();
    crossMark();
}

function viewDetails(event){
    var i = event.currentTarget.dataset.id ;
   // var i = document.querySelector(".View-details").dataset.id;
    for(var x = 0;x<Employees.length;x++){

        console.log("id:"+i);
        console.log("Empid:"+Employees[x].id);
        if(i == Employees[x].id){
            i = x; 
        
            var content =
            // '<div class="view-details-wraper" data-id="'+Date.now()+'">'+
            //     '<div class="view-details-container">'+
            //         '<div class="closing-mark-view-details" data-id="'+Date.now()+'">X</div>'+
                    '<div class="header">FULL INFORMATION ABOUT STUDENT</div>'+
                    '<div class="lists"><span class="headers">first-name:</span><span>'+Employees[i].firstName +'</span></div>'+
                    '<div class="lists"><span class="headers">last-name:</span><span>'+Employees[i].lastName +'</span></div>'+
                    '<div class="lists"><span class="headers">Email:</span><span>'+Employees[i].email +'</span></div>'+
                    '<div class="lists"><span class="headers">phone-number:</span><span>'+Employees[i].phoneNumber +'</span></div>'+
                '</div>'+
            '</div>';
            document.querySelector(".insertContent").innerHTML = content;
            var popup = document.querySelector(".popup-background");
            var contentBlock = document.querySelector(".student-input-form");
            popup.style.display = "block";
            contentBlock.style.display = "block";
            //addStudent();
        }
    }
}   

function editDetails(event){
    var i = event.currentTarget.dataset.id ;
    for(var x = 0;x<Employees.length;x++){
    if(i == Employees[x].id){
        i = x; 
    
        var content =
        // '<div class="edit-details-wraper" data-id="'+Date.now()+'">'+
        //     '<div class="edit-details-container">'+
        //         '<div class="close-edit-data">X</div>'+
                '<div class="header">EDIT THE INFORMATION</div>'+
                '<div class="lists">first-name :<input type="text" class="firstName-editField" value="'+ Employees[i].firstName+'"></div>'+
                '<div class="lists">last-name: <input type="text" class="lastName-editField"  value="'+ Employees[i].lastName+'"></div>'+
                '<div class="lists">Email: <input type="email" class="email-editField"  value="'+ Employees[i].Email+'"></div>'+
                '<div class="lists">phone-number: <input type="number" class="phoneNumber-editField"  value="'+ Employees[i].phoneNumber+'"></div>'+
                '<div class="edit-submit-button" data-id="'+Employees[i].id+'">SUBMIT</div>'+
            '</div>'+
        '</div>';
        document.querySelector(".insertContent").innerHTML = content;
        var popup = document.querySelector(".popup-background");
        var contentBlock = document.querySelector(".student-input-form");
        popup.style.display = "block";
        contentBlock.style.display = "block";
        //for(var i = 0;i<Employees.length;i++){
            var EditSubmit = document.querySelector(".edit-submit-button");
            EditSubmit.addEventListener("click",EditSubmitCalling);
       // }
    }
    }
}

// function deleteStudentInfo(){

// }
    


function collectOldData(){
    var data = localStorage.getItem("Employees");
    if(!data){
        alert("form is empty");
        Employees = [];
    }
    else Employees = JSON.parse(data)
}

function newStudent(Employee){
    Employees.push(Employee);
    insertData();
}

function insertData(){
    localStorage.setItem("Employees",JSON.stringify(Employees));
}

function EditSubmitCalling(event){
    var i = event.currentTarget.dataset.id ;
    for(var x = 0;x<Employees.length;x++){
    if(i == Employees[x].id){
        i = x; 
    var FirstName = document.querySelectorAll(".firstName-editField");
    Employees[i].firstName = FirstName.value;
    
    var LastName = document.querySelectorAll(".lastName-editField");
    Employees[i].lastName = LastName.value;
    var email = document.querySelectorAll(".email-editField");
    Employees[i].Email = email.value;
    var PhoneNumber = document.querySelectorAll(".phoneNumber-editField");
    Employees[i].phoneNumber = PhoneNumber.value;
    insertData();
    //renderingHtml();
    crossMark();
    }
}
}
// function viewDetailsClicked(){
//     alert("welcome to js");
//     var forViewDetails = document.querySelectorAll(".View-details");
//     forViewDetails.addEventListener("click",viewDetails);

// }

function binding(){
    popupContentInserted();
    var addButton = document.querySelector(".Add-students");
    addButton.addEventListener("click",AddStudentButtonClicked);
    var popupclicked = document.querySelector(".popup-background");
    popupclicked.addEventListener("click",crossMark);
    var closeButton = document.querySelector(".closing-mark");
    closeButton.addEventListener("click",crossMark);
    for(var i = 0;i<Employees.length;i++){
        var forViewDetails = document.querySelectorAll(".View-details");
        forViewDetails[i].addEventListener("click",viewDetails);
    }
    for(var i = 0;i<Employees.length;i++){
        var forEditDetails = document.querySelectorAll(".Edit-button");
        forEditDetails[i].addEventListener("click",editDetails);
    }
    // for(var i = 0;i<Employees.length;i++){
    //     var EditSubmit = document.querySelectorAll(".edit-submit-button");
    //     EditSubmit[i].addEventListener("click",EditSubmitCalling);
    // }
}
function AllFunctions(){
collectOldData();
renderingHtml();
//popupContentInserted();
//addStudent();
binding();
//viewDetailsClicked();
}
AllFunctions();