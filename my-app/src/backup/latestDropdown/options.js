
import React  from 'react';

export default class Options extends React.Component{
    render(){
        var { val } = this.props;
        if(!val.status){
            return null;
        }
        return val.list.map((Element)=>{
        return (
            <ul className="All-options">
                <li className="list-value" key={Element}>{Element}</li>
            </ul>
        )
        })
    }
}

