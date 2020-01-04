import React from 'react';
import "./studentRow.css";
import Dropdown from './index';

export default class StudentRow extends React.Component{
    constructor(props){
        super(props);
        this.state={
            row:{}
        }
    }
    render(){
        const { student } = this.props;
        const { options } = this.props;
        const { rowindex } = this.props
        return(
            <div className="student-row" key={student.name}>
                <div className="student-row-singleContent">{student.name}</div>
                <div className="student-row-singleContent">{student.username}</div>
                <div className="student-row-singleContent">{student.email}</div>
                <Dropdown rowindex={rowindex} options={options} student={student} onSelect={(action,index,student,rowindex)=>this.props.onAction(action,index,student,rowindex)}></Dropdown>
            </div>
        )
    }
}
StudentRow.defaultProps={
    student:{
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address":  "Victor Plains",
        "phone": "010-692-6593 x09125",
        
      },
    options : [
        {
            value:"Edit",
            text:"option 1"
        },
        {
            value:"Details",
            text:"option 2"
        },
        {
            value:"Delete",
            text:"option3"
        }
    ]
}