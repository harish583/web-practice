
import React, { Component } from 'react';
import './index.css';
export default class ModelPopup extends Component{
    handleCloseClick = () => {
        const { onClose } = this.props;
        if (onClose) {
            onClose();
        }
    }
    render(){
        const { children } = this.props;
        return(
            <div className="modal-popup">
                <div className="background" onClick={this.handleCloseClick}></div>
                <div className="modal-content">
                    <div className="cross-mark" onClick={this.handleCloseClick}>X</div>
                    <div className="text-content">
                        {children}
                    </div>
                </div>
            </div>
        )
    }
}