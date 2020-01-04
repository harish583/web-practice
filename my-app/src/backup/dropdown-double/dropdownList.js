import React from 'react';
import List from './list'

export default class DropdownListHolder extends React.Component{
    render(){
        
        const { abc } = this.props;
        if(!abc.status){
            return null;
        }
        return <ul className="list-holder">
                {/* {abc.dropdownList.map((val)=>{<li className="list">{val}</li>})} */}
                {
                    abc.dropdownList.map((val)=>{
                    return <List data={val} key={val}></List>
                })}
            </ul>
        //}
    }
}