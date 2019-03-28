
import React from 'react';
import './index.css';


export default class NavBarContent extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        var { val } = this.props
        return(
            <div className="navbar-content">
                <div className="content-holder">
                    <img className="image" src={val.image} />
                    <div>
                        <div className="image-header">{val.name}</div>
                        <div>{val.users} users</div>
                        <div>{val.followers} followers</div>
                        <div>{val.likes} likes</div>
                    </div>
                </div>
            </div>
        )
    }
}