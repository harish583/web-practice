import React from 'react';
import './index.css';

export default class PropertyContent extends React.Component{
    render(){
        var { property } = this.props
        return (
            <div className="property-content" id={property.Quality}>
                <img src={property.image} />
                <div className="property-specifications">
                    <div className="property-Quality">{property.Quality}</div>
                    <div className="property-reasion">{property.reasion}</div>
                    <div className="property-explanation">{property.explanation}</div>
                </div>
            </div>
        )
    }
}