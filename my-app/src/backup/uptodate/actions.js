import React from 'react';
//import ActionsList from './actionsList'
import ContentHolder from './contentHolder'

export default class Actions extends React.Component{
    render(){
        var { data } = this.props;
        if(data.status){
            var list=
            <ul>
                <li className="dropdown Edit" onClick={this.props.onEdit.bind(this)}>Edit</li>
                <li className="dropdown Details" onClick={this.props.onDetails.bind(this)}>Details</li>
                <li className="dropdown Delete" onClick={this.props.onDelete.bind(this)}>Delete</li>
            </ul>
        }

        if(data.editButton || data.detailsButton || data.deleteButton){
            
            var popup= <div>
                <div className="background"></div>
                <div className="container">
                    <div className="cross-mark" onClick={(event)=>this.props.closingPopup(event)}>X</div>
                    <ContentHolder val={data} ></ContentHolder>
                    <div className="close-button" onClick={(event)=>this.props.closingPopup(event)}>Close</div>
                </div>
            </div>
        }
        return(<td>
            <span className="values Actions" onClick={(event)=>this.props.clicked(event)}>Actions
                {/* <ul>
                    <li className="dropdown">Edit</li>
                    <li className="dropdown">Details</li>
                    <li className="dropdown">Delete</li>
                </ul> */}
                {list}
                {/* <ActionsList content={data}/> */}
            </span>

                {popup}
                
                </td>
        )
    }
}