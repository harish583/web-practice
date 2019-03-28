import React, { Component } from 'react';
import './index.css';

export default class Dropdown extends Component{
    constructor(props){
        super(props);
        this.state={
            isOpen: false
        }
        this.documentClickedEvent = this.documentClicked.bind(this)
    }
    toggleShow() {
        const isOpen = !this.state.isOpen;
        this.setState({
            isOpen: isOpen
        });
        if (isOpen) {
            document.addEventListener('click', this.documentClickedEvent);
        } else {
            this.unbindEvent();
        }
    }
    handleOptionClick(event) {
        this.toggleShow();
        const value = event.currentTarget.dataset.value;
        const index = event.currentTarget.dataset.index;
        this.props.onSelect(value, parseInt(index));
    }
    documentClicked() {
        this.toggleShow();
    }
    unbindEvent() {
        document.removeEventListener('click', this.documentClickedEvent);   
    }
    componentWillUnmount() {
        this.unbindEvent();
    }
    render(){
        const { isOpen } = this.state;
        const { children, options } = this.props;
        return (
            <div className="dropdown">
                <div className="dropdown-text" onClick={this.toggleShow.bind(this)}>{children}</div>
                {
                    isOpen && (<div className="dropdown-options">
                        {
                            options.map((option, index) => {
                                return (
                                    <div
                                        key={index}
                                        data-index={index}
                                        data-value={option.value}
                                        className="dropdown-option"
                                        onClick={this.handleOptionClick.bind(this)}
                                    >
                                        {option.displayValue}
                                    </div>
                                );
                            })
                        }
                    </div>) 
                }
            </div>
        )
    }
}

Dropdown.defaultProps = {
    options: [{
        value: 'option1',
        displayValue: 'Option 1'
    }, {
        value: 'option2',
        displayValue: 'Option 2'
    }],
    children: 'Dropdown text'
}
