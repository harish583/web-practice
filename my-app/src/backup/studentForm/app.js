import React from 'react';
// import StudentRow from './studentRow';
import './app.css';

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            students:[]
        }
    }
    componentDidMount(){
        this.gettingData();

    }
    gettingData(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>response.json())
        .then((response)=>
            this.setState({
                student:response
            })
        )
    }
    render(){
        return(
            <div>
                <div>{}</div>
            </div>
        )
    }
}