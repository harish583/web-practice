
import React from 'react';
import './studentRow.css';
import  Dropdown from './dropdown'

export default class StudentRow extends React.Component{
    constructor(props){
        super(props);
        this.state={
            studentRow:{
                name:"name1",
                phoneNumber:"12345",
                email:"abc123@gmail.com",
                address:"xyz"
            }
        }
    }
    render(){
        return(
            <div className="content-holder">
                <div className="header">
                    <div className="header-content">Name</div>
                    <div className="header-content">PhoneNumber</div>
                    <div className="header-content">Email</div>
                </div>
                <div className="student-row">
                    <div className="student-content">{this.state.studentRow.name}</div>
                    <div className="student-content">{this.state.studentRow.phoneNumber}</div>
                    <div className="student-content">{this.state.studentRow.email}</div>
                    <Dropdown />

                </div>
            </div>
        )
    }
}