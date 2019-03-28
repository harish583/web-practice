import React from 'react';
import './index.css';

export default class DetailsHolder extends React.Component{
    render(){
        const { student } = this.props;
        const { onClose } = this.props;
        return(
            <div className="details-holder">
                <h2 className="details-header">Student Details..</h2>
                <div className="content-row">
                    <span><b>Name : </b></span>
                    <span>{student.name}</span>
                </div>
                <div className="content-row">
                    <span><b>UserName : </b></span>
                    <span>{student.username}</span>
                </div>
                <div className="content-row">
                    <span><b>Email : </b></span>
                    <span>{student.email}</span>
                </div>
                <div className="content-row">
                   <span><b>Address : </b></span>
                    <span>{student.address}</span>
                </div>
                <button className="details-close" onClick={onClose}>Close</button>
            </div>
        )
    }
}
DetailsHolder.defaultProps={
    student:{
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": "Skiles Walks" 
        }
}