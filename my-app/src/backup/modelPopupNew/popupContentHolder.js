
import React from 'react';
import Welcome from './welcomeBoard';
import StudentData from './studentData';
import './modelPopup.css';

export default class PopupHolder extends React.Component{
    
    
    render(){
        console.log(this.props);
        var { data } = this.props;
        console.log(data);
        if(!data.popup){
            return null;
        }
        return (
            <div>     
                <div className="popupBackground"></div>
                <div className="popupContent">
                    <div className="cross-mark" onClick={()=>this.props.onClose()}>X</div>
                    <Welcome  showingData={data.showingData}>
                        
                    </Welcome>
                    <StudentData detailsShow={data.detailsShow}>
                        
                    </StudentData>
                    <div className="closingButton" onClick={(event)=>this.props.onClose()}>Close</div>
                
                </div>
            </div>
        )
        //}
    }
}