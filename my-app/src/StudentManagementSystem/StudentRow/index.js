import React from 'react';
import Dropdown from '../Dropdown';
import "./index.css";

export default class StudentRow extends React.Component{
    constructor(props){
        super(props);
        this.state={
            row:{}
        }
    }
    handleSelectChange = (action) => {
        const { onAction, student } = this.props;
        if (onAction) {
            onAction(action, student);
        }
    }
    render(){
        const { student } = this.props;
        return(
            <div className="student-row" key={student.name}>
                <div className="student-row-singleContent">{student.name}</div>
                <div className="student-row-singleContent">{student.username}</div>
                <div className="student-row-singleContent">{student.email}</div>
                <Dropdown onSelect={this.handleSelectChange}></Dropdown>
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
        
    }
}