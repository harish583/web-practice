

import React from "react";
import './modelPopup.css';
// import Welcome from './welcomeBoard';
// import StudentData from './studentData';
import PopupContent from './popupContentHolder';

export default class ModelPopup extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showingData: false,
            detailsShow:false
        }
    }
    openWelcomePopup(event){
        // alert("enter",event);
        this.setState({
            showingData:true,
            detailsShow:false
        })

    }
    openDetailsPopup(event){
        this.setState({
            detailsShow:true,
            showingData:false
        })
    }
    render(){
        return (
            <div>
                <button onClick={(event)=> this.openWelcomePopup(event)}>Welcome Note</button>
                <button onClick={(event)=>this.openDetailsPopup(event)}>open data</button>
                <div className="popup">
                    {/* <div className="popupBackground"></div>
                    <div className="popupContent">
                        <Welcome  showingData={this.state.showingData}>
                            
                        </Welcome>
                    </div>
                    <div>
                        <StudentData detailsShow={this.state.detailsShow}>
                            
                        </StudentData>
                    </div> */}
                    <PopupContent showingData={this.state.showingData} detailsShow={this.state.detailsShow}></PopupContent>
                </div>
            </div>
        )
    }
}