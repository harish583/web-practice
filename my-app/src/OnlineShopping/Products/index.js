

import React from 'react';
import './index.css'

export default class Product extends React.Component{
    select=(items)=>{
        this.props.onSelect(items)
    }
    render(){
        const { items } = this.props;
        const { id }= this.props;
        return(
            <div className="product" key={items.name} data-id={id}>
                <img src={items.image} />
                <h3>{items.name}</h3>
                <div>
                    <span>Price:</span>
                    <span>{items.price}$</span>
                </div>
                <div>
                    <span>Size:</span>
                    <span>{items.size}</span>
                </div>
                <button className="add-button" onClick={this.select.bind(this,items)} data-id={id}>{items.use}</button>
            </div>
        )
    }
}