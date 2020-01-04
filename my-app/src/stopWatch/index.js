
import React from 'react';
import './index.css';
import hourniddle from './clockNiddles/minutes.png'
import minuteniddle from './clockNiddles/8iEboEy8T.png'
import secondsniddle from './clockNiddles/minutiosuti.png'

export default class StopWatch extends React.Component{
    constructor(props){
        super(props);
        this.state={
            setTime:4,
            minutes:4,
            seconds:0,
            timeOut:'',
            presentTime:{
                hour:'',
                min:'',
                sec:''
            }
        }
    }
    componentDidMount(){
        var h = new Date().getHours();
        var m = new Date().getMinutes();
        var s = new Date().getSeconds();
        var time = {
            hour:h,
            min:m,
            sec:s
        }
        this.setState({
            presentTime:time
        })
    }
    timerValueChange=(e)=>{
        var val = e.currentTarget.textContent;
        var newTime = this.state.setTime;
        
        if(val==="+"){
            newTime++
        }
        if(val==="-"){
            newTime--
        }
        if(newTime==0){
            return null;
        }
        this.setState({
            setTime:newTime,
            minutes:newTime
        })
    }
    startWatch=()=>{
        var min = this.state.minutes;
        var sec = this.state.seconds;
        var timer = this.state.timeOut
        if(min<1&&sec<1){
            alert("tomeout");
            this.setState({
                minutes:0,
                seconds:0   
            })
            clearInterval(timer)
            return ;
        }
        if(min>=1&&sec<1){
            this.setState({
                minutes:min-1,
                seconds:59
            })
        }
        else{
            this.setState({
                seconds:sec-1
            })
        }
    }
    countingStart=()=>{
        var time = setInterval(this.startWatch,10);
        this.setState({
            timeOut:time
        })
    }

    render(){
        return(
            <div className="stopwatch">
                <div className="settime-holder">
                    <div>StopWatch timing <mark> {this.state.setTime} </mark> min.</div>
                    <button onClick={this.timerValueChange}>-</button>
                    <button onClick={this.timerValueChange}>+</button>
                </div>
                <div className="display-time-counter-holder">
                    <button onClick={this.countingStart}>Start WatchCounting</button>
                    <h1>{this.state.minutes}:{this.state.seconds}</h1>
                </div>
                <div>
                    <div>{this.state.presentTime.hour}:{this.state.presentTime.min}:{this.state.presentTime.sec}</div>
                    <div className="clock-border">
                        <div className="centerpoint">
                            <img className="niddle hour" src={hourniddle} style='transform:{this.state}'/>
                            <img className="niddle" src={minuteniddle} />
                            <img className="niddle" src={secondsniddle} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} 