
import React from 'react';

export default class StudentDetails extends React.Component{
    render(){
        var { Details }=this.props
        return(
            <div>
                <h1>Student Details</h1>
                <h2>Name : {Details.studentRow.name}</h2>
                <h2>Phone Number : {Details.studentRow.phoneNumber}</h2>
                <h2>Email : {Details.studentRow.email}</h2>
                <h2>Address : {Details.studentRow.address}</h2>
            </div>
        )
    }
}