
import React from 'react';
import './latestDropdown.css';
import DropDown from './dropDown'; 

export default class LatestDropdown extends React.Component{
    constructor(props){
        super(props);
        this.state={
            header:["A Series"],
            list:[
                ["A1","A2","A3","A4"]
            ],
            status:false
        }
    }
    openDropdown(){
        this.setState({
            status:!this.state.status
        })
    }

    render(){
        return (
            <div>
                <DropDown data={this.state} onOpen={() => this.openDropdown()} key={1}/>
                <DropDown data={this.state} onOpen={() => this.openDropdown()} key={1}/>
                <DropDown data={this.state} onOpen={() => this.openDropdown()} key={1}/>
                <DropDown data={this.state} onOpen={() => this.openDropdown()} key={1}/>
                <DropDown data={this.state} onOpen={() => this.openDropdown()} key={1}/>
            </div>
        )
    }
} 