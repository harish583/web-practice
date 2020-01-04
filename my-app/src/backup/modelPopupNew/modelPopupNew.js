

import React from "react";
import './modelPopup.css';
import Welcome from './welcomeBoard';
import StudentData from './studentData';
import PopupHolder from './popupContentHolder';

export default class ModelPopup extends React.Component{
    constructor(props){
        super(props);
        this.state={
            popup:false, 
            showingData: false,
            detailsShow:false
        }
    }
    openWelcomePopup(event){
        // alert("enter",event);
        this.setState({
            showingData:true,
            detailsShow:false,
            popup:true, 
        })

    }
    openDetailsPopup(event){
        this.setState({
            detailsShow:true,
            showingData:false,
            popup:true
        })
    }
    closePopup(){
        this.setState({
            popup:false
        })
    }
    // closingForm(){
    //     this.setState({
    //         detailsShow:false,
    //         showingData:false
    //     })
    // }
    render(){
        return (
            <div>
                <button onClick={(event)=> this.openWelcomePopup(event)}>Welcome Note</button>
                <button onClick={(event)=>this.openDetailsPopup(event)}>open data</button>
                <div className="popup">
                    {/* <div className="popupBackground"></div>
                    
                    <div className="popupContent">
                        <div className="cross-mark"  onClick={this.closingForm}>X</div>
                        <Welcome  showingData={this.state.showingData}>
                            
                        </Welcome>
                        <StudentData detailsShow={this.state.detailsShow}>
                            
                        </StudentData>
                        <div className="closingButton" onClick={this.closingForm}>Close</div>
                    </div> */}
                     <PopupHolder data={this.state} onClose={()=>this.closePopup()}>

                     </PopupHolder>
                </div>
            </div>
        )
    }
}