
import React from 'react';
import StudentRow from '../StudentRow';
import './index.css';

export default class StudentsList extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    studentDetails(rowindex, action, student) {
        const { onAction } = this.props;
        if (onAction) {
            onAction(action, student, rowindex);
        }
    }
     componentDidMount(){
     }
    render(){
        const { students } = this.props;
        const { onCreate } = this.props;
        return(
            <div className="students-list">
                <div>
                    <h2 className="header">Students Details...</h2>
                    <div className="add-button-holder">
                    {students.length === 0 &&
                        <button className="add-button" onClick={onCreate}>Add New Student</button>
                    }
                    {students.length > 0 &&
                        <button className="add-button right" onClick={onCreate}>Add Student</button>
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
            </div>
        )
    }
}
StudentsList.defaultProps={
     students : []
}