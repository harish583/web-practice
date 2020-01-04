var students = [];
/* core functionality starts here */
function readDataFromStorage() {
    // read the data from storage and asign to students GLOBAL varaiable

}

function writeDataToStorage(data) {
    // write the data passed to localStorage 
}

function addStudent(student) {
    // takes the student object and push to students array and write data to storage
    // append the student object respective dom i.e renderStudent(student, parentNode)
}

function deleteStudent(index) {
    // take the index to remove, and remove the respective data and writes to storage
    // remove the respective dom node
}

function updateStudent(student, index) {
    // takes the student and index and update the data repectively nad writes for storage
    // update the repective dom with values passed 
}
/* core functionality ends here */

/* View details functionaly starts here */
function openViewDetailsPopup(index) {
    // pre populate the student from the index
}

function closeViewDetailsPopup() {
    // should close the delete confrom popup
}

function onViewDetailsClick(event) {
    // write the functionality for view details click
}
/* View details functionaly ends here */


/* Delete student functionaly starts here */
function onDeleteConfirmClick(index) {
    // delete student from the respective index
    // close the deleteConfrimPopup
}

function openDeleteConfirmPopup(index) {
    // Bind event for OK button click in confrim popup
    // Make sure above confirm event is getting called only once 
}

function closeDeleteConfirmPopup() {
    // should close the delete confrom popup
}

function onDeleteButtonClick(event) {
    // write functioanlity for delete button click

}
/* Delete student functionaly ends here */

/* Edit student functionality starts here */
function openEditStudentForm(index) {
    // should open the form and
    // should bind the bind the event for submit click
    // make sure above event is calling is only once
    // Prefill the data
}

function closeEditStudentPopup() {
    // shoould close the form
}

function onEditStudentSubmitClick(event, index) {
    // should read the values from inputs and if the values are proper call updateStudent(student, index) and close the popup
}

function onEditStudentClick(event) {
    // Functionality for add Student click
}
/* Edit student functionality ends here */



function bindStudentEvents(node) {
    // bind on click events for view details, edit, delete event handlers  
}

function renderStudent(student, parent) {
    // create the student node and append to parent
    // TODO
    // and bindStudentEvents
}

function renderStudents(data) {
    // render students by using data array passed
}


/* add student functionality starts here */
function openAddStudentForm() {
    // should open the form and
    // should bind the bind the event for submit click
    // make sure above event is calling is only once
}

function closeAddStudentPopup() {
    // shoould close the form
}

function onAddStudentSubmitClick(event) {
    // should read the values from inputs and if the values are proper call addStudent and close the popup
}

function onAddStudentClick(event) {
    // Functionality for add Student click
}
/* add student functionality ends here */

function bindAddStudentClick() {
    // Functionality for add button click
}


function initialize() {
    readDataFromStorage();
    renderStudents();
    bindAddStudentClick();
}

function initialize();