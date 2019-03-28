import React from 'react';

export default class DropdownHolder extends React.Component{
    render(){
        var { data } =this.props;
        if(data.status){ 
            var dropdown = <ul className="list-header" key={data.name}>
                <li className="list-element" onClick={this.props.onEdit.bind(this,data)}>Edit</li>
                <li className="list-element" onClick={this.props.onDetails.bind(this,data)}>Details</li>
                <li className="list-element" onClick={this.props.onDelete.bind(this,data)}>Delete</li>
            </ul>
        }
        return(<div>
            {dropdown}</div>
        )
    }
} 