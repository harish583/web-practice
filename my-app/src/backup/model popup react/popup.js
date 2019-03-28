import React from 'react';
import "./popup.css";
import Content from "./content"
import List from "./list"

class Popup extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state={
    //         data:["fname","lname"],
    //         email:["123@gmail.com","abc@gmail.com"]
    //     }
    // }
    closing(){
        document.querySelector(".container").style.display="none";
    }
    openWelcome(){
        document.querySelector(".container").style.display="none";
        document.querySelector(".container").style.display="block";
        document.querySelector(".list-holder").style.display="none";
        document.querySelector(".content-header").style.display="block";
    }
    openStudentData(){
        document.querySelector(".container").style.display="none";
        document.querySelector(".container").style.display="block"; 
        document.querySelector(".list-holder").style.display="block";
        document.querySelector(".content-header").style.display="none";
    }

    render(){
        return(
            <div>
            <div>
                <button className="buttons1" onClick={this.openWelcome} id="0">Open Welcome</button>
                <button className="buttons2" onClick={this.openStudentData} id="1">Open Student Data</button>
            </div>
            <div className="container">
                <div className="popup-background" onClick={this.closing}></div>
                <div className="content">
                    <div className="closing"  onClick={this.closing}>X</div>
                    <h1 className="data">
                    <Content />
                    <List />
                    </h1>
                    <div className="closeButton" onClick={this.closing}>Close</div>
                </div>
            </div>
            </div>
        )
    }
}

export default Popup; 