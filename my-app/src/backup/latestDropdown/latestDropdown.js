
import React from 'react';
import './latestDropdown.css';
import DropDown from './dropDown'; 

export default class LatestDropdown extends React.Component{

    render(){
        return (
            <div>
                <DropDown></DropDown>
                <DropDown></DropDown>
                <DropDown></DropDown>
                <DropDown></DropDown>
            </div>
        )
    }
} 