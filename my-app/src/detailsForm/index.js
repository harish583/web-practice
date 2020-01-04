import React from 'react';
import './index.css';

export default class Details extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:{
                fname:'',
                lname:''
            },
            birthDetails:{
                year:'',
                location:''
            },
            nameFormStatus:true,
            birthFormStatus:false,
            detailsFormStatus:false
        }
    }
    fname=(e)=>{
        var val = e.currentTarget.value
        var name = this.state.name;
        name.fname= val;
        this.setState({
            name:name
        })
    }
    lname=(e)=>{
        var val = e.currentTarget.value
        var name = this.state.name;
        name.lname= val;
        this.setState({
            name:name
        })
    }
    nameSubmited=()=>{
        this.setState({
            nameFormStatus:false,
            birthFormStatus:true
        })
    }
    birthYear=(e)=>{
        var val = e.currentTarget.value
        var details = this.state.birthDetails;
        details.year= val;
        this.setState({
            birthDetails:details
        })
    }
    birthLocation=(e)=>{
        var val = e.currentTarget.value
        var details = this.state.birthDetails;
        details.location= val;
        this.setState({
            birthDetails:details
        })
    }
    birthFormSubmited=()=>{
        this.setState({
            birthFormStatus:false,
            detailsFormStatus:true

        })
    }
    restartForm=()=>{
        this.setState({
            name:{
                fname:'',
                lname:''
            },
            birthDetails:{
                year:'',
                location:''
            },
            nameFormStatus:true,
            birthFormStatus:false,
            detailsFormStatus:false
        })
    }
    render(){
        var year = this.state.birthDetails.year;
        var now = new Date().getFullYear();
        var age = now - year;
        if(age<0){
            age = "entered correct birthYear"
        }
        var {nameFormStatus} = this.state;
        var {birthFormStatus} = this.state;
        var {detailsFormStatus} = this.state;
        return(
            <div>
                <div>
                    <div className="background"></div>
                    <div className="content">
                        <div className="header">This is a simple form service built with React</div>
                        {nameFormStatus && (<div className="name-holder">
                            <div className="input-holder">
                                <span><b>Type your first name:</b></span>
                                <input type="text" className="text-field" onChange={this.fname}></input>
                            </div>
                            <div className="input-holder">
                                <span><b>Type your last name:</b></span>
                                <input type="text" className="text-field" onChange={this.lname}></input>
                            </div>
                            <button className="submit-button" onClick={this.nameSubmited}>Submit</button>
                        </div>)}
                        {birthFormStatus && (<div className="name-holder">
                            <div className="input-holder">
                                <span><b>Type your birthYear:</b></span>
                                <input type="text" className="text-field" onChange={this.birthYear}></input>
                            </div>
                            <div className="input-holder">
                                <span><b>Type your birthLocation:</b></span>
                                <input type="text" className="text-field" onChange={this.birthLocation}></input>
                            </div>
                            <button className="submit-button" onClick={this.birthFormSubmited}>Submit</button>
                        </div>)}
                        {detailsFormStatus && (<div className="name-holder">
                            <div>
                                <span><b>First name : </b></span>
                                <span>{this.state.name.fname}</span>
                            </div>
                            <div>
                                <span><b>Last name : </b></span>
                                <span>{this.state.name.lname}</span>
                            </div>
                            <div>
                                <span><b>Birth Year : </b></span>
                                <span>{this.state.birthDetails.year}</span>
                            </div>
                            <div>
                                <span><b>Birth location : </b></span>
                                <span>{this.state.birthDetails.location}</span>
                            </div>
                            <div>
                                <span><b>Your age is : </b></span>
                                <span>{age}</span>
                            </div>
                            <button className="submit-button" onClick={this.restartForm}>ReStart</button>
                        </div>)}
                    </div>
                </div>
            </div>
        )
    }
}