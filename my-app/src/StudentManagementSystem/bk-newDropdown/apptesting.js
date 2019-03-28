import React from 'react';
import Dropdown from './index';

export default class AppTestingDropdown extends React.Component{
    clickedOption=(value,index)=>{
        alert(value+","+index)
    }
    render(){
        
        var { options }= this.props;
        var { children } = this.props;
        return(
            <div>
                <Dropdown></Dropdown>
                <Dropdown options={options} children={ children }></Dropdown>
                <Dropdown onSelect={this.clickedOption}></Dropdown>
            </div>
        )
    }
} 
AppTestingDropdown.defaultProps={
    options:[
        {
            value:"hello",
            text:"hello 1"
        },
        {
            value:"hai",
            text:"hai 2"
        },
        {
            value:"welcome",
            text:"welcome 3"
        }
    ],
    children:"header"
}