import React from 'react';
import StudentRow from './studentRow';

export default class AppTestingStudentRow extends React.Component{
    studentDetails(value,index,student){
        alert("selected option = "+ value+" , index = "+ index+", student name = " + student.name )
    }
    render(){
        const { student } = this.props;
        return(<div>
                <StudentRow onAction={this.studentDetails} student={student}></StudentRow>
            </div>
        )
    }
}
AppTestingStudentRow.defaultProps={
    student:{
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": "Douglas Extension",
        "phone": "1-463-123-4447",
    }
}