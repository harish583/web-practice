
function gettingData(){
    return httpRequest({
        url:"http://localhost:3000/contacts",
        method:"GET"
    })
}
function updatingData(data,id){
    return httpRequest({
        url:"http://localhost:3000/contacts/"+id,
        method:"PUT",
        data:data
    })
}
function deletingData(id){
    return httpRequest({
        url:"http://localhost:3000/contacts/"+id,
        method:"DELETE"
    })
}
function creatingData(data){
    return httpRequest({
        url:"http://localhost:3000/contacts",
        method:"POST",
        data:data
    })
}
var allAjaxFunctions ={
    gettingData:gettingData,
    updatingData:updatingData,
    deletingData:deletingData,
    creatingData:creatingData
}