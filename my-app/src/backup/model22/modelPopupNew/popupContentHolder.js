import React from 'react';
import Welcome from './welcomeBoard';
import StudentData from './studentData';

export default class PopupContent extends React.Component{
    render(){
        return <div>
            <div className="popupBackground"></div>
            <div className="popupContent">
                <Welcome  showingData={this.state.showingData}>
                    
                </Welcome>
            </div>
            <div>
                <StudentData detailsShow={this.state.detailsShow}>
                    
                </StudentData>
            </div>
        </div>
    }
}