import React from 'react';
import Options from './options';

export default class DropDown extends  React.Component{
  constructor(props){
    super(props);
    this.state={
      header:"A Series",
      list:["A1","A2","A3","A4"],
      status:false
    }
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  openDropdown(event){
    this.setState({
      status:!this.state.status
    })
  }
  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside.bind(this));
  }
  
  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside.bind(this));
  }
  handleClickOutside(event) {
    console.log(event.target);
    if (!(event.target.className=="header")) {
      this.setState({
        status:false
      })
    }
  }

  render(){
      return (
          <div className="DropdownHolder">
          <div className="header" onClick={(event)=>this.openDropdown(event)} key={"a"}>{this.state.header}</div>
          
          <Options val={this.state} ></Options>
          </div>
      )
  }
}