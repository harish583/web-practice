import React, { Component } from 'react';
import './index.css'

export default class Popup extends Component{
    constructor(props) {
        super(props);
    }
    openPopup1(event) {
        console.log(event);
        console.log('popup111...', this);
    }
    openPopup2(event) {
        console.log(event);
        console.log('popup2222...', this);
    }
    render(){
        return (<div>
            <button onClick={(event) => { this.openPopup1(event);}}>Popup1</button>
            <button onClick={this.openPopup2.bind(this)}>Popup2</button>    
            <button>Popup3</button>        
        </div>)
    }
} 
