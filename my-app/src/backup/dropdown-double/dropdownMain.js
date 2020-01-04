
import React from 'react';
import DropdownList from './dropdown';

export default class Holder extends React.Component{
    render(){
        return  <div><DropdownList></DropdownList>
        <DropdownList></DropdownList>
        <DropdownList></DropdownList>
        <DropdownList></DropdownList>
        </div>
    }
}