
import  React from 'react';
import './index.css';


export default class HomeComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectedButton:"",
            selectedId:'',
            popupStatus:false
        }
    }
    extraInfoButtonClicked=(e)=>{
        var selected = e.target.textContent;
        var id = e.target.dataset.id;
        this.setState({
            selectedButton:selected,
            selectedId:id,
            popupStatus:true,
            selectedPlace:this.props.places

        })
        document.body.classList.add("overflow");
    }
    popupClose=()=>{
        this.setState({
            popupStatus:false
        })
        document.body.classList.remove("overflow");

    }
    render(){
        var places  = this.props.places;
        var popupStatus = this.state.popupStatus;
        var id = this.state.selectedId;
        var selectedButton = this.state.selectedButton;
        // var location = places[id].name
        return (
            <div className="home-component-holder">
                <div className="logo-background"></div>
                <h1 className="header-discription"><div>Hello, I'm <span className="name">Harish Kyatham</span>.</div>
                    <div>I'm a FrontEnd Developer</div>
                </h1>
                <div className="swipe-down-button">View my work <i className="fas fa-arrow-right"></i></div>
                <div>
                    
                </div>
            </div>

        )

    }
}
HomeComponent.defaultProps={
}