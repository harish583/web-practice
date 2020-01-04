

import React from 'react';

export default class StudentData extends React.Component{
    render(){
        if(!this.props.detailsShow){
            return null;
        }
        return(
            <div>
                <span><b>FNAME : </b></span>
                <span>abc</span>
            </div>
        )
    }
}