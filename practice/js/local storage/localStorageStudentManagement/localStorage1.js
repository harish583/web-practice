
// students = [{
//     firstName:"harish",
//     lastName:"kyatham",
//     Email:"kyatham123@gmail.com",
//     phoneNumber:"1234567"
//     },{
//     firstName:"abcd",
//     lastName:"xyz",
//     Email:"k123@gmail.com",
//     phoneNumber:"4567"
//     },
//     {
//     firstName:"harish",
//     lastName:"kyatham",
//     Email:"kyatham123@gmail.com",
//     phoneNumber:"1234567"
//     },{
//     firstName:"abcd",
//     lastName:"xyz",
//     Email:"k123@gmail.com",
//     phoneNumber:"4567"
//     }
// ]
var students;
function htmlElementsBinding(){
    var mainHolder = document.querySelector(".student-info-container");
    var html = '<div>'+
    '<h1>STUDENTS INFORMATION</h1>'+
    '<span class="AddStudent">Add Student</span>'+
    '<table><tbody>'+
    '<tr class="student-list-info" data-id="'+i+'">'+
       '<th>profile</th>'+
        '<th>surname</th>'+
        '<th>name</th>'+
        '<th>emain</th>'+
        '<th>phone number</th>'+
        '<th></th>'+
        '<th></th>'+
        '<th></th>'+
    '</tr>';
    var singleRow = '';
    for(var i =0;i<students.length;i++){
    singleRow = singleRow +'<tr class="studentRow" data-id="'+i+'">'+
        '<td>'+students[i].firstName.charAt(0)+'</td>'+
        '<td>'+students[i].firstName+' '+i+'"</td>'+
        '<td>'+students[i].lastName+'</td>'+
        '<td>'+students[i].Email+'</td>'+
        '<td>'+students[i].phoneNumber+'</td>'+
        '<td class="View-details" data-id="'+i+'">view details</td>'+
        '<td class="Edit-button" data-id="'+i+'">edit</td>'+
        '<td class="Delete-button" data-id="'+i+'">delete</td>'+
    '</tr>'
    }
    html = html + singleRow;
    var studentInputPopup = 
    '</tbody></table>'+
    '</div>'+
    '<div class="student-input-wraper">'+
        '<div class="student-input-form">'+
            '<div class="closing-mark">X</div>'+
            '<h1>fill the student info.....</h1>'+
            '<div>first-name :<input type="text" class="firstName-textField"></div>'+
            '<div>last-name: <input type="text" class="lastName-textField"></div>'+
            '<div>Email: <input type="email" class="email-textField"></div>'+
            '<div>phone-number: <input type="number" class="phoneNumber-textField"></div>'+
            '<div class="submit-button">SUBMIT</div>'+
        '</div>'+
    '</div>';
    html = html + studentInputPopup;
    
    
    var viewDetailspopup = '';
    for(var i =0;i<students.length;i++){
        viewDetailspopup =viewDetailspopup + '<div class="view-details-wraper" data-id="'+i+'">'+
        '<div class="view-details-container">'+
            '<div class="closing-mark-view-details" data-id="'+i+'">X</div>'+
            '<div class="header">FULL INFORMATION ABOUT STUDENT</div>'+
            '<div class="lists"><span class="headers">first-name:</span><span>'+students[i].firstName +'</span></div>'+
            '<div class="lists"><span class="headers">last-name:</span><span>'+students[i].lastName +'</span></div>'+
            '<div class="lists"><span class="headers">Email:</span><span>'+students[i].Email +'</span></div>'+
            '<div class="lists"><span class="headers">phone-number:</span><span>'+students[i].phoneNumber +'</span></div>'+
        '</div>'+
    '</div>'
    }
     
    var editInfo = '';
    for(var i =0;i<students.length;i++){
        editInfo = editInfo + '<div class="edit-details-wraper" data-id="'+i+'">'+
        '<div class="edit-details-container">'+
            '<div class="close-edit-data">X</div>'+
            '<div>EDIT THE INFORMATION</div>'+
            '<div>first-name :<input type="text" class="firstName-editField" value="'+ students[i].firstName+'"></div>'+
            '<div>last-name: <input type="text" class="lastName-editField"  value="'+ students[i].lastName+'"></div>'+
            '<div>Email: <input type="email" class="email-editField"  value="'+ students[i].Email+'"></div>'+
            '<div>phone-number: <input type="number" class="phoneNumber-editField"  value="'+ students[i].phoneNumber+'"></div>'+
            '<div class="editinfo-submit-button">SUBMIT</div>'+
        '</div>'+
    '</div>'
    }
    html = html + viewDetailspopup + editInfo;





    mainHolder.innerHTML = html;
};

