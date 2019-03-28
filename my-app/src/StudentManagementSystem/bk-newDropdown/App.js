
import React from 'react';
import StudentsList from './StudentsList';
import './App.css';

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            students:[]
        }
    }
    gettingData(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>response.json())
        .then((response)=>this.setState({
            students:response
        }))
    }
    componentDidMount(){
        
        this.gettingData();
    }
    render(){
        // const students = [
        //     {
        //         "fname":"fname 1",
        //         "lname":"lname 1",
        //         "phoneNumber":"phoneNumber 1",
        //         "address":"address 1"
        //     },
        //     {
        //         "fname":"fname 2",
        //         "lname":"lname 2",
        //         "phoneNumber":"phoneNumber 2",
        //         "address":"address 2"
        //     }]
        return(
            <div className="App-holder">
                <div>
                    <h2>STUDENT'S DETAILS....</h2>
                    {this.state.students.length ===0 && (<div className="Add-Student-Button">Add first Student</div>)}
                </div>
                {!(this.state.students    ===0) && (<div>
                    <div className="Add-Student-Button">Add Student</div>
                    <div className="student-row">
                    <div className="student-row-singleContent"><b>Name</b></div>
                    <div className="student-row-singleContent"><b>Username</b></div>
                    <div className="student-row-singleContent"><b>Email</b></div>
                </div>
                <StudentsList students={this.state.students}></StudentsList></div>)}
            </div>
        )
    }
}