import React from 'react';
import './index.css';
import Dropdown from '../../../StudentManagementSystem/Dropdown/index'


export default class QualityDiscription extends React.Component{
    constructor(props){
        super(props);
        this.state={
            assignedList:[...this.props.updatedList],
            x:[]
        }
    }
    select=(val,index)=>{
        if(val==="HIGH"){
            var x=this.state.x;
            var assignedList = this.state.assignedList;
            for(var a =0;a< assignedList;a++){
                if(assignedList[a].Quality==="HIGH")
                    x.push(assignedList[a])
                   this.setState({
                       x:x
                   })
            }
            this.setState({
                assignedList:this.state.x
            })
            
        }
        alert(val)
    }
    render(){
        //var { assignedList } = this.props;
        var assignedList=this.state.assignedList
        var { options } = this.props;
        return (
            <div className="quality-discription">
                <div className="quality-discription-header">Task Assign To Me ({assignedList.length})  <Dropdown options={options} onSelect={this.select}>Preority</Dropdown></div>
                {assignedList.length>0 &&
                <div className="discription-holder-container">
                    {assignedList.map((val,index)=>{
                        return (<div className="discription-holder" key={index}><img src={val.image} />
                            <div className="discription">
                                <div className="quality">{val.Quality}</div>
                                <div className="reason">{val.reasion}</div>
                                <div className="explanation">{val.explanation}</div>
                            </div>
                            <div className="discription-values">
                                <button><span className="right-button"></span></button>
                                <button className="worng"><span className="worng-button">X</span></button>
                            </div>
                        </div>)
                    })}
                </div>}
            </div>
        )
    }
}
QualityDiscription.defaultProps={
    options:[
        {
            value:"HIGH",
            text:"high"
        },
        {
            value:"LOW",
            text:"low"
        },
        {
            value:"MEDIUM",
            text:"medium"
        }
    ],
    updatedList:[
        {
            image:"../../ziplinImages/cleaning-service-professional-equipment-during-260nw-368560784.jpg",
            Quality:"HIGH",
            reasion:"Carpet Cleaning",
            explanation:"Cras quis nulla commodo"
        },
        {
            image:"../../ziplinImages/download.jpeg",
            Quality:"MEDIUM",
            reasion:"Room Cleaning",
            explanation:"Cras quis nulla commodo"
        },
        {
            image:"../../ziplinImages/steam-carpet-cleaning-services-1-1500x630.jpg",
            Quality:"LOW",
            reasion:"Refill Shampoo",
            explanation:"Cras quis nulla commodo"
        },
        {
            image:"../../ziplinImages/cleaning-service-professional-equipment-during-260nw-368560784.jpg",
            Quality:"HIGH",
            reasion:"Carpet Cleaning",
            explanation:"Cras quis nulla commodo"
        },
        {
            image:"../../ziplinImages/download.jpeg",
            Quality:"MEDIUM",
            reasion:"Room Cleaning",
            explanation:"Cras quis nulla commodo"
        },
        {
            image:"../../ziplinImages/steam-carpet-cleaning-services-1-1500x630.jpg",
            Quality:"LOW",
            reasion:"Refill Shampoo",
            explanation:"Cras quis nulla commodo"
        }
    ],
    
}