import React from 'react';
import './dropdown.css';
import ModelPopup from './modelPopup';

export default class Dropdown extends React.Component{
    constructor(props){
        super(props);
        this.state={
            options:[
                {
                    value:"Edit",
                    text:"Edit"
                },
                {
                    value:"Details",
                    text:"Details"
                },
                {
                    value:"Delete",
                    text:"Delete"
                }
            ],
            dropDownOpen:false,
            popupOpen:false,
            popupContentOpen:true,
            popupHolder:true,
            selectedValue:""
        }
        //this.outside = this.OutsideClick.bind(this);
    }
    clickFunction(val,id){
        this.setState({
            dropDownOpen:false,
            popupOpen:true,
            popupHolder:true,
            selectedValue:val.value

        })

    }
    actionClicked(event){
        var dropDownOpen =!this.state.dropDownOpen
        this.setState({
            dropDownOpen:dropDownOpen
        })
        // if(dropDownOpen){
        //     document.addEventListener("click",this.outside);  
        // }
        // else{
        //     document.removeEventListener("click",this.outside);
        // }
    }
    OnCrossMark(){
        this.setState({
            popupContentOpen:!this.state.popupContentOpen
        })
    }
    onclosingClicked(){
        this.setState({
            popupContentOpen:!this.state.popupContentOpen,
            popupHolder:!this.state.popupHolder
        })
    }
    // OutsideClick(){
    //     this.actionClicked()
    // }
    render(){
        var { list } = this.props;
        return(
            <div className="Action-button-container">
            <div className="dropdown-container">
                <div className="action-button" onClick={(event)=>this.actionClicked(event)}>Actions</div>
                { this.state.dropDownOpen && (
                
                <ul className="actions-holder">
                    {
                        this.state.options.map((val,id)=>{return <li className="list-elements" value={val.value} key={val.value} onClick={()=>this.clickFunction(val,id)}>{val.text}</li>})
                    }
                    
                </ul>)}
                

            </div>
            {this.state.popupOpen &&
                <ModelPopup data={this.state} studentList={list} onClose={()=>this.onclosingClicked.bind(this)} OnCross={this.OnCrossMark}></ModelPopup>
            }
            </div>
        )
    }
}