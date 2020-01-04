
import  React from 'react';
import './index.css';

export default class Header extends React.Component{
    render(){
        var { text } = this.props;
        return (
            <div className="header">{text}
            </div>

        )

    }
}