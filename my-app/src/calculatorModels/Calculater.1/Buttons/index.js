import React from 'react';
import "./index.css";

export default class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state={
            buttons:[1,2,3,'<--',4,5,6,'-',7,8,9,'+','/',0,'*','='],
            enteredValue:[],
            keyValue:false
        }
        this.enteredValue = this.clickingValue.bind(this)
    }
    clickingValue=(e)=>{
        if(this.state.keyValue == true){
            this.setState({
                enteredValue:[e.target.textContent],
                keyValue:false
            }) 
            return ;
        }
        if(e.target.textContent=='<--'){
            this.state.enteredValue.pop();
            this.setState({
                enteredValue:this.state.enteredValue
            })
            return;
        }
        if(( e.target.textContent=="")){
            var x = e.target.value;
            var value = x.charAt(x.length-1);
        }
        else value = e.target.textContent
        if(value=="="){
            this.setState({
                enteredValue:[eval(this.state.enteredValue.join(""))],
                keyValue:true
            })
            return 
        }
        var old = this.state.enteredValue;
        var x = old.push(value);
        
        this.setState({
            enteredValue:old,
            keyValue:false
        })

        //old;
    }
    render(){
        const { buttons } = this.state
        
        return(
            <div className='calculator'>
                <div>
                    <input type="text" className="input-field" value={this.state.enteredValue.join("")} onChange={this.enteredValue}></input>
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