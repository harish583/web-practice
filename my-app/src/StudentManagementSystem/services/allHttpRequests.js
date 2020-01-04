
import { ajaxFunctionCall } from './http-request';
export function GettingStudentDetails(){
    return ajaxFunctionCall({
        method:"GET",
        url:"http://localhost:3000/students"
    });
}
export function EditingStudent(id,data){
    return ajaxFunctionCall({
        method:"PUT",
        data:data,
        url:"http://localhost:3000/students/"+id
    });
}
export function DeleteStudent(id){
    return ajaxFunctionCall({
        method:"DELETE",
        url:"http://localhost:3000/students/"+id
    });
}
export function CreateStudent(data){
    return ajaxFunctionCall({
        method:"POST",
        data:data,
        url:"http://localhost:3000/students/"
    });
}
export  var AllEvents ={
    GettingStudentDetails:GettingStudentDetails,
    EditingStudent:EditingStudent,
    DeleteStudent:DeleteStudent,
    CreateStudent:CreateStudent
}
