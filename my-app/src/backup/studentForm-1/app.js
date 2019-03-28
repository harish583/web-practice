import React from 'react';
import StudentRow from './studentRow';
import './app.css';

export default class App extends React.Component{
    render(){
        return(
            <div className="content-holder">
                <div className="header">
                    <div className="header-content">Name</div>
                    <div className="header-content">PhoneNumber</div>
                    <div className="header-content">Email</div>
                </div>
                <StudentRow></StudentRow>
                <StudentRow></StudentRow>
            </div>
        )
    }
}