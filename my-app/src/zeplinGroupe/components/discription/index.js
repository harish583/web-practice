import React from 'react';
import './index.css';


export default class ProductDetails extends React.Component{
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
        var assignedList=this.state.assignedList
        return (
            <div className="quality-discription">
                <div className="quality-discription-header">Reassign Tasks ({assignedList.length})</div>
                {assignedList.length>0 &&
                <div className="disctription-content-holder">
                    {assignedList.map((val,index)=>{
                        return (<div className="discription-holder" key={index}><img src={val.image} />
                            <div className="discription">
                                <div className="quality">{val.Quality}</div>
                                <div className="reason">{val.reasion}</div>
                                <div className="explanation">{val.explanation}</div>
                            </div>
                            <div><span className="round-border"><i className="fas fa-undo-alt"></i></span></div>
                        </div>)
                    })}
                </div>}
            </div>
        )
    }
}
ProductDetails.defaultProps={
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