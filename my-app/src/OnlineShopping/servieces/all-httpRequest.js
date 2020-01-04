
import ajaxFunctionCall from './httpRequest';
function gettingitems(){
    return ajaxFunctionCall({
        method:"GET",
        url:"http://localhost:3000/list"
    });
}
// function editingStudent(id,data){
//     return ajaxFunctionCall({
//         method:"PUT",
//         data:data,
//         url:"http://localhost:3000/list/"+id
//     });
// }
function deleteitem(id){
    return ajaxFunctionCall({
        method:"DELETE",
        url:"http://localhost:3000/list/"+id
    });
}
// function createStudent(data){
//     return ajaxFunctionCall({
//         method:"POST",
//         data:data,
//         url:"http://localhost:3000/list/"
//     });
// }
 export var AllEvents ={
    gettingitems:gettingitems,
    //editingStudent:editingStudent,
    deleteitem:deleteitem,
    //createStudent:createStudent
}
