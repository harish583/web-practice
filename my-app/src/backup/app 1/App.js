import React, { Component } from 'react';
import './Todo.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      text:'',
      list:[],
      emptyList:[]
    }
  }
  addingText(event){
    this.setState({  text : event.target.value});
    
  }
  addToList(enterValue){
    var newList = this.state.list;
    if(enterValue==''){
      return;
    }
    newList.push(enterValue);
    var newNew = '';
    this.setState({
      list:newList,
      text: newNew
    })

  }
  forRemoving(event){
    var id = event.target.id;
    this.state.list.splice(id,1)
    this.setState({
      list:this.state.list
    })
  }
  selectAll(event){
    if(this.state.list.length == 0){
      return;
    }
    var all = document.querySelector(".holder-checkbox");
    if(all.classList.contains("selected")){
    all.classList.remove("selected");
    var li = document.querySelectorAll(".newCheckbox");
      for(var i =0 ;i<li.length;i++){
        
      li[i].classList.remove("selected");
    }
  }
  else {
    all.classList.add("selected");
    var li = document.querySelectorAll(".newCheckbox");
      for(var i =0 ;i<li.length;i++){
        
      li[i].classList.add("selected");
    }
  }

  }
  selected(event){
    var classlist = event.target.classList;
    var all = document.querySelector(".holder-checkbox");
    if(classlist.contains("selected")){
      classlist.remove("selected");

      all.classList.remove("selected");
    }
    else {
      classlist.add("selected");
    var li = document.querySelectorAll(".newCheckbox");
      for(var i =0 ;i<li.length;i++){
        if(!(li[i].classList.contains("selected"))){
          return;
        }        
      }
      all.classList.add("selected");
    }
  }
  deleteAll(event){
    
    console.log("this..",this);
    var all = document.querySelector(".holder-checkbox");
      all.classList.remove("selected");
      this.setState({
        
        list:[]
      })
  }
  render(){
    return(
    <div className="container">
      <h2>TODO LIST</h2>
      <div className="inputHolder">
        <input type="text" 
          className="inputText"
          onChange={(event)=>this.addingText(event)} 
          value={this.state.text}
        />
        <div className="holder-checkbox">
          <div className="Checkbox" onClick={(event)=>this.selectAll(event)}>
              <div className="tickMark"></div>
          </div>
          <button className="deteleAll" onClick={(event)=>this.deleteAll(event)}> Delete All</button>
        </div>
      </div>
      <button className="AddButton" onClick={()=>this.addToList(this.state.text)}>ADD</button>
      <ul>
        {this.state.list.map((value,i)=><li key={i}>
          <div className="newCheckbox " onClick={(event)=>this.selected(event)}>
            <div className="tickMark"></div>
          </div>
          <span className="textContent">{value}</span>
          <span className="closingList" id={i} onClick={(event)=>this.forRemoving(event)}>X</span>
        </li>) }
      </ul>
    </div>)
  }
}
export default App
