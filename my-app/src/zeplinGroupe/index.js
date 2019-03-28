import React from 'react';
import Header from './components/headerComponent/index';
import TabBar from './components/tabbar/index';
import TaskStatusCompleted from './components/taskStatusCompleted/index';
import './index.css';
import TaskStatusPending from './components/taskStatusPending/index';
import UpdaterHolder from './components/updaterHolder/index';
import ProductDetails from './components/discription/index'

export default class GroupeIO extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectedTab:'today',
            height:''
        }
    }
    selectedTab=(x)=>{
        this.setState({
            selectedTab:x
        })
    }

    updateDimensions=()=> {
        this.setState({height: window.innerHeight});
       // alert(this.state.height);
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
        var { height } = this.state;   
        return(
            <div className="groupeIO">
                <div>
                    <Header></Header>
                    <ProductDetails></ProductDetails>
                    <TabBar tabSelect={this.selectedTab} selectedTab={this.state.selectedTab}></TabBar>
                    {this.state.selectedTab==="today" &&
                        <div className="content">
                            <div className="status-holder">
                                <div className="completed-task-status">
                                    <TaskStatusCompleted></TaskStatusCompleted>
                                </div>
                                <div className="pending-task-status">
                                    <TaskStatusPending></TaskStatusPending>
                                </div>
                            </div>
                            <UpdaterHolder newHeight={height}></UpdaterHolder>
                            
                        </div>
                    }
                    {this.state.selectedTab==='overall'&&
                        <div className="overall-header">ComingSoon.........</div>
                    }
                    <div className="create-task">CREATE NEW TASK</div>
                </div>
            </div>
        )
    }
}