function addStudentPopupfunction(){

    var AddStudent = document.querySelector(".AddStudent");
    var addStudentPopup = document.querySelector(".student-input-wraper");
    AddStudent.addEventListener("click",function(){
        
        addStudentPopup.style.display = "block";
    });
    var closingPopup = document.querySelector(".closing-mark");
    closingPopup.addEventListener("click",function(){
        addStudentPopup.style.display = "none";
    });
}
function submitedData(){
    var firstName = document.querySelector(".firstName-textField");
    var lastName = document.querySelector(".lastName-textField");
    var Email = document.querySelector(".email-textField");
    var phoneNumber = document.querySelector(".phoneNumber-textField");
    var firstNameValue = firstName.value;
    var LastNameValue = lastName.value;
    var EmailValue = Email.value;
    var phoneNumberValue = phoneNumber.value;
    
    //student =[firstNameValue,LastNameValue,EmailValue,phoneNumberValue];
    if (firstNameValue && LastNameValue && EmailValue && phoneNumberValue) {
        var stu = {
            firstName: firstNameValue,
            lastName:LastNameValue,
            Email:EmailValue,
            phoneNumber:phoneNumberValue
        };
        createNewStudent(stu);
        
        htmlElementsBinding();

    } else {
        //alert('Please enter all fields');
    }
    var  popup = document.querySelector(".edit-details-wraper");
        popup.style.display = "none";
    
}


function viewDetailsClicked(event){
    var details = document.querySelectorAll(".view-details-wraper");
    //var viewDetails = document.querySelector(".View-details");
    var i = event.currentTarget.dataset.id;
    // alert("view clicked..");
    // viewDetails.addEventListener("click",function(){
        details[i].style.display = "block";
         
        var viewDetailsclosed = document.querySelectorAll(".closing-mark-view-details");
        for(var x = 0;x<students.length;x++){
            viewDetailsclosed[x].addEventListener("click",function(){
                details[i].style.display = "none"
            //closingViewdetails();
            })
        }
    
}

function whenSubmitClick(){
    submitedData();
}
function readStudentsFromStorage() {
    var data = localStorage.getItem('students');
    if (!data) {
        students = [];
    } else {
        students = JSON.parse(data);
    }
}

function writeStudentsToStorage() {
    localStorage.setItem('students', JSON.stringify(students));
}

function createNewStudent(student) {
    students.push(student);
    writeStudentsToStorage();  
}
// function removeStudent(student){
    
// }

function forSubmitClicking(){
    var submitButton = document.querySelector(".submit-button");
    submitButton.addEventListener("click",whenSubmitClick);
    var details = document.querySelectorAll(".View-details");
    for(var i = 0;i< students.length;i++){
        details[i].addEventListener("click",viewDetailsClicked);
    }
}

function deleteStudentInfo(event){
    var deleteStudent = document.querySelectorAll(".studentRow");
    var value = event.target.dataset.id;
    
    deleteStudent[value].remove();
    students.splice(value,1);
    // var student = students[value].remove();
    //removeStudent(students);
    htmlElementsBinding();
    writeStudentsToStorage();
    //htmlElementsBinding();
    //update the data
}

function fordeleteStudent(){
    for(var i = 0;i<students.length;i++){
        var deleting = document.querySelectorAll(".Delete-button");
        deleting[i].addEventListener("click",deleteStudentInfo);
    }
    //htmlElementsBinding();
    //deleteStudentInfo();
}

function afterEditingSubmitdata(){
    var firstName = document.querySelector(".firstName-editField");
    var lastName = document.querySelector(".lastName-editField");
    var Email = document.querySelector(".email-editField");
    var phoneNumber = document.querySelector(".phoneNumber-editField");
    var firstNameValue = firstName.value;
    var LastNameValue = lastName.value;
    var EmailValue = Email.value;
    var phoneNumberValue = phoneNumber.value;
    
    //student =[firstNameValue,LastNameValue,EmailValue,phoneNumberValue];
    if (firstNameValue && LastNameValue && EmailValue && phoneNumberValue) {
        var stu = {
            firstName: firstNameValue,
            lastName:LastNameValue,
            Email:EmailValue,
            phoneNumber:phoneNumberValue
        };
        //createNewStudent(stu);
        students.replace(stu);
        htmlElementsBinding();

    } else {
        //alert('Please enter all fields');
    }
    var  popup = document.querySelector(".student-input-wraper");
        popup.style.display = "none";
}
 function closeEditingWraper(){
    var popupOfeditSubmit = document.querySelector(".edit-details-wraper");
    popupOfeditSubmit.style.display = "none"; 
 }

function editSubmitbutton(){
    // afterEditingValues.
    //submitedData();
    afterEditingSubmitdata();
    //writeStudentsToStorage();
    var EditPageClose = document.querySelector(".close-edit-data");
    EditPageClose.addEventListener("click",closeEditingWraper)
    var popupOfeditSubmit = document.querySelector(".edit-details-wraper");
    popupOfeditSubmit.style.display = "none";

} 
function bindingSubmitEditing(){
    for(var x = 0;x<students.length;x++){
    var afterEditingValues = document.querySelectorAll(".editinfo-submit-button");
    afterEditingValues[x].addEventListener("click",editSubmitbutton);
    }
}
function editButtonClicked(event){
   // alert("edit details");

    var editClick = document.querySelectorAll(".edit-details-wraper");
    var i = event.currentTarget.dataset.id;
     editClick[i].style.display = "block";
     bindingSubmitEditing();
}

function editinfo(){
    for(var x = 0;x<students.length;x++){
        var editClick = document.querySelectorAll(".Edit-button");
    //    var x = event.currentTarget.dataset.id;
        editClick[x].addEventListener("click",editButtonClicked);
    }
}
function AllFunctions(){
readStudentsFromStorage();
htmlElementsBinding();
addStudentPopupfunction();
forSubmitClicking();
editinfo();
fordeleteStudent();

}
AllFunctions();

//whenSubmitClick();

