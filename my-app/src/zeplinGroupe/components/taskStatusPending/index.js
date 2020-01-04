import React from 'react';
import './index.css';


export default class TaskStatusPending extends React.Component{
    render(){
        var { status } = this.props;
        var { progress } = this.props;
        var { pendingTasks } = this.props;
        var { open } = this.props;
        return (
            <div className="task-status-pending">
                <div>{status}</div>
                <div className="status-count-pending"><span className="status-count-number">{pendingTasks.length}</span><span> tasks </span></div>
                <div className="history">
                    <div><div className="single-line">{progress.length} in progress</div> </div>
                    <div><div className="single-line">{open.length} Open</div></div>
                </div>
            </div>
        )
    }
}
TaskStatusPending.defaultProps={
    status:"PENDING",
    pendingTasks:[],
    progress:[],
    open:[]
}