
import React from 'react';
import './index.css'

export default class Wiki extends React.Component{
    constructor(props){
        super(props);
        this.state={
            enteredValue:''
        }
    }
    textedWiki=(e)=>{
        var val = e.currentTarget.value;
        this.setState({
            enteredValue:val
        })
    }
    searchClicked=()=>{
        // fetch("https://en.wikipedia.org/wiki/"+this.state.enteredValue)
        fetch(""+this.state.enteredValue)
        .then((response)=>response.json(),alert("data1"))
        .then((data)=>alert("data"))
    }
    render(){
        return(
            <div>
                <h2>Wikipedia Viewer</h2>
                <input className="input-text-field" type="text" placeholder="search wiki" onChange={this.textedWiki}/>
                <button className="search-button" onClick={this.searchClicked}>Search</button>
            </div>
        )
    }
} 