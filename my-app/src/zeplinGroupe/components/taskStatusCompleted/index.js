import React from 'react';
import './index.css';


export default class TaskStatusCompleted extends React.Component{
    render(){
        var { status } = this.props;
        var { totalTasks } = this.props;
        var { completedTasks } = this.props;
        return (
            <div className="task-status-completed">
                <div>{status}</div>
                <div className="counter-holder">
                    <div className="status-count"><span className="status-count-number">{completedTasks.length}</span><span> out of </span></div>
                    <div className="status-count">{totalTasks.length} tasks</div>
                </div>
            </div>
        )
    }
}
TaskStatusCompleted.defaultProps={
    status:"COMPLETED",
    totalTasks:[],
    completedTasks:[]

}