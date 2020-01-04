import React from 'react';
import "./index.css";

export default class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state={
            buttons:[1,2,3,'<--',4,5,6,'-',7,8,9,'+','/',0,'*','='],
            enteredValue:'',
            keyValue:false
        }
        this.enteredValue = this.clickingValue.bind(this)
    }
    clickingValue=(e)=>{
        if(this.state.keyValue == true){
            this.setState({
                enteredValue:e.target.textContent,
                keyValue:false
            }) 
            return ;
        }
        if(e.target.textContent=='<--'){
            var x = this.state.enteredValue.slice(0,-1);
            this.setState({
                enteredValue:x
            })
            return;
        }

        if((e.target.textContent=="+")||(e.target.textContent=="-")||(e.target.textContent=="*")||(e.target.textContent=="/")){
            var enteredValue= this.state.enteredValue
            if((enteredValue.slice(enteredValue.length-1)=="+")||(enteredValue.slice(enteredValue.length-1)=="-")||(enteredValue.slice(enteredValue.length-1)=="*")||(enteredValue.slice(enteredValue.length-1)=="/")){
                alert("Operation is already selected");
                return;
            }
        }

        if(( e.target.textContent=="")){
            var enteredValue= this.state.enteredValue
            if(enteredValue.length>1){
                var value = e.target.value.slice(enteredValue.length)
                if((value=="+")||(value=="-")||(value=="*")||(value=="/")){
                    var enteredValue= this.state.enteredValue
                    if((enteredValue.slice(enteredValue.length-1)=="+")||(enteredValue.slice(enteredValue.length-1)=="-")||(enteredValue.slice(enteredValue.length-1)=="*")||(enteredValue.slice(enteredValue.length-1)=="/")){
                        alert("Operation is already selected");
                        return;
                    }
                }
            }
            var x = e.target.value;
            var value =x;
        }
        else value = this.state.enteredValue+e.target.textContent
        if(e.target.textContent=="="){
            this.setState({
                enteredValue:eval(this.state.enteredValue),
                keyValue:true
            })
            return 
        }
        this.setState({
            enteredValue:value,
            keyValue:false
        })

    }
    render(){
        const { buttons } = this.state
        
        return(
            <div className='calculator'>
                <div>
                    <input type="text" className="input-field" value={this.state.enteredValue} onChange={this.enteredValue}></input>
                    {
                        buttons.map((val,index)=>{
                            return <button className="calcuated-value" key={val}onClick={this.enteredValue}>{val}</button>
                        })
                    }
                </div>
            </div>
        )
    }
}