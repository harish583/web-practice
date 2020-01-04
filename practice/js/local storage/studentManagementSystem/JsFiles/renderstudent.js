var students = [];
var newStudent = {};
var adding = 1;
var index = 0;
fName=(e)=>{
    newStudent.fname = e.target.value;
}
lName=(e)=>{
    newStudent.lname = e.target.value;   
}
EMail=(e)=>{
    newStudent.email = e.target.value;
}
phoneNumber=(e)=>{
    newStudent.phonenumber = e.target.value;    
}
addingStudentPopup =()=>{
    var addPopup = `
        <input type="text" placeholder="First Name" class="f-name">
        <input type="text" placeholder="Last Name" class="l-name">
        <input type="text" placeholder="Email" class="Email">
        <input type="text" placeholder="PhoneNumber" class="phone-number">
        <button class="submit-button">Add</button>
    `;
    document.getElementsByClassName("add-student-form")[0].innerHTML = addPopup;
    document.getElementsByClassName("f-name")[0].addEventListener("keyup",fName);
    document.getElementsByClassName("l-name")[0].addEventListener("keyup",lName);
    document.getElementsByClassName("Email")[0].addEventListener("keyup",EMail);
    document.getElementsByClassName("phone-number")[0].addEventListener("keyup",phoneNumber);
    //if(adding == 1){
        document.getElementsByClassName("submit-button")[0].addEventListener("click",addingStudent);
    //    ++adding;
    //}
    
}
addingStudentRow=(obj,index)=>{
    var studentRow = `<span class="student-data">
        <div class="student-holder-data">${obj.fname}</div>
        <div class="student-holder-data">${obj.lname}</div>
        <div class="student-holder-data">${obj.email}</div>
        <button class="action-button">Actions</button>
    </span>
    <span class="dropdown-holder"></span>
    `;
    var studentHolder = document.createElement("div");
    studentHolder.innerHTML = studentRow;
    studentHolder.setAttribute("class","student-holder")
    document.getElementsByClassName("students-holder")[0].appendChild(studentHolder);
    document.getElementsByClassName("f-name")[0].value = ''
    document.getElementsByClassName("l-name")[0].value = ''
    document.getElementsByClassName("Email")[0].value = ''
    document.getElementsByClassName("phone-number")[0].value = '';
    document.getElementsByClassName("action-button")[index].addEventListener("click",() => {actionClicked(obj,index)})

}
editedDataSubmit=(obj,index)=>{
    students[index] = obj;
    document.getElementsByClassName("editable-form-holder")[0].remove();
    //students[index] = obj
    document.getElementsByClassName("student-holder")[index].remove();
    addingStudentRow(obj,index);
}
editedDataCancel=()=>{

}
editClicked=(obj,index)=>{
    document.getElementsByClassName("student-data")[index].remove();
    var editable = `<span class="editable-form-holder"><input type="text" value=${obj.fname} placeholder="First Name" class="f-name-edit">
    <input type="text" value=${obj.lname} placeholder="Last Name" class="l-name-edit">
    <input type="text" value=${obj.email} placeholder="Email" class="Email-edit">
    <input type="text" value=${obj.phonenumber} placeholder="PhoneNumber" class="phone-number-edit">
    <button class="editable-submit-button">Submit</button>
    <button class="editable-cancel-button">Cancel</button></span>`;
    newStudent = students[index];
    document.getElementsByClassName("student-holder")[index].innerHTML = editable;
    document.getElementsByClassName("f-name-edit")[0].addEventListener("keyup",fName);
    document.getElementsByClassName("l-name-edit")[0].addEventListener("keyup",lName);
    document.getElementsByClassName("Email-edit")[0].addEventListener("keyup",EMail);
    document.getElementsByClassName("phone-number-edit")[0].addEventListener("keyup",phoneNumber);
    document.getElementsByClassName("editable-submit-button")[0].addEventListener("click",()=>editedDataSubmit(newStudent,index));
    document.getElementsByClassName("editable-cancel-button")[0].addEventListener("click",()=>editedDataCancel());

}
cancelClicked=()=>{

}
actionClicked = (obj,index)=>{
    //alert(index);
    document.getElementsByClassName("action-button")[index].style.display="none";
    var actionDropdown = `
        <button class="edit-button">Edit</button>
        <button class="delete-button">Delete</button>
        <button class="cancel-button">Cancel</button>
    `;
    document.getElementsByClassName("dropdown-holder")[index].innerHTML = actionDropdown;

    document.getElementsByClassName("edit-button")[0].addEventListener("click",()=>editClicked(obj,index));
    document.getElementsByClassName("delete-button")[0].addEventListener("click",()=>deleteClicked(obj,index));
    document.getElementsByClassName("cancel-button")[0].addEventListener("click",cancelClicked);
}
addingStudent = () =>{
    students.push(newStudent);
    $(".students-holder").empty();
    students.map((obj,index)=>addingStudentRow(obj,index));
    
    //addingStudentRow(newStudent , index);
    //index++;
     //document.getElementsByClassName("add-student-form").empty();
    newStudent = {};
}

document.getElementsByClassName("add-student-button")[0].addEventListener("click",addingStudentPopup);
