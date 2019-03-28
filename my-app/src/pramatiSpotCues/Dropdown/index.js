
import React from 'react';
import './index.css';

export default class Dropdown extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isOpen:false
        }
        this.documentClick=this.documentClickOutside.bind(this)
    } 
    ActionClicked(){
        var isOpen=!this.state.isOpen
        this.setState({
            isOpen:isOpen
        })
        if(isOpen){
            document.addEventListener("click",this.documentClick)
        }
        else{
            document.removeEventListener("click",this.documentClick) 
        }
    }
    documentClickOutside(){
        this.ActionClicked();
    }
    handlOptionSelect = (event) => {
        const { onSelect } = this.props;
        const { value, index } = event.target.dataset;
        if (onSelect) {
            onSelect(value, index);
        }
    }
    render(){
        var { isOpen } = this.state;
        var { children } = this.props;
        var { options } = this.props;
        return(
            <div className="dropdown">
                <div onClick={(event)=>this.ActionClicked(event)} className="action-button">{ children }</div>
                {isOpen && (<div className="dropdown-options-holder">
                    <div className="dropdown-options">
                        {
                            options.map((option,index)=>
                            <div className="dropdown-option"
                                key={option.value}
                                data-index={index}
                                data-value={option.value}
                                onClick={this.handlOptionSelect}
                            >{option.text}</div>)
                        }
                    </div>
                
                </div>)}
            </div>)
    }
}
Dropdown.defaultProps={
    options:[
        {
            value:"EDIT",
            text:"Edit"
        },
        {
            value:"DELETE",
            text:"Delete"
        },
        {
            value:"DETAILS",
            text:"Details"
        }
    ]
}