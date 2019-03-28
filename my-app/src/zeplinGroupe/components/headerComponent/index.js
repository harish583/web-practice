import React from 'react';
import './index.css';


export default class Header extends React.Component{
    render(){
        return (
            <div className="header">
                <div className="nav-component">
                    <div className="lines"></div>
                    <div className="lines"></div>
                    <div className="lines"></div>
                </div>
                <i className="far fa-bell"></i>
            </div>
        )
    }
}