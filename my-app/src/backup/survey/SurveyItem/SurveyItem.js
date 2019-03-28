import React, { Component } from 'react';
import './index.css';

export default class SurveyItem extends Component{
    render() {
        const { data } = this.props;
        return (
            <div className="survey-item">
                <span className="icon-survey"></span>
                <div className="content-holder">
                    <div className="image-holder">
                        <img className="image" src={data.image} />
                    </div>
                    <div className="text-content">{data.title}</div>
                    <a className="survey-button" href={data.url} target="_blank">Take the survey</a>
                </div>
            </div>
        )
    }
}