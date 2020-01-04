
import  React from 'react';
import './index.css';

export default class HeaderLinks extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectedElementIndex:0,
        }
    }
    linkClicked=(e)=>{
        var text = e.target.textContent;
        var index = e.target.dataset.id;
        this.setState({
            selectedElementIndex:'',
            selectedElementIndex:index
        })
        this.props.selectedLink(text,index)
    }
    render(){
        var {HeaderText , HeaderIndex} = this.props;
        var selectedElementIndex = this.state.selectedElementIndex;
        var classname = "header-text ";
        return(
            <div key={HeaderIndex}  className="header-link" >
                <div className={classname +(selectedElementIndex==HeaderIndex ? "selected" : "")} data-id={HeaderIndex} onClick={this.linkClicked}>{HeaderText}</div>
            </div>
        )

    }
}