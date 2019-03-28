
import React, { Component } from 'react';
export class List extends React.Component{
    render(){
        return <li><input type="checkbox" className="checkbox" /><span className="textContent">hello</span><span className="closingList">X</span></li>
    }
}