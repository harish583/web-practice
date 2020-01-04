

import React from 'react';
import './studentFetch.css';
import StudentData from './StudentData';
//import { gettingData } from './gettingData';
//import httpRequest from './httpRequest';

export default class StudentFetch extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:[
                  {
                    "id": 1,
                    "name": "cerulean",
                    "year": 2000,
                    "color": "#98B2D1",
                    "pantone_value": "15-4020"
                  },
                  {
                    "id": 2,
                    "name": "fuchsia rose",
                    "year": 2001,
                    "color": "#C74375",
                    "pantone_value": "17-2031"
                  },
                  {
                    "id": 3,
                    "name": "true red",
                    "year": 2002,
                    "color": "#BF1932",
                    "pantone_value": "19-1664"
                  }
                ]
              
        }
        // this.outside = this.OutsideClick.bind(this)
    }
    // componentDidMount(){
    //     gettingData()
    //     .then((response) => {
    //         this.setState({
    //             list: response.data
    //         });
    //     });
    // }
    Action(event){
        var id = event.target.id;
        var x1 = {
            ...this.state.list[id],
            pantone_value:!this.state.list[id].pantone_value
        }
        
        var xcopy = [...this.state.list];
        xcopy[id] = x1;
        
        this.setState({
            list: xcopy
        })
    }
    render(){
        return(
            <div className='content-holder'>
                <div className="header-holder">
                    <h2 className="header">Student data</h2>
                    <button className="AddData">Add Data</button>
                </div>
                {this.state.list.length < 1 && <h2>Data is empty</h2>}
                
                {this.state.list.length >0 && 
                <div>
                    <div className="list-header-holder">
                        <div className="list-header">Name</div>
                        <div className="list-header">Year</div>
                        <div className="list-header">Color</div>
                    </div>
                    <StudentData data={this.state} ActionClick={(event)=>this.Action(event)}></StudentData>
                </div>
                }
                
            </div>
        )
    }
}