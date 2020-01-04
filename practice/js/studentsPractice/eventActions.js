

function gettingContacts(){
    return ajaxFunctionCall({
        method:"GET",
        url:"http://localhost:3000/contacts"
    });
}
function editingContact(id,data){
    return ajaxFunctionCall({
        method:"PUT",
        data:data,
        url:"http://localhost:3000/contacts/"+id
    });
}
function deleteContact(id){
    return ajaxFunctionCall({
        method:"DELETE",
        url:"http://localhost:3000/contacts/"+id
    });
}
function createStudentContact(data){
    return ajaxFunctionCall({
        method:"POST",
        data:data,
        url:"http://localhost:3000/contacts/"
    });
}

var AllEvents ={
    gettingContacts:gettingContacts,
    editingContact:editingContact,
    deleteContact:deleteContact,
    createStudentContact:createStudentContact
}
