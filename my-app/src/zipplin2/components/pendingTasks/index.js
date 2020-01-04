import React from 'react';
import './index.css';
import Dropdown from '../../../StudentManagementSystem/Dropdown/index'
import PropertyContent from './propertyHolder/index';

export default class PendingTask extends React.Component{
    constructor(props){
        super(props);
        this.state={
            height:''
        }
    }

    updateDimensions=()=> {
        this.setState({height: window.innerHeight});
        alert(this.state.height);
    }
    componentWillMount() {
        this.updateDimensions();
    }
    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }
    render(){
        var { pendingTaskList } = this.props;
        var h = this.state.height;
        return (
            <div className="pending-task">
                <div className="pending-task-header">My Pending Tasks ({pendingTaskList.length})<Dropdown>DUE DATE</Dropdown> </div>
                <div className="property-content-holder" style={{height : h - 365+'px',overflow:"auto"}}>
                {pendingTaskList.map((val,index)=>
                    <PropertyContent property={val}></PropertyContent>
                    
                )}
                </div>
            </div>
        )
    }
}
PendingTask.defaultProps={
    pendingTaskList:[
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
    ]
}