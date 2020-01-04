
import  React from 'react';
import './index.css';

export default class HomeComponents extends React.Component{
    clicked=(e)=>{
        var x = e.target.textContent;
        this.props.onSelected(x);
    }
    render(){
        var { elements } = this.props;
        var { textcontent } = this.props;
        var { customData } = this.props;
        
        return (
            <div className="home-component">
                <div className="avatar-container">
                    <img src="http://www.site-mechanics.com/GetScaled.ashx?params=ECAA9M2YhxWZklUbhdWZIFmbkxWZyBVYyFWblRXZyNHIlhHch6GZp63Z0IiRhx3clJCIwFGdo2jI-0iclN4b2J4YlN4Ls03ZvN4L6kDay6yZpZmIgY3by2WY12jIqB4ZiAydpRGdo2jI1gDMiACall3ZoRXPi1SMiAiYn2jIXhWa1VmIg9iP" role="presentation" alt="HRMS"></img>
                </div>
                <div className="content-holder">
                    <div className="text-content">{textcontent}</div>
                    {customData.length>0 && 
                        
                        <div className="customdata-container">{customData.map((val)=>
                            //{val.type=="NORMAL" &&
                                <div className="customdata-container-holder">
                                    <div className="customdata-container-key">{val.key}</div>
                                    <div className="customdata-container-value">{val.value}</div>
                                </div>
                            //}
                    )}</div>}
                    {elements.map((val)=>{
                        return (
                            <div className="links" onClick={this.clicked}>{val.responseText}</div>
                        
                        )
                    })}
                </div>

            </div>

        )

    }
}