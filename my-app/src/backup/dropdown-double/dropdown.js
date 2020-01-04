
import React from 'react'
import './dropdown.css'
import DropdownListHolder from './dropdownList'

export default class DropdownList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            dropdownList:["one","two","three"],
            status:false
        }
    }
    openDropdown(){
        this.setState({
            status:!this.state.status
        })
    }
    render(){
        console.log(this.state);
        return <div className="folder">
            <div className="header" onClick={this.openDropdown.bind(this)}>values</div>
            {/* <ul className="list-holder">
                <li className="list">one</li>
                <li className="list">two</li>
                <li className="list">three</li>
                <li className="list">four</li>
            </ul> */}
            <DropdownListHolder abc={this.state}></DropdownListHolder>
        </div>
    }
}