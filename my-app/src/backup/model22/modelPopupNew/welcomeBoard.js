import React from 'react';

export default class Welcome extends React.Component{
    render(){
        if(!this.props.showingData){
            return null;
        }
        return <div>
            <div className="popupBackground"></div>
                    <div className="popupContent">
                        <div>Welcome</div>
                    </div>
        </div>
        
            
        
    }
}