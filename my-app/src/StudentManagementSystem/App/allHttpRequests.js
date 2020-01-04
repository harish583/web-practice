

export function gettingStudentDetails(){
    return ajaxFunctionCall({
        method:"GET",
        url:"https://jsonplaceholder.typicode.com/users"
    });
}
function editingStudent(id,data){
    return ajaxFunctionCall({
        method:"PUT",
        data:data,
        url:"https://jsonplaceholder.typicode.com/users/"+id
    });
}
function deleteStudent(id){
    return ajaxFunctionCall({
        method:"DELETE",
        url:"https://jsonplaceholder.typicode.com/users/"+id
    });
}
function createStudent(data){
    return ajaxFunctionCall({
        method:"POST",
        data:data,
        url:"https://jsonplaceholder.typicode.com/users/"
    });
}
 var AllEvents ={
    gettingStudentDetails:gettingStudentDetails,
    editingStudent:editingStudent,
    deleteStudent:deleteStudent,
    createStudent:createStudent
}
