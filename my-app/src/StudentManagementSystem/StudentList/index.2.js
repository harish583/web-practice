
import React from 'react';
import StudentRow from '../StudentRow';
import './index.css'
import ModelPopup from '../ModelPopup/index';
import AddStudentHolder from '../edit/addHolder';

export default class StudentsList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            studentStatus:false
        }
    }
    studentDetails(rowindex, action, student) {
        const { onAction } = this.props;
        if (onAction) {
            onAction(action, student, rowindex);
        }
    }
    // componentDidMount(){
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then((response)=>response.json())
    //     .then((response)=>this.setState({
    //         students:response
    //     }))
    // }
    popupHandler =()=>{
        alert("hello"+this+"welcome")
        this.setState({
            studentStatus:!this.state.studentStatus
        })
    }
    render(){
        const { students } = this.props;
        return(
            <div className="students-list">
                <div>
                    <h2 className="header">Students Details...</h2>
                    <div className="add-button-holder">
                    {students.length === 0 &&
                        <button className="add-button" onClick={this.popupHandler}>Add New Student</button>
                    }
                    {students.length > 0 &&
                        <button className="add-button right" onClick={this.popupHandler}>Add Student</button>
                    }
                    </div>
                </div>
                <div>
                    <div className="student-row-header">Name</div>
                    <div className="student-row-header">Username</div>
                    <div className="student-row-header">Email</div>
                </div>
                {
                    students.length === 0 && (<div>
                        No students Available
                    </div>)
                }
               {
                   students.map((student,rowindex)=>
                        <StudentRow 
                            onAction={this.studentDetails.bind(this, rowindex)} 
                            student={student}
                            key={rowindex}    
                        />
                    )
                }
                {this.state.studentStatus &&
                    (<ModelPopup>
                        <AddStudentHolder onSubmit={this.popupHandler}></AddStudentHolder>
                    </ModelPopup>)
                } 
            </div>
        )
    }
}
StudentsList.defaultProps={
     students : []
}