
import  React from 'react';
import './index.css';

export default class HeaderLinks extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectedElementIndex:'',
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
                {!(HeaderText === "Resume") && <div className={classname +(selectedElementIndex==HeaderIndex ? "selected" : " ")} data-id={HeaderIndex} onClick={this.linkClicked}>{HeaderText}</div>}
                {HeaderText ==="Resume" && <a href="https://harish583.github.io/web-practice/resume/resume.html" target="_blank" className={classname +(selectedElementIndex==HeaderIndex ? "selected" : " ")} data-id={HeaderIndex}>{HeaderText}</a>}
                
            </div>
        )

    }
}