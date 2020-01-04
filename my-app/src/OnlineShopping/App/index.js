
import React from 'react';
import Product from '../Products/index';
import {AllEvents} from '../servieces/all-httpRequest'
import './index.css';
import CratItems from '../cartItems/index';
import Dropdown from '../../StudentManagementSystem/Dropdown/index'


export default class Ecommerce extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items:[],
            cartItems:[],
            cartItemsStatus:false,
            sorting:[]
        }
        this.setState({
            })
    }
    componentDidMount(){
        AllEvents.gettingitems()
        .then((response)=>{
            this.setState({
                items:response,
                sorting:response
            })
        })
    }
    selectedItem=(data)=>{
        var selectedList = this.state.cartItems;
        var code = data.productCode;
        if(data.use=="Remove from cart"){
            data.use="Add To Cart";
            //selectedList.pop(data)
        }
        else {
            //data.use="Remove from cart";
            add(selectedList,code)
            function add(arr, code) {
                const found = arr.some(e => e.productCode === code);
                if (found) 
                return ;
                else selectedList.push(data)
              }
            
        }
        this.setState({
            cartItems:selectedList
        })
    }
    cortHistory=()=>{
        this.setState({
            cartItemsStatus:!this.state.cartItemsStatus,
        })
    }
    removedItem=(data,e)=>{
        var id = e.currentTarget.dataset.id;
        this.state.cartItems.splice(id,1);
        data.use="Add To Crat"
        this.setState({
            cartItems:this.state.cartItems,
        })
    }
    selectType=(value)=>{
        var items =this.state.items;
        if(value==="Low To High"){
            items.sort(function(a, b){
                return a.price-b.price
            })
        }
        if(value==="High To Low"){
            items.sort(function(b, a){
                return a.price-b.price
            })
        }
        if(value==="Name"){
            items.sort(function(a, b){
                var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
                if (nameA < nameB)
                    return -1 
                if (nameA > nameB)
                    return 1
                return 0
            })
        }
        this.setState({
            items:items
        })
    }
    sizeSelected=(e)=>{
        var size = e.currentTarget.textContent;
        var sorting =this.state.sorting;
        var sort=[]
        if(size=="Back"){
            this.setState({
                items:sorting
            })
            return;
        }
        if(size==="XL"){
            for(var x in sorting){
                if(sorting[x].size=="XL"){
                    sort.push(sorting[x])
                }
            }
        }
        if(size==="L"){
            for(var x in sorting){
                if(sorting[x].size=="L"){
                    sort.push(sorting[x])
                }
            }
        }
        if(size==="XXL"){
            for(var x in sorting){
                if(sorting[x].size=="XXL"){
                    sort.push(sorting[x])
                }
            }
        }
        if(size==="M"){
            for(var x in sorting){
                if(sorting[x].size=="M"){
                    sort.push(sorting[x])
                }
            }
        }
        if(size==="S"){
            for(var x in sorting){
                if(sorting[x].size=="S"){
                    sort.push(sorting[x])
                }
            }
        }
        this.setState({
            items:sort
        })
       
    }
    clearCart=()=>{
        this.setState({
            cartItems:[]
        })
    }
    render(){
        var { items } = this.state;
         var { cartItems } = this.state;
         var { cartItemsStatus } = this.state;
         var options=[
            {
                value:"Low To High",
                text:"low to high"
            },
            {
                value:"High To Low",
                text:"high to low"
            },
            {
                value:"Name",
                text:"name"
            }
        ]
        return (
            <div className="ecommerce-app">
                <div>
                    <button className="size-button back-button" onClick={this.sizeSelected}>Back</button>
                    <div className="cart-history-button" onClick={this.cortHistory}>Cart Items-({cartItems.length})</div>
                    <button className="size-button" onClick={this.sizeSelected}>XXL</button>
                    <button className="size-button" onClick={this.sizeSelected}>XL</button>
                    <button className="size-button" onClick={this.sizeSelected}>L</button>
                    <button className="size-button" onClick={this.sizeSelected}>M</button>
                    <button className="size-button" onClick={this.sizeSelected}>S</button>
                    <Dropdown options={options} onSelect={this.selectType}>Sort By</Dropdown>
                </div>
                {(items.length>0)&& items.map((data,index)=>{
                    return <Product items={data} onSelect={this.selectedItem} id={index}></Product>
                })}
                {(cartItemsStatus)&& (
                    <div> 
                        <div className="background" onClick={this.cortHistory}></div>
                        <div className="popup-content">
                        {(cartItems.length>0)&& (
                        <button className="clear-cart-button" onClick={this.clearCart}>Clear Cart</button>)}
                            <div className="cross-mark"  onClick={this.cortHistory}>X</div>
                            {cartItems.map((cartElements,index)=>{
                                return <CratItems cartItem={cartElements} onRemove={this.removedItem} id={index}></CratItems>
                                
                            })}
                            {(cartItems.length<1)&& (
                                <div className="empty-content">Cart is empty</div>
                            )}
                        </div>
                    </div>
                    )
                }
                
            </div>
        )
        
    }
}