import React from 'react';

export default class ActionList extends React.Component{
    render(){
        var { content } = this.props;
        if(!content.status){
            return null;
        }
        return(
            <ul>
                <li className="dropdown">Edit</li>
                <li className="dropdown">Details</li>
                <li className="dropdown">Delete</li>
            </ul>
        )
    }
}