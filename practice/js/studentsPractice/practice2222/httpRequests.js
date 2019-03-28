

function gettingData(){
    return ajaxRendering({
        method:"GET",
        url:"http://localhost:3000/contacts"
    })
}
function editingData(data,id){
    return ajaxRendering({
        data:data,
        method:"PUT",
        url:"http://localhost:3000/contacts/"+id
    })
}
function deletingData(id){
    return ajaxRendering({
        method:"delete",
        url:"http://localhost:3000/contacts/"+id
    })
}
function createData(data){
    return ajaxRendering({
        data:data,
        method:"POST",
        url:"http://localhost:3000/contacts/"
    })
}

var allHttpRequests={
    gettingData:gettingData,
    editingData:editingData,
    deletingData:deletingData,
    createData:createData
}