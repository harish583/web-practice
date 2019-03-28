import React from 'react';

export default class DetailsHolder extends React.Component{
    render(){
        const { student } = this.props
        return(
            <div>
                <div>
                    <span><b>Name : </b></span>
                    <span>{student.name}</span>
                </div>
                <div>
                    <span><b>UserName : </b></span>
                    <span>{student.username}</span>
                </div>
                <div>
                    <span><b>Email : </b></span>
                    <span>{student.email}</span>
                </div>
                <div>
                   <span><b>Address : </b></span>
                    <span>{student.address}</span>
                </div>
            </div>
        )
    }
}