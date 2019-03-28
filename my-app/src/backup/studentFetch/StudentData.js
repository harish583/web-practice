
import React from 'react';
import Actions from './actions';

export default class StudentData extends React.Component{
    render(){
        var {data} = this.props;
        return data.list.map((list,i)=>{
            return(
                <div className="list-Elements-holder" key={list.name}>
                    <div className="list-element">{list.name}</div>
                    <div className="list-element">{list.year}</div>
                    <div className="list-element">{list.color}</div>
                    <Actions val={list} clicking={(event)=>this.props.ActionClick(event)} id={i}></Actions>
                    
                </div>
            )
        })
    }
}