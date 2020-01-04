import React from 'react';


export default class Actions extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isOpen:false
        }
        this.outside = this.OutsideClick.bind(this)
    }
    clicking(){
        this.setState({
            isOpen:!this.state.isOpen
        })
        if(this.state.isOpen){
            document.removeEventListener("click",()=>this.outside());  
        }
        else{
            document.addEventListener("click",()=>this.outside());
        }
    }
    OutsideClick(){
        this.setState({
            isOpen:false
        })
    }
    render(){
        const { id } = this.props
        return(
            <div  className="list-element">
                <div className="Action-Button" onClick={(event)=>this.clicking(event)} id={id}>
                    Actions</div>
                { this.state.isOpen &&   <ul>
                        <li className="Actions Actions-Edit">Edit</li>
                        <li className="Actions Actions-Details">Details</li>
                        <li className="Actions Actions-Delete">Delete</li>
                    </ul>
                }
                
            </div>
        )
    }
}