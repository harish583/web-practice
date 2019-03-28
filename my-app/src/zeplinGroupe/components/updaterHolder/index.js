import React from 'react';
import './index.css';


export default class UpdaterHolder extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state={
    //         height:''
    //     }
    // }

    // updateDimensions=()=> {
    //     this.setState({height: window.innerHeight});
    //     alert(this.state.height);
    // }
    // componentWillMount() {
    //     this.updateDimensions();
    // }
    // componentDidMount() {
    //     window.addEventListener("resize", this.updateDimensions);
    // }
    // componentWillUnmount() {
    //     window.removeEventListener("resize", this.updateDimensions);
    // }
    render(){
        
        var { tasks } = this.props;
        var { newHeight } = this.props;
        // const pStyle = {
        //     height: this.state.height,
        //     color:'blue',
        //     overflow: 'auto'
        //   };

        return (
            <div className="updater-holder">
                <div className="task-status-header">Tasks Update ({tasks.length})</div>
                <div className="status-update-holder" style={{height:newHeight - 494+'px',overflow:'auto'}}>
                {tasks.map((task,index)=>
                    <div key={index}>
                        <div className="status-update " id={task.status}><div className="task-id">Task ID {task.id} -<span className="status"> {task.status} </span></div><div className="updated-status-info">{task.name} {task.status} the Task ID {task.id} - {task.resion} </div></div>
                        
                    </div>
                )}

                </div>
            </div>
        )
    }
}
UpdaterHolder.defaultProps={
    tasks:[
        {
            id:356,
            status:"Completed",
            name:"Jessica",
            resion:"Refill Shampoo"
        },
        {
            id:357,
            status:"Accepted",
            name:"paul",
            resion:"Bath Towel Request"
        },
        {
            id:357,
            status:"Dismissed",
            name:"paul",
            resion:"Bath Towel Request"
        },
        {
            id:357,
            status:"Dismissed",
            name:"paul",
            resion:"Bath Towel Request"
        },
        {
            id:357,
            status:"Accepted",
            name:"paul",
            resion:"Bath Towel Request"
        },
        {
            id:357,
            status:"Accepted",
            name:"paul",
            resion:"Bath Towel Request"
        },
        {
            id:356,
            status:"Completed",
            name:"Jessica",
            resion:"Refill Shampoo"
        },
        {
            id:357,
            status:"Accepted",
            name:"paul",
            resion:"Bath Towel Request"
        },
        {
            id:357,
            status:"Dismissed",
            name:"paul",
            resion:"Bath Towel Request"
        },
        {
            id:357,
            status:"Dismissed",
            name:"paul",
            resion:"Bath Towel Request"
        },
        {
            id:357,
            status:"Accepted",
            name:"paul",
            resion:"Bath Towel Request"
        },
        {
            id:357,
            status:"Accepted",
            name:"paul",
            resion:"Bath Towel Request"
        },
        {
            id:356,
            status:"Completed",
            name:"Jessica",
            resion:"Refill Shampoo"
        },
        {
            id:357,
            status:"Accepted",
            name:"paul",
            resion:"Bath Towel Request"
        },
        {
            id:357,
            status:"Dismissed",
            name:"paul",
            resion:"Bath Towel Request"
        },
        {
            id:357,
            status:"Dismissed",
            name:"paul",
            resion:"Bath Towel Request"
        },
        {
            id:357,
            status:"Accepted",
            name:"paul",
            resion:"Bath Towel Request"
        },
        {
            id:357,
            status:"Accepted",
            name:"paul",
            resion:"Bath Towel Request"
        },
    ]
}