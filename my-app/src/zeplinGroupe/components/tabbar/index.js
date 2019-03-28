import React from 'react';
import './index.css';


export default class TabBar extends React.Component{
    tabSeleceted=(e)=>{
        var x = e.currentTarget.dataset.value;
        const { tabSelect } = this.props;
        if (tabSelect) {        
            tabSelect(x);
        }
    }
    render(){
        var { tabs } = this.props;
        var { selectedTab } = this.props;
        return (
            <div className="tab-bar">
                {tabs.length>0 && tabs.map((tab)=>{
                    return (<span 
                        key={tab.value}
                        className="tab-bar-element"
                        onClick={this.tabSeleceted}
                        data-value={tab.value}
                    >
                    {selectedTab===tab.value && 
                    (
                        <span className="tab-element tab-element-activated">{tab.text}</span>
                    )
                    }
                    {selectedTab!==tab.value && 
                    (
                        <span className="tab-element">{tab.text}</span>
                    )}
                    </span>)
                })}
            </div>
        )
    }
}
TabBar.defaultProps={
    tabs:[
        {
            value:"today",
            text:"TODAY"
        },
        {
            value:"overall",
            text:"OVERALL"
        }
    ]
}