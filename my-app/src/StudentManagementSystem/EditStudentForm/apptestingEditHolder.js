import React from 'react';
import EditHolder from "./EditHolder";

export default class AppTestingEditHolder extends React.Component{
    afterSuccess(student){
        alert("name = "+student.name)
    }
    render(){
        var student={ 
            name:'aa',
            username:'bb',
            email:'cc',
            address:'dd'
        }
        
        return(
            <EditHolder student={student} onSuccess={(student)=>this.afterSuccess(student)}></EditHolder>
        )
    }
}