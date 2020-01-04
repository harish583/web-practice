import React from 'react';
import './modelPopup.css';

export default class ModelPopup extends React.Component{
    constructor(props){
        super(props);
        this.state={
            popupContentOpen:false,
            popupHolder:true
        }
    }
    OnCrossMark(){
        this.setState({
            popupContentOpen:!this.state.popupContentOpen
        })
    }
    onclosingClocked(){
        this.setState({
            popupContentOpen:false,
            popupHolder:!this.state.popupHolder
        })
    }
    render(){
        var {data} =this.props;

        return(
            <div>
                {this.state.popupHolder &&(<div>
                    <div className="background"></div>
                    <div className="popup-content-holder">
                        <div className="cross-mark" onClick={(event)=>this.onclosingClocked(event)}>X</div>
                        {/* { this.state.popupContentOpen  */}
                            {this.popupContentOpen && (<div className="popupContent ">
                            content comes here
                        </div>)}
                        <div className="close-button" onClick={()=>this.onclosingClocked}>Close</div>
                    </div>
                    </div>
                )}
            </div>
        )
    }
}