
import React from 'react';
import './index.css';
import Header from '../zeplinGroupe/components/headerComponent/index';
import TabBar from '../zeplinGroupe/components/tabbar/index';
import QualityDiscription from './components/discription/index';
import PendingTask from './components/pendingTasks/index';

export default class MyTasks extends React.Component{
    render(){
        var { tabValues } = this.props;
        var { selected } = this.props;
        return(
            <div className="my-tasks">
                <Header></Header>
                <TabBar tabs={tabValues} selectedTab={selected}></TabBar>
                {selected=='my tasks' && (<div><QualityDiscription></QualityDiscription>
                <PendingTask></PendingTask></div>)}
            </div>
        )
    }
}
MyTasks.defaultProps={
    tabValues: [
        {
            value:"overview",
            text:"OVERVIEW"
        },
        {
            value:"my tasks",
            text:"MY TASKS"
        },
        {
            value:"open tasks",
            text:"OPEN TASKS"
        }
    ],
    
    selected:"my tasks"
}