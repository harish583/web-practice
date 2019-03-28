

import React from 'react';
import './index.css'

export default class CratItems extends React.Component{
    select=(items)=>{
        this.props.onSelect(items)
    }
    render(){
        const { items } = this.props;
        const { cartItem } = this.props;
        const { id } = this.props
        return(
            <div className="product" key={cartItem.name}>
                <img src={cartItem.image} />
                <h3>{cartItem.name}</h3>
                <div>
                    <span>Price:</span>
                    <span>{cartItem.price}$</span>
                </div>
                <button className="add-button" onClick={this.props.onRemove.bind(this,cartItem)} data-id={id}>Remove</button>
            </div>
        )
    }
}