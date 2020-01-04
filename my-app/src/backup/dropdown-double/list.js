
import React from 'react';

export default class List extends React.Component{
    render(){
        const { data }= this.props;
        console.log(data)
        return <li className="list" key={data}>{data}</li>
    }
}