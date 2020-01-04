
import React from 'react';

export default class Dropdown extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectedValue:'option3'
        }
    }
    selected(){
        // this.setState({
        //     selectedValue:this.state.selectedValue 
        // })
        alert("value",this.state.selectedValue);
    }
    changing(event){
        this.setState({
            selectedValue:event.target.value
        })
    }
    render(){
        return (
            <form onSubmit={this.selected.bind(this)}>
                select your option : 
                <select value={this.state.selectedValue} onChange={this.changing.bind(this)}>
                    <option value="option1">option1</option>
                    <option value="option2">option2</option>
                    <option value="option3" selected>option3</option>
                    <option value="option4">option4</option>
                </select>
                <input type="submit"  value ='submit'/>
            </form>
        )
    }
}
